'use client';
import React from "react";
import Link from "next/link";

const SidebarBlogButton = () => {
  return (
    <div>
        <button onClick={() => console.log("Blog")} className=" bg-MUN-UCLAGold  hover:bg-blue-200">
            <Link href="/blog">Blog</Link>
        </button>
    </div>
  );
};

export default SidebarBlogButton;
