// "use client";
// import React from "react";
// import Image from "next/image";
// import bannerImage from "../../assets/friends.svg";
// import Button from "@/components/Button";
// import { useMe } from "@/hooks/auth/useMe";

// const Home = () => {
//   const { user } = useMe();

//   return (
//     <div className="relative overflow-hidden flex-1 flex justify-center">
//       {/* Bubble effect */}
//       <div className="bubble-container">
//         {Array.from({ length: 20 }).map((_, index) => (
//           <div key={index} className={`bubble bubble-${index + 1}`}></div>
//         ))}
//       </div>

//       <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center mx-auto px-5 z-10 relative">
//         <div className="">
//           <Image
//             src={bannerImage}
//             alt="Social media illustration"
//             className="w-full h-auto"
//           />
//         </div>

//         {/* Right side: Text and CTAs */}
//         <div className="text-center md:text-left">
//           <h2 className="text-6xl md:text-8xl mb-4  font-semibold text-primary-blue logo-text">
//             TechTalk
//           </h2>
//           <p className="text-base md:text-lg text-secondary-text mb-8">
//             Join a community where tech enthusiasts find solutions. From expert
//             advice to practical tips, we simplify the digital world, making
//             technology easier to understand and navigate. Discover a place that
//             empowers your tech journey.
//           </p>
//           <Button
//             className="mx-auto mb-4 md:mb-0 md:mx-0 md:block text-center md:text-left"
//             href={user ? "/feeds" : "/sign-in"}
//           >
//             Get Started
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";
import ErrorMessage from "@/components/ErrorMessage";
import Greeting from "@/components/Greeting";
import Post from "@/components/Post";
import PublishPost from "@/components/PublishPost";
import SearchFilter from "@/components/SearchFilter";
import Spinner from "@/components/Spinner";
import { usePosts } from "@/hooks/posts/usePosts";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";

const HomePage = () => {
  const { posts, isLoading, fetchNextPage, hasNextPage } = usePosts();

  return (
    <div className="container mx-auto bg-primary-background px-5 py-4 mb-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="space-y-6 order-3 lg:order-2 lg:col-span-2">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <PublishPost />
          </div>
          <SearchFilter />
          {isLoading ? (
            <Spinner className="my-4" />
          ) : posts?.length === 0 ? (
            <ErrorMessage message={"No Posts Found"} />
          ) : (
            <InfiniteScroll
              key={posts?.length}
              pageStart={1}
              loadMore={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={<Spinner className="my-4" />}
            >
              <div className="flex flex-col gap-4">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {posts?.map((post: any) => (
                  <Post key={post._id} post={post} />
                ))}
              </div>
            </InfiniteScroll>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 order-1 lg:order-3">
          <Greeting />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
