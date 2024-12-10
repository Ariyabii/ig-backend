"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Bookmark } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

type likeTypes = {
  postlikeImage: string;
  username: string;
  _id: string;
};

type postType = {
  _id: string;
  caption: string;
  userId: {
    username: string;
  };
  profileImage: string;
  postImage: string;
  likes: likeTypes[];
}[];

const Page = () => {
  const [posts, setPosts] = useState<postType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const getPosts = async () => {
    console.log("working");
    const jsonData = await fetch("https://ig-server-v2.onrender.com/posts");
    const response = await jsonData.json();
    setPosts(response);
    setLoading(false);
    console.log(response);
  };

  useEffect(() => {
    getPosts();
  }, []);
  if (loading) return "loading";

  const handleClickComments = (postId: string) => {
    router.push("comment/" + postId);
  };

  return (
    <div className="">
      {posts?.map((post) => {
        return (
          <Card key={post._id} className="w-fit">
            {" "}
            <CardHeader>
              <div className="flex space-x-2">
                <div>{post.profileImage}</div>
                <div>{post.userId.username}</div>
              </div>
            </CardHeader>
            <img src={post.postImage} width="376px" height="600px" />
            <Carousel>
              <CarouselContent>
                <CarouselItem>{post.postImage}</CarouselItem>
                <CarouselItem>{post.postImage}</CarouselItem>
                <CarouselItem>{post.postImage}</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <CardContent>
              <div className="">{post.caption}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-y-0">
                <Heart />
                <MessageCircle />
                <Send />
              </div>
              <Bookmark />
            </CardFooter>
            <div>0 likes</div>
            <div>{post.userId.username} ...</div>
            <button onClick={() => handleClickComments(post._id)}>
              View all comments
            </button>
          </Card>
        );
      })}
    </div>
  );
};

export default Page;
