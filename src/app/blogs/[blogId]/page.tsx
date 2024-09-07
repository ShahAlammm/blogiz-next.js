import BlogDetails from '@/components/ui/BlogDetails';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();
    return blogs?.slice(0, 3).map((blog: any) => ({
        blogId: blog.id.toString(),
    }));
};


const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
        cache: "no-store",
    });
    const blog = await res.json();
    return (
        <div className="w-[90%] mx-auto py-5">
            <h1 className="text-4xl text-center  my-5">Blogs details from <span className="text-accent">Blogiz</span></h1>
            <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
                <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
            </p>
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;