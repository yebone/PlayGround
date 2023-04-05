import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

const SocialMedia = () => {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(posts);
  return (
    <div>
      <div className="flex gap-3 m-5">
        {posts?.map((post) => (
          <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
        <div>
          <div className="form-control w-full max-w-xs flex flex-col items-center gap-1">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="textarea textarea-bordered h-24"
              placeholder="Content"
            ></textarea>
            <button
              onClick={() => {
                if (title && content) {
                  dispatch(
                    addPost({
                      id: nanoid(),
                      title,
                      content,
                    })
                  );

                  setTitle("");
                  setContent("");
                }
              }}
              className=" btn btn-square text-center p-1 btn-outline"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
