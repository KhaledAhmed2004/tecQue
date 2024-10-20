// // import Image from "next/image";
// // import React from "react";
// // import PostMedia from "./PostMedia";
// // import PostAuthor from "./PostAuthor";
// // import Link from "next/link";
// // import { useMe } from "@/hooks/auth/useMe";
// // import { FaStar } from "react-icons/fa";
// // import { IoMdLock } from "react-icons/io";

// // // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // const Post = ({ post }: any) => {
// //   const { user } = useMe();

// //   const isPremium = post.isPremium;
// //   const canAccessPremium =
// //     user?.isVerified || user?.role === "admin" || user?._id === post.author._id;

// //   // Define the maximum length for truncated content
// //   const maxLength = 100;
// //   const showReadMore = post.content.length > maxLength;

// //   // Truncate content and add ellipsis and "Read More" link if applicable
// //   const truncatedContent = showReadMore
// //     ? `${post.content.slice(0, maxLength)}... `
// //     : post.content;

// //   return (
// //     // <div
// //     //   className={`max-w-3xl mx-auto p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg rounded-3xl mb-8 transition-all duration-300 ease-in-out transform ${
// //     //     isPremium
// //     //       ? "border-2 border-yellow-400 hover:shadow-xl"
// //     //       : "hover:shadow-lg"
// //     //   }`}
// //     // >
// //     <div className="mx-auto p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg rounded-3xl mb-8">
// //       {/* Premium Badge */}
// //       {isPremium && (
// //         <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-semibold mb-4">
// //           <FaStar size={16} />
// //           <span>Premium</span>
// //         </div>
// //       )}

// //       {/* Post Link */}
// //       <Link
// //         href={
// //           !canAccessPremium && post.isPremium
// //             ? "/dashboard/user/payment"
// //             : `/post/${post._id}`
// //         }
// //       >
// //         {/* Title */}
// //         <h2 className="text-3xl font-extrabold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">
// //           {post.title}
// //         </h2>

// //         {/* Author and Category Section */}
// //         <div className="flex justify-between items-center mb-2">
// //           {/* Author Info */}
// //           <PostAuthor author={post.author} postCreatedAt={post.createdAt} />
// //           {/* Category Badge */}
// //           <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
// //             {post.category.name}
// //           </span>
// //         </div>

// //         {/* Post Image */}
// //         <div className="mt-4 bg-primary-background rounded-lg overflow-hidden relative">
// //           <Image
// //             className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
// //             src={post.images[0]}
// //             alt="Post image"
// //             width={500}
// //             height={300}
// //           />
// //           {isPremium && !canAccessPremium && (
// //             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //               <div className="text-white text-center">
// //                 <IoMdLock className="mx-auto mb-2" size={24} />
// //                 <p className="font-semibold">Premium Content</p>
// //                 <p className="text-sm">Verify your account to access</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Post Content */}
// //         <div className="text-gray-700 mb-4">
// //           {truncatedContent}
// //           {/* Conditionally render "Read More" */}
// //           {showReadMore && (
// //             <Link
// //               href={
// //                 !canAccessPremium && post.isPremium
// //                   ? "/dashboard/user/payment"
// //                   : `/post/${post._id}`
// //               }
// //               className="text-blue-500 hover:underline font-medium"
// //             >
// //               Read More
// //             </Link>
// //           )}
// //         </div>
// //       </Link>

// //       {/* Post Interactions */}

// //       <PostMedia
// //         postUpvotes={post.upvotes}
// //         postDownvotes={post.downvotes}
// //         postId={post._id}
// //         totalComments={post.totalComments}
// //       />
// //     </div>
// //   );
// // };

// // export default Post;

// import Image from "next/image";
// import React from "react";
// import PostMedia from "./PostMedia";
// import PostAuthor from "./PostAuthor";
// import Link from "next/link";
// import { useMe } from "@/hooks/auth/useMe";
// import { FaStar } from "react-icons/fa";
// import { IoMdLock } from "react-icons/io";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const Post = ({ post }: any) => {
//   const { user } = useMe();

//   const isPremium = post.isPremium;
//   const canAccessPremium =
//     user?.isVerified || user?.role === "admin" || user?._id === post.author._id;

//   // Define the maximum length for truncated content
//   const maxLength = 100;
//   const showReadMore = post.content.length > maxLength;

//   // Truncate content and add ellipsis and "Read More" link if applicable
//   const truncatedContent = showReadMore
//     ? `${post.content.slice(0, maxLength)}... `
//     : post.content;

//   return (
//     <div className="mx-auto p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-lg rounded-3xl mb-8 transition-transform duration-300 transform">
//       {/* Premium Badge */}
//       {isPremium && (
//         <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100 px-2 py-1 rounded-full text-sm font-semibold mb-4">
//           <FaStar size={16} />
//           <span>Premium</span>
//         </div>
//       )}

//       {/* Post Link */}
//       <Link
//         href={
//           !canAccessPremium && post.isPremium
//             ? "/dashboard/user/payment"
//             : `/post/${post._id}`
//         }
//       >
//         {/* Title */}
//         <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
//           {post.title}
//         </h2>

//         {/* Author and Category Section */}
//         <div className="flex justify-between items-center mb-2">
//           {/* Author Info */}
//           <PostAuthor author={post.author} postCreatedAt={post.createdAt} />
//           {/* Category Badge */}
//           <span className="text-xs text-blue-700 bg-blue-100 dark:text-blue-100 dark:bg-blue-600 px-3 py-1 rounded-full">
//             {post.category.name}
//           </span>
//         </div>

//         {/* Post Image */}
//         <div className="mt-4 bg-primary-background rounded-lg overflow-hidden relative shadow-md transition-transform duration-300 transform hover:shadow-xl">
//           <Image
//             className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
//             src={post.images[0]}
//             alt="Post image"
//             width={500}
//             height={300}
//           />
//           {isPremium && !canAccessPremium && (
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-white text-center">
//                 <IoMdLock className="mx-auto mb-2" size={24} />
//                 <p className="font-semibold">Premium Content</p>
//                 <p className="text-sm">Verify your account to access</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Post Content */}
//         <div className="text-gray-700 dark:text-gray-300 mb-4">
//           {truncatedContent}
//           {/* Conditionally render "Read More" */}
//           {showReadMore && (
//             <Link
//               href={
//                 !canAccessPremium && post.isPremium
//                   ? "/dashboard/user/payment"
//                   : `/post/${post._id}`
//               }
//               className="text-blue-500 hover:underline font-medium dark:text-blue-400"
//             >
//               Read More
//             </Link>
//           )}
//         </div>
//       </Link>

//       {/* Post Interactions */}
//       <PostMedia
//         postUpvotes={post.upvotes}
//         postDownvotes={post.downvotes}
//         postId={post._id}
//         totalComments={post.totalComments}
//       />
//     </div>
//   );
// };

// export default Post;
// import Image from "next/image";
// import React from "react";
// import PostMedia from "./PostMedia";
// import PostAuthor from "./PostAuthor";
// import Link from "next/link";
// import { useMe } from "@/hooks/auth/useMe";
// import { FaStar } from "react-icons/fa";
// import { IoMdLock } from "react-icons/io";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const Post = ({ post }: any) => {
//   const { user } = useMe();

//   const isPremium = post.isPremium;
//   const canAccessPremium =
//     user?.isVerified || user?.role === "admin" || user?._id === post.author._id;

//   // Define the maximum length for truncated content
//   const maxLength = 100;
//   const showReadMore = post.content.length > maxLength;

//   // Truncate content and add ellipsis and "Read More" link if applicable
//   const truncatedContent = showReadMore
//     ? `${post.content.slice(0, maxLength)}... `
//     : post.content;

//   return (
//     // <div
//     //   className={`max-w-3xl mx-auto p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg rounded-3xl mb-8 transition-all duration-300 ease-in-out transform ${
//     //     isPremium
//     //       ? "border-2 border-yellow-400 hover:shadow-xl"
//     //       : "hover:shadow-lg"
//     //   }`}
//     // >
//     <div className="mx-auto p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg rounded-3xl mb-8">
//       {/* Premium Badge */}
//       {isPremium && (
//         <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-semibold mb-4">
//           <FaStar size={16} />
//           <span>Premium</span>
//         </div>
//       )}

//       {/* Post Link */}
//       <Link
//         href={
//           !canAccessPremium && post.isPremium
//             ? "/dashboard/user/payment"
//             : `/post/${post._id}`
//         }
//       >
//         {/* Title */}
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">
//           {post.title}
//         </h2>

//         {/* Author and Category Section */}
//         <div className="flex justify-between items-center mb-2">
//           {/* Author Info */}
//           <PostAuthor author={post.author} postCreatedAt={post.createdAt} />
//           {/* Category Badge */}
//           <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
//             {post.category.name}
//           </span>
//         </div>

//         {/* Post Image */}
//         <div className="mt-4 bg-primary-background rounded-lg overflow-hidden relative">
//           <Image
//             className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
//             src={post.images[0]}
//             alt="Post image"
//             width={500}
//             height={300}
//           />
//           {isPremium && !canAccessPremium && (
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="text-white text-center">
//                 <IoMdLock className="mx-auto mb-2" size={24} />
//                 <p className="font-semibold">Premium Content</p>
//                 <p className="text-sm">Verify your account to access</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Post Content */}
//         <div className="text-gray-700 mb-4">
//           {truncatedContent}
//           {/* Conditionally render "Read More" */}
//           {showReadMore && (
//             <Link
//               href={
//                 !canAccessPremium && post.isPremium
//                   ? "/dashboard/user/payment"
//                   : `/post/${post._id}`
//               }
//               className="text-blue-500 hover:underline font-medium"
//             >
//               Read More
//             </Link>
//           )}
//         </div>
//       </Link>

//       {/* Post Interactions */}

//       <PostMedia
//         postUpvotes={post.upvotes}
//         postDownvotes={post.downvotes}
//         postId={post._id}
//         totalComments={post.totalComments}
//       />
//     </div>
//   );
// };

// export default Post;

import Image from "next/image";
import React from "react";
import PostMedia from "./PostMedia";
import PostAuthor from "./PostAuthor";
import Link from "next/link";
import { useMe } from "@/hooks/auth/useMe";
import { FaStar } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Post = ({ post }: any) => {
  const { user } = useMe();

  const isPremium = post.isPremium;
  const canAccessPremium =
    user?.isVerified || user?.role === "admin" || user?._id === post.author._id;

  // Define the maximum length for truncated content
  const maxLength = 100;
  const showReadMore = post.content.length > maxLength;

  // Truncate content and add ellipsis and "Read More" link if applicable
  const truncatedContent = showReadMore
    ? `${post.content.slice(0, maxLength)}... `
    : post.content;

  return (
    <div className="mx-auto p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-lg rounded-3xl mb-8 transition-transform duration-300 transform">
      {/* Author  */}
      <div className="flex mb-2">
        {/* Author Info */}
        <PostAuthor author={post.author} postCreatedAt={post.createdAt} />
      </div>
      {/* Premium Badge */}
      {isPremium && (
        <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100 px-2 py-1 rounded-full text-sm font-semibold mb-4">
          <FaStar size={16} />
          <span>Premium</span>
        </div>
      )}

      {/* Post Link */}
      <Link
        href={
          !canAccessPremium && post.isPremium
            ? "/dashboard/user/payment"
            : `/post/${post._id}`
        }
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
          {post.title}
        </h2>

        {/* Category Badge */}
        <span className="text-xs text-blue-700 bg-blue-100 dark:text-blue-100 dark:bg-blue-600 px-3 py-1 rounded-full">
          {post.category.name}
        </span>
        {/* Post Image */}
        <div className="mt-4 bg-primary-background rounded-lg overflow-hidden relative shadow-md transition-transform duration-300 transform hover:shadow-xl">
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

        {/* Post Content */}
        <div className="text-gray-700 dark:text-gray-300 mb-4">
          {truncatedContent}
          {/* Conditionally render "Read More" */}
          {showReadMore && (
            <Link
              href={
                !canAccessPremium && post.isPremium
                  ? "/dashboard/user/payment"
                  : `/post/${post._id}`
              }
              className="text-blue-500 hover:underline font-medium dark:text-blue-400"
            >
              Read More
            </Link>
          )}
        </div>
      </Link>

      {/* Post Interactions */}
      <PostMedia
        postUpvotes={post.upvotes}
        postDownvotes={post.downvotes}
        postId={post._id}
        totalComments={post.totalComments}
      />
    </div>
  );
};

export default Post;
