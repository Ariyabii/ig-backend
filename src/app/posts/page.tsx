"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Bookmark } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";

import { useState, useEffect } from "react";

type likeTypes = {
  postlikeImage: string;
  username: string;
  _id: string;
};

type postType = {
  _id: string;
  caption: string;
  postImage: string;
  profileImage: string;
  userId: string;
  likes: likeTypes[];
}[];

const Page = () => {
  const [posts, setPosts] = useState<postType>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  return (
    <div>
      {posts?.map((post) => {
        return (
          <Card key={post._id} className="w-fit">
            <div></div>
            <CardHeader>
              <div>{post.userId.username}</div>
            </CardHeader>
            <CardContent>
              <img src={post.profileImage} width="340px" height="600px" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-y-0">
                <Heart />
                <MessageCircle />
                <Send />
              </div>
              <Bookmark />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Page;
