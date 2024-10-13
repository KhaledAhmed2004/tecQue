"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import axios from "axios";
import { IoMdCloudUpload } from "react-icons/io";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useCreatePost } from "@/hooks/posts/useCreatePost";
import { useUpdatePost } from "@/hooks/posts/useUpdatePost";
import { useMe } from "@/hooks/auth/useMe";
import Image from "next/image";
import Button from "@/components/Button";
import { RxCross2 } from "react-icons/rx";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const categoriesData = [
  { key: "software_development", label: "Software Development" },
  { key: "web_development", label: "Web Development" },
  { key: "cybersecurity", label: "Cybersecurity" },
  { key: "devops", label: "DevOps" },
  { key: "machine_learning", label: "Machine Learning" },
  { key: "blockchain", label: "Blockchain" },
  { key: "ui_ux_design", label: "UI/UX Design" },
  { key: "database_management", label: "Database Management" },
  { key: "data_science", label: "Data Science" },
  { key: "software_testing", label: "Software Testing" },
  { key: "system_design", label: "System Design" },
  { key: "internet_of_things", label: "Internet of Things (IoT)" },
  { key: "security_practices", label: "Security Practices" },
  { key: "frontend_development", label: "Frontend Development" },
  { key: "backend_development", label: "Backend Development" },
  { key: "fullstack_development", label: "Fullstack Development" },
  { key: "mobile_app_development", label: "Mobile App Development" },
  { key: "cloud_computing", label: "Cloud Computing" },
  { key: "agile_methodology", label: "Agile Methodology" },
  { key: "project_management", label: "Project Management" },
  { key: "performance_optimization", label: "Performance Optimization" },
  { key: "containerization", label: "Containerization" },
  { key: "api_management", label: "API Management" },
  { key: "distributed_systems", label: "Distributed Systems" },
];

interface FormData {
  title: string;
  content: string;
  category: string;
  author: string;
  images: string[];
  isPremium: boolean;
}

interface PostModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post?: any | null;
}

const CreatePostPage: React.FC<PostModalProps> = ({ post }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      content: "",
      category: "",
      images: [],
      isPremium: false,
    },
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { createPost, isPending: isCreating } = useCreatePost();
  const { updatePost, isPending: isUpdating } = useUpdatePost();
  const { user } = useMe();

  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        content: post.content,
        category: post.category?._id,
        images: post.images,
        isPremium: post.isPremium,
      });
      setUploadedImages(post.images);
    } else {
      reset();
      setUploadedImages([]);
    }
  }, [post, reset]);

  const onSubmit = (newPost: FormData) => {
    clearErrors("images");
    newPost.images = uploadedImages;

    if (post) {
      updatePost({ postId: post._id, newPost });
    } else {
      newPost.author = user._id;
      createPost(newPost);
    }
  };

  const onDrop = async (acceptedFiles: File[]) => {
    setLoading(true);
    const imageUploads = acceptedFiles.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "cleancode");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djkdk03mf/image/upload",
          formData
        );
        return response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        return null;
      }
    });

    const imgUrls = await Promise.all(imageUploads);
    setUploadedImages((prevImages) => [
      ...prevImages,
      ...imgUrls.filter((url): url is string => url !== null),
    ]);
    setLoading(false);
  };

  const removeImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="relative md:w-2/3 mx-auto max-h-[80vh] overflow-auto rounded-lg bg-white p-8 shadow-2xl transition-shadow duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {post ? "Edit Post" : "Add New Post"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none py-2 px-3 transition-colors duration-200"
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            {...register("category", {
              required: "Category is required",
            })}
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none py-2 px-3 transition-colors duration-200"
          >
            <option value="">Select a category</option>
            {categoriesData.map((category) => (
              <option key={category.key} value={category.key}>
                {category.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <Controller
            name="content"
            control={control}
            rules={{ required: "Content is required" }}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                placeholder="Enter post content"
                className="rounded-lg border border-gray-300"
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Images
          </label>
          <Controller
            name="images"
            control={control}
            rules={{
              validate: () =>
                uploadedImages.length > 0 || "At least one image is required",
            }}
            render={({ field }) => (
              <Dropzone
                onDrop={async (acceptedFiles) => {
                  await onDrop(acceptedFiles);
                  field.onChange(uploadedImages);
                }}
                multiple
                accept={{
                  "image/png": [".png"],
                  "image/jpg": [".jpg"],
                  "image/jpeg": [".jpeg"],
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className="w-full px-8 py-4 border border-gray-300 hover:border-blue-500 rounded-md cursor-pointer transition-colors duration-200"
                  >
                    <input {...getInputProps()} />
                    <div className="flex justify-center text-4xl">
                      <IoMdCloudUpload className="text-blue-500" />
                    </div>
                    <p className="text-gray-500 text-center">
                      Upload relevant images for the post
                    </p>
                    {loading && (
                      <p className="text-gray-800 text-center">Uploading...</p>
                    )}
                  </div>
                )}
              </Dropzone>
            )}
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
          <div className="mt-2 flex flex-wrap gap-3">
            {uploadedImages.map((url, index) => (
              <div key={index} className="relative">
                <Image
                  src={url}
                  alt={`Uploaded image ${index + 1}`}
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-md object-cover"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={() => removeImage(index)}
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("isPremium")}
              className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">
              Make this post premium
            </span>
          </label>
        </div>
        <div className="flex justify-center mt-6">
          <Button
            loading={isUpdating || isCreating || loading}
            disabled={isUpdating || isCreating || loading}
          >
            {post ? "Update Post" : "Create Post"}{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
