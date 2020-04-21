import React, { useState } from "react";
import axios from "axios";
import { TextArea, TextInput, Button } from "grommet";
import "../App.css";

function NewPost() {
  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    axios.post("/post_forumpost", {
      title: postInfo.title,
      content: postInfo.content,
    });
    setPostInfo({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextArea
          type="text"
          placeholder="Title"
          value={postInfo.title}
          onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })}
        />

        <TextArea
          className="Post-TextBox"
          placeholder="What's up?"
          type="text"
          value={postInfo.content}
          onChange={(e) =>
            setPostInfo({ ...postInfo, content: e.target.value })
          }
        />
        <input type="submit" value="Post!" />
      </form>
    </div>
  );
}

export default NewPost;
