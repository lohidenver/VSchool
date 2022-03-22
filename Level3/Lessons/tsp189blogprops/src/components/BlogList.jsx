import React from "react";
import BlogPost from "./BlogPost";
import data from "../data";
import "./blogList.css";

export default function BlogList() {
  const posts = data.map((post) => {
    return <BlogPost post={post} />;
  });

  return (
    <div>
      <section>
        {posts}
        <button>Older Posts →</button>
      </section>
    </div>
  );
}
