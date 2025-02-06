"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Blog Platformasi</h1>

            <h2 className="text-xl font-semibold mt-4">Songgi 5 ta post</h2>
            <ul>
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id} className="bg-black text-white w-[700px] p-3  rounded-md mb-2">
                        <Link href={`/blog/${post.id}`} className="">{post.title}</Link>
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4"> Postlar</h2>
            <ul className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <li key={post.id} className="bg-black text-white w-[600px] p-3  rounded-md mb-2">
                        <Link href={`/blog/${post.id}`} className="text-white ">{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
