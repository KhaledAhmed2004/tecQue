// "use client";
// import { FaPlus, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
// import { usePosts } from "../hooks/posts/usePosts";
// import Button from "./Button";
// import { useDeletePost } from "../hooks/posts/useDeletePost";
// import { useState } from "react";
// import PostModal from "./modals/PostModal";
// import ErrorMessage from "./ErrorMessage";
// import Spinner from "./Spinner";
// import { useMe } from "@/hooks/auth/useMe";
// import InfiniteScroll from "react-infinite-scroller";

// const getStatusBadgeColor = (status: boolean) => {
//   switch (status) {
//     case true:
//       return "bg-primary-green text-white";
//     case false:
//       return "bg-primary-red text-white";
//     default:
//       return "bg-secondary-grey text-white";
//   }
// };

// const PostTable = () => {
//   const { user } = useMe();
//   const {
//     posts: allPosts,
//     error,
//     isLoading,
//     fetchNextPage,
//     hasNextPage,
//   } = usePosts();
//   console.log(allPosts);

//   const posts =
//     user?.role === "admin"
//       ? allPosts
//       : allPosts.filter((post) => post.author._id === user?._id);

//   const { deletePost } = useDeletePost();
//   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
//   const [selectedPost, setSelectedPost] = useState(null);

//   if (isLoading) return <Spinner />;
//   if (error) return <ErrorMessage message={error.message} />;
//   if (!posts.length) return <ErrorMessage message={"No Posts Found"} />;

//   return (
//     <InfiniteScroll
//       key={posts?.length}
//       pageStart={1}
//       loadMore={() => fetchNextPage()}
//       hasMore={hasNextPage}
//       loader={<Spinner className="my-4" />}
//     >
//       <div className="shadow overflow-x-auto rounded-lg">
//         <table className="w-full text-sm text-secondary-text">
//           <thead className="bg-secondary-background text-xs uppercase font-medium text-primary-text">
//             <tr>
//               <th className="px-4 py-3">#</th>
//               <th className="px-6 py-3 text-left tracking-wider whitespace-nowrap">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-left tracking-wider whitespace-nowrap hidden sm:table-cell">
//                 Author
//               </th>
//               <th className="px-6 py-3 text-left tracking-wider whitespace-nowrap hidden md:table-cell">
//                 Category
//               </th>
//               <th className="px-6 py-3 text-left tracking-wider whitespace-nowrap hidden lg:table-cell">
//                 Status
//               </th>
//               <th className="px-6 py-3 flex items-center text-left tracking-wider whitespace-nowrap">
//                 <span className="hidden sm:inline">Actions</span>
//                 <Button
//                   className="text-sm py-2 px-2 ml-2"
//                   onClick={() => {
//                     setSelectedPost(null);
//                     setModalIsOpen(true);
//                   }}
//                 >
//                   <FaPlus />
//                 </Button>
//               </th>
//             </tr>
//           </thead>

//           <tbody className="bg-primary-background">
//             {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
//             {posts?.map((post: any, index: number) => (
//               <tr
//                 key={post._id}
//                 className={`${
//                   index % 2 === 0 ? "bg-secondary-background bg-opacity-20" : ""
//                 }`}
//               >
//                 <td className="px-4 py-4">{index + 1}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
//                 <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
//                   {post.author.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
//                   {post.category.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getStatusBadgeColor(
//                       post.isPremium
//                     )}`}
//                   >
//                     {post.isPremium ? "Premium" : "Free"}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex gap-2 items-center">
//                     <Button
//                       className="text-sm py-2 px-2"
//                       onClick={() => {
//                         setSelectedPost(post);
//                         setModalIsOpen(true);
//                       }}
//                     >
//                       <FaRegPenToSquare />
//                     </Button>
//                     <Button
//                       className="text-sm py-2 px-2"
//                       onClick={() => deletePost(post._id)}
//                     >
//                       <FaRegTrashCan />
//                     </Button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <PostModal
//           modalIsOpen={modalIsOpen}
//           setModalIsOpen={setModalIsOpen}
//           post={selectedPost}
//         />
//       </div>
//     </InfiniteScroll>
//   );
// };

// export default PostTable;

"use client";
import { usePosts } from "../hooks/posts/usePosts";
import { useDeletePost } from "../hooks/posts/useDeletePost";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroller";
import Image from "next/image";
import React, { useState } from "react";
import PostMedia from "./PostMedia";
import PostAuthor from "./PostAuthor";
import Link from "next/link";
import { useMe } from "@/hooks/auth/useMe";
import { FaStar, FaEllipsisH } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import Button from "./Button";
import { Modal, message } from "antd";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Define the TPost interface
export interface TPost {
  _id?: Types.ObjectId;
  title: string;
  content: string;
  author: Types.ObjectId;
  category: string;
  images: string[];
  isPremium: boolean;
  upvotes: Types.ObjectId[];
  downvotes: Types.ObjectId[];
}

const PostTable = () => {
  const router = useRouter(); // Initialize the router
  const { user } = useMe();
  const {
    posts: allPosts,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = usePosts();

  const posts =
    user?.role === "admin"
      ? allPosts
      : allPosts.filter((post) => post.author._id === user?._id);

  const { deletePost } = useDeletePost();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!posts.length) return <ErrorMessage message={"No Posts Found"} />;

  const PostItem = ({ post }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const isPremium = post.isPremium;
    const canAccessPremium =
      user?.isVerified ||
      user?.role === "admin" ||
      user?._id === post.author._id;

    const maxLength = 100;
    const showReadMore = post.content.length > maxLength;
    const truncatedContent = showReadMore
      ? `${post.content.slice(0, maxLength)}... `
      : post.content;

    const handleMenuToggle = () => {
      setMenuVisible((prev) => !prev);
    };

    const handlePostSelect = (post) => {
      if (!post) return; // Handle the case where post is undefined
      router.push(`/new-post?id=${post._id}`); // Navigate to the new post page
    };

    const handleDelete = () => {
      // Show confirmation modal when attempting to delete a post
      Modal.confirm({
        title: "Are you sure you want to delete this post?",
        content: "This action cannot be undone.",
        okText: "Yes, Delete",
        okType: "danger",
        cancelText: "Cancel",
        okButtonProps: {
          style: {
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            fontWeight: "600",
          },
        },
        cancelButtonProps: {
          style: {
            backgroundColor: "#dbeafe",
            color: "#2563eb",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            fontWeight: "600",
          },
        },
        onOk: async () => {
          try {
            await deletePost(post._id); // Call deletePost function to remove the post
            message.success("Post deleted successfully!");
          } catch (error) {
            message.error("Failed to delete the post. Please try again.");
          }
        },
        onCancel: () => {
          setMenuVisible(false); // Close the menu when the modal is canceled
        },
      });
    };

    return (
      <div className="w-full p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg rounded-3xl mb-8 relative">
        <div className="absolute top-4 right-4 cursor-pointer">
          <FaEllipsisH
            className="text-gray-700 hover:text-blue-600"
            size={20}
            onClick={handleMenuToggle}
          />
          {menuVisible && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
              <button
                onClick={() => handlePostSelect(post)} // Pass post to handleEdit
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                <FaEdit className="mr-2" /> Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          )}
        </div>

        {isPremium && (
          <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-semibold mb-4">
            <FaStar size={16} />
            <span>Premium</span>
          </div>
        )}

        <Link
          href={
            !canAccessPremium && post.isPremium
              ? "/dashboard/user/payment"
              : `/post/${post._id}`
          }
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">
            {post.title}
          </h2>

          <div className="flex justify-between items-center mb-2">
            <PostAuthor author={post.author} postCreatedAt={post.createdAt} />
            <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              {post.category.name}
            </span>
          </div>

          <div className="mt-4 bg-primary-background rounded-lg overflow-hidden relative">
            <Image
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
              src={post.images[0]}
              alt="Post image"
              width={500}
              height={300}
            />
            {isPremium && !canAccessPremium && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center">
                  <IoMdLock className="mx-auto mb-2" size={24} />
                  <p className="font-semibold">Premium Content</p>
                  <p className="text-sm">Verify your account to access</p>
                </div>
              </div>
            )}
          </div>

          <div className="text-gray-700 mb-4">
            {truncatedContent}
            {showReadMore && (
              <Link
                href={
                  !canAccessPremium && post.isPremium
                    ? "/dashboard/user/payment"
                    : `/post/${post._id}`
                }
                className="text-blue-500 hover:underline font-medium"
              >
                Read More
              </Link>
            )}
          </div>
        </Link>

        <PostMedia
          postUpvotes={post.upvotes}
          postDownvotes={post.downvotes}
          postId={post._id}
          totalComments={post.totalComments}
        />
      </div>
    );
  };

  return (
    <InfiniteScroll
      key={posts.length}
      pageStart={1}
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner className="my-4" />}
    >
      <div className="pb-4">
        <Button className="gap-2">
          <IoMdAdd className="text-xl" />
          Create New Post
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PostTable;
