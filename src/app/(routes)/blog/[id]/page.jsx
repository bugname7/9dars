"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            setPost(data);
        }
        fetchPost();
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <Link href="/" className="text-blue-500 hover:underline">← Home Blog</Link>
            <h1 className="text-2xl font-bold mt-4">{post.title}</h1>
            <p className="mt-2">{post.body}</p>
        </div>
    );
}
