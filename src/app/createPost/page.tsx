"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

import { Bookmark } from "lucide-react";
import { Heart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Send } from 'lucide-react';

import { useEffect, useState } from "react";

type likeTypes = {
    postlikeImage: string;
    username: string;
    _id: string;
}

type postType = {
    _id: string;
    caption: string;
    postImage: string;
    userId: string;
    likes: likeTypes[];
}[];

const Page = () => {
    const [posts, setPosts] = useState<postType>([]);
    const getPosts = async () => {
        console.log("working");
        const jsonData = await fetch(
            "https://instagram-service-v2.onrender.com/posts"
        );
        const response = await jsonData.json();
        setPosts(response);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            {posts?.slice(1, 2).map((post) => {
                return (
                    <Card key={post._id} className="w-fit">
                        <CardHeader>
                            <div>{post.userId}</div>
                        </CardHeader>
                        <CardContent>
                            <img src={post.postImage} width="400px" height="600px" />
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="flex space-y-2">
                                <Heart />
                                <MessageCircle />
                                <Send />
                            </div>
                            <Bookmark />
                        </CardFooter>
                    </Card>
                );
            })};
        </div>
    );
};

export default Page;