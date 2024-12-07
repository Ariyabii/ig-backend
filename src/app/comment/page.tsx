// "use client";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { userInfo } from "os";

// import { useState, useEffect } from "react";
// type commentType = {
//   _id: string;
//   caption: string;
//   profileImage: string;
//   userId: string;
// }[];

// const Page = () => {
//   const [comments, setComments] = useState<commentType>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const getPosts = async () => {
//     console.log("working");
//     const jsonData = await fetch("https://ig-server-v2.onrender.com/posts");
//     const response = await jsonData.json();
//     setComments(response);
//     setLoading(false);
//     console.log(response);
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);
//   if (loading) return "loading";

//   return (
//     <div>
//       {comments?.map((post) => {
//         return (
//           <Card key={UserActivation._id} className="w-fit">
//             <div>
//               <img src="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xseo6mj xod5an3 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1" />
//             </div>
//             <CardHeader>
//               <div>{post.userId.username}</div>
//             </CardHeader>
//             <CardContent>
//               <img src={post.profileImage} width="340px" height="600px" />
//             </CardContent>
//             <CardFooter className="flex justify-between">
//               <div className="flex space-y-0"></div>
//             </CardFooter>
//           </Card>
//         );
//       })}
//     </div>
//   );
// };

// export default Page;
