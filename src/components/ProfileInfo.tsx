// // import { useUpdateMe } from "@/hooks/auth/useUpdateMe";
// // import Image from "next/image";
// // import React, { useCallback, useState } from "react";
// // import { FaCheckCircle, FaEdit, FaSpinner } from "react-icons/fa";
// // import Button from "./Button";
// // import { useForm } from "react-hook-form";
// // import axios from "axios";
// // import { useDropzone } from "react-dropzone";
// // import { FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
// // import { BiSolidHide } from "react-icons/bi";

// // interface IFormInput {
// //   name: string;
// //   email: string;
// //   phone?: string;
// //   address?: string;
// //   profilePic?: string;
// // }

// // const ProfileInfo = ({ user }: { user: IFormInput }) => {
// //   const { isUpdating, updateUser } = useUpdateMe();
// //   const [loading, setLoading] = useState(false);
// //   const [profilePic, setProfilePic] = useState(user?.profilePic);
// //   const [showFields, setShowFields] = useState(false);

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     setValue,
// //   } = useForm<IFormInput>({
// //     defaultValues: {
// //       name: user?.name,
// //       email: user?.email,
// //       phone: user?.phone,
// //       address: user?.address,
// //       profilePic: user?.profilePic,
// //     },
// //   });

// //   const onDrop = useCallback(
// //     async (acceptedFiles: File[]) => {
// //       setLoading(true);
// //       const file = acceptedFiles[0];
// //       const formData = new FormData();
// //       formData.append("file", file);
// //       formData.append("upload_preset", "cleancode");

// //       try {
// //         const response = await axios.post(
// //           "https://api.cloudinary.com/v1_1/djkdk03mf/image/upload",
// //           formData
// //         );
// //         const newProfilePic = response.data.secure_url;
// //         setProfilePic(newProfilePic);
// //         setValue("profilePic", newProfilePic);
// //       } catch (error) {
// //         console.error("Error uploading image:", error);
// //       }

// //       setLoading(false);
// //     },
// //     [setValue]
// //   );

// //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
// //     onDrop,
// //     accept: {
// //       "image/*": [".jpeg", ".png", ".jpg"],
// //     },
// //     maxFiles: 1,
// //   });

// //   const onSubmit = (updatedUser: IFormInput) => {
// //     updateUser(updatedUser);
// //   };

// //   return (
// //     <div className="p-6 bg-white rounded-lg shadow-md">
// //       <h2 className="text-2xl font-semibold text-secondary-text mb-6">
// //         Profile Information
// //       </h2>

// //       {/* Profile Image */}
// //       <div className="flex items-center space-x-4 mb-6">
// //         <div
// //           {...getRootProps()}
// //           className="relative border border-primary-blue p-1 rounded-full cursor-pointer transition-transform transform hover:scale-105"
// //         >
// //           <input {...getInputProps()} />

// //           {/* Loading Indicator */}
// //           {loading ? (
// //             <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200">
// //               <FaSpinner className="animate-spin text-lg" />
// //             </div>
// //           ) : (
// //             <>
// //               <Image
// //                 src={profilePic as string}
// //                 alt="Profile"
// //                 className="w-20 h-20 rounded-full object-cover"
// //                 width={80}
// //                 height={80}
// //               />
// //               <FaCheckCircle className="absolute bottom-1 right-1 text-primary-blue text-xl" />
// //               {isDragActive && (
// //                 <div className="absolute inset-0 bg-blue-200 bg-opacity-50 flex items-center justify-center rounded-full">
// //                   <p className="text-sm text-blue-700">Drop the image here</p>
// //                 </div>
// //               )}
// //             </>
// //           )}
// //         </div>
// //         <div>
// //           <h3 className="text-xl font-medium text-primary-text">
// //             {user?.name}
// //           </h3>
// //           <p className="text-sm text-secondary-text italic">{user?.email}</p>
// //           <p className="text-xs text-primary-blue mt-1">
// //             Click to change profile picture
// //           </p>
// //         </div>
// //       </div>

// //       {/* Toggle Button */}
// //       <Button
// //         className="bg-blue-100 text-blue-800 hover:bg-blue-200"
// //         onClick={() => setShowFields(!showFields)}
// //       >
// //         {showFields ? (
// //           <>
// //             <BiSolidHide className="mr-2" /> Hide Profile Fields
// //           </>
// //         ) : (
// //           <>
// //             <FaEdit className="mr-2" /> Edit Profile
// //           </>
// //         )}
// //       </Button>

// //       {/* Conditionally Show Form Fields */}
// //       {showFields && (
// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
// //           <div>
// //             <label className="block text-sm font-semibold mb-2 text-gray-700">
// //               Name
// //             </label>
// //             <div className="relative">
// //               <FiUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
// //               <input
// //                 type="text"
// //                 {...register("name", { required: "Name is required" })}
// //                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
// //                 placeholder="Enter your name"
// //               />
// //             </div>
// //             {errors.name && (
// //               <p className="text-red-500 text-xs mt-1">
// //                 *{errors.name.message}
// //               </p>
// //             )}
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold mb-2 text-gray-700">
// //               Email Address
// //             </label>
// //             <div className="relative">
// //               <FiMail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
// //               <input
// //                 type="email"
// //                 {...register("email", {
// //                   required: "Email is required",
// //                   pattern: {
// //                     value: /\S+@\S+\.\S+/,
// //                     message: "Invalid email address",
// //                   },
// //                 })}
// //                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
// //                 placeholder="Enter your email"
// //                 disabled
// //               />
// //             </div>
// //             {errors.email && (
// //               <p className="text-red-500 text-xs mt-1">
// //                 *{errors.email.message}
// //               </p>
// //             )}
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold mb-2 text-gray-700">
// //               Phone Number
// //             </label>
// //             <div className="relative">
// //               <FiPhone className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
// //               <input
// //                 type="text"
// //                 {...register("phone")}
// //                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
// //                 placeholder="Enter your phone number"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold mb-2 text-gray-700">
// //               Address
// //             </label>
// //             <div className="relative">
// //               <FiMapPin className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
// //               <input
// //                 type="text"
// //                 {...register("address")}
// //                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
// //                 placeholder="Enter your address"
// //               />
// //             </div>
// //           </div>

// //           <Button
// //             className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
// //             loading={isUpdating || loading}
// //             disabled={isUpdating || loading}
// //           >
// //             Update
// //           </Button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProfileInfo;

// import { useUpdateMe } from "@/hooks/auth/useUpdateMe";
// import Image from "next/image";
// import React, { useCallback, useState } from "react";
// import { FaCheckCircle, FaEdit, FaSpinner } from "react-icons/fa";
// import Button from "./Button";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useDropzone } from "react-dropzone";
// import { FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
// import { BiSolidHide } from "react-icons/bi";

// interface IFormInput {
//   name: string;
//   email: string;
//   phone?: string;
//   address?: string;
//   profilePic?: string;
// }

// const ProfileInfo = ({ user }: { user: IFormInput }) => {
//   const { isUpdating, updateUser } = useUpdateMe();
//   const [loading, setLoading] = useState(false);
//   const [profilePic, setProfilePic] = useState(user?.profilePic);
//   const [showFields, setShowFields] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm<IFormInput>({
//     defaultValues: {
//       name: user?.name,
//       email: user?.email,
//       phone: user?.phone,
//       address: user?.address,
//       profilePic: user?.profilePic,
//     },
//   });

//   const onDrop = useCallback(
//     async (acceptedFiles: File[]) => {
//       setLoading(true);
//       const file = acceptedFiles[0];
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", "cleancode");

//       try {
//         const response = await axios.post(
//           "https://api.cloudinary.com/v1_1/djkdk03mf/image/upload",
//           formData
//         );
//         const newProfilePic = response.data.secure_url;
//         setProfilePic(newProfilePic);
//         setValue("profilePic", newProfilePic);
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }

//       setLoading(false);
//     },
//     [setValue]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".jpeg", ".png", ".jpg"],
//     },
//     maxFiles: 1,
//   });

//   const onSubmit = (updatedUser: IFormInput) => {
//     updateUser(updatedUser);
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-secondary-text mb-6">
//         Profile Information
//       </h2>

//       {/* Profile Image */}
//       <div className="flex items-center space-x-4 mb-6">
//         <div
//           {...getRootProps()}
//           className="relative border border-primary-blue p-1 rounded-full cursor-pointer transition-transform transform hover:scale-105"
//         >
//           <input {...getInputProps()} />

//           {/* Loading Indicator */}
//           {loading ? (
//             <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200">
//               <FaSpinner className="animate-spin text-lg" />
//             </div>
//           ) : (
//             <>
//               <Image
//                 src={profilePic as string}
//                 alt="Profile"
//                 className="w-20 h-20 rounded-full object-cover"
//                 width={80}
//                 height={80}
//               />
//               <FaCheckCircle className="absolute bottom-1 right-1 text-primary-blue text-xl" />
//               {isDragActive && (
//                 <div className="absolute inset-0 bg-blue-200 bg-opacity-50 flex items-center justify-center rounded-full">
//                   <p className="text-sm text-blue-700">Drop the image here</p>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//         <div>
//           <h3 className="text-xl font-medium text-primary-text">
//             {user?.name}
//           </h3>
//           <p className="text-sm text-secondary-text italic">{user?.email}</p>
//           <p className="text-xs text-primary-blue mt-1">
//             Click to change profile picture
//           </p>
//         </div>
//         <button>{user?.followers?.length || 0} Followers</button>
//         <button>{user?.following?.length || 0} Followers</button>
//       </div>

//       {/* Toggle Button */}
//       <Button
//         className="bg-blue-100 text-blue-800 hover:bg-blue-200"
//         onClick={() => setShowFields(!showFields)}
//       >
//         {showFields ? (
//           <>
//             <BiSolidHide className="mr-2" /> Hide Profile Fields
//           </>
//         ) : (
//           <>
//             <FaEdit className="mr-2" /> Edit Profile
//           </>
//         )}
//       </Button>

//       {/* Conditionally Show Form Fields */}
//       {showFields && (
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Name
//             </label>
//             <div className="relative">
//               <FiUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
//               <input
//                 type="text"
//                 {...register("name", { required: "Name is required" })}
//                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
//                 placeholder="Enter your name"
//               />
//             </div>
//             {errors.name && (
//               <p className="text-red-500 text-xs mt-1">
//                 *{errors.name.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Email Address
//             </label>
//             <div className="relative">
//               <FiMail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
//               <input
//                 type="email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /\S+@\S+\.\S+/,
//                     message: "Invalid email address",
//                   },
//                 })}
//                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
//                 placeholder="Enter your email"
//                 disabled
//               />
//             </div>
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">
//                 *{errors.email.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Phone Number
//             </label>
//             <div className="relative">
//               <FiPhone className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
//               <input
//                 type="text"
//                 {...register("phone")}
//                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-2 text-gray-700">
//               Address
//             </label>
//             <div className="relative">
//               <FiMapPin className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
//               <input
//                 type="text"
//                 {...register("address")}
//                 className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
//                 placeholder="Enter your address"
//               />
//             </div>
//           </div>

//           <Button
//             className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
//             loading={isUpdating || loading}
//             disabled={isUpdating || loading}
//           >
//             Update
//           </Button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ProfileInfo;

import { useUpdateMe } from "@/hooks/auth/useUpdateMe";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { FaCheckCircle, FaEdit, FaSpinner } from "react-icons/fa";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import { BiSolidHide } from "react-icons/bi";
import { Modal } from "antd";

interface IFormInput {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  profilePic?: string;
}

const ProfileInfo = ({ user }: { user: IFormInput }) => {
  const { isUpdating, updateUser } = useUpdateMe();
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState(user?.profilePic);
  const [showFields, setShowFields] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentList, setCurrentList] = useState<"followers" | "following">("followers");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      profilePic: user?.profilePic,
    },
  });

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setLoading(true);
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "cleancode");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djkdk03mf/image/upload",
          formData
        );
        const newProfilePic = response.data.secure_url;
        setProfilePic(newProfilePic);
        setValue("profilePic", newProfilePic);
      } catch (error) {
        console.error("Error uploading image:", error);
      }

      setLoading(false);
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    maxFiles: 1,
  });

  const onSubmit = (updatedUser: IFormInput) => {
    updateUser(updatedUser);
  };

  const showModal = (type: "followers" | "following") => {
    setCurrentList(type);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-secondary-text mb-6">
        Profile Information
      </h2>

      {/* Profile Image */}
      <div className="flex items-center space-x-4 mb-6">
        <div
          {...getRootProps()}
          className="relative border border-primary-blue p-1 rounded-full cursor-pointer transition-transform transform hover:scale-105"
        >
          <input {...getInputProps()} />

          {/* Loading Indicator */}
          {loading ? (
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200">
              <FaSpinner className="animate-spin text-lg" />
            </div>
          ) : (
            <>
              <Image
                src={profilePic as string}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
                width={80}
                height={80}
              />
              <FaCheckCircle className="absolute bottom-1 right-1 text-primary-blue text-xl" />
              {isDragActive && (
                <div className="absolute inset-0 bg-blue-200 bg-opacity-50 flex items-center justify-center rounded-full">
                  <p className="text-sm text-blue-700">Drop the image here</p>
                </div>
              )}
            </>
          )}
        </div>
        <div>
          <h3 className="text-xl font-medium text-primary-text">
            {user?.name}
          </h3>
          <p className="text-sm text-secondary-text italic">{user?.email}</p>
          <p className="text-xs text-primary-blue mt-1">
            Click to change profile picture
          </p>
        </div>
        <button onClick={() => showModal("followers")}>
          {user?.followers?.length || 0} Followers
        </button>
        <button onClick={() => showModal("following")}>
          {user?.following?.length || 0} Following
        </button>
      </div>

      {/* Toggle Button */}
      <Button
        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
        onClick={() => setShowFields(!showFields)}
      >
        {showFields ? (
          <>
            <BiSolidHide className="mr-2" /> Hide Profile Fields
          </>
        ) : (
          <>
            <FaEdit className="mr-2" /> Edit Profile
          </>
        )}
      </Button>

      {/* Conditionally Show Form Fields */}
      {showFields && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
                placeholder="Enter your name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                *{errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
                placeholder="Enter your email"
                disabled
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                *{errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <FiPhone className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input
                type="text"
                {...register("phone")}
                className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Address
            </label>
            <div className="relative">
              <FiMapPin className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input
                type="text"
                {...register("address")}
                className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200 hover:border-blue-400"
                placeholder="Enter your address"
              />
            </div>
          </div>

          <Button
            type="submit"
            className={`w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200 ${
              isUpdating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isUpdating}
          >
            {isUpdating ? <FaSpinner className="animate-spin" /> : "Save Changes"}
          </Button>
        </form>
      )}

       {/* Modal for Followers and Following */}
       <Modal
        title={currentList === "followers" ? "Followers" : "Following"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          {currentList === "followers" ? (
            user?.followers?.length > 0 ? (
              user.followers.map((follower, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Image
                    src={follower.profilePic || "/default-profile.png"}
                    alt={follower.name}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                    width={32}
                    height={32}
                  />
                  <span className="text-gray-800">{follower.name}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No followers yet.</p>
            )
          ) : user?.following?.length > 0 ? (
            user.following.map((followingUser, index) => (
              <div key={index} className="flex items-center mb-2">
                <Image
                  src={followingUser.profilePic || "/default-profile.png"}
                  alt={followingUser.name}
                  className="w-8 h-8 rounded-full object-cover mr-2"
                  width={32}
                  height={32}
                />
                <span className="text-gray-800">{followingUser.name}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Not following anyone yet.</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ProfileInfo;
