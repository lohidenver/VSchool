import React from "react";

export default function BlogPost(props) {
  return (
    <div className="post-blog">
      <div className="titlesub">
        <h1 className="post-title">{props.post.title}</h1>
        <h2 className="post-subTitle">{props.post.subTitle}</h2>
      </div>

      <span>Posted by </span>
      <span className="author">{props.post.author}</span>
      <span> on {props.post.date}</span>
      <hr />
    </div>
  );
}
