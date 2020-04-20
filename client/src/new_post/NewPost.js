import React, { useState } from "react";
import axios from "axios";
import { TextArea } from "grommet";
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={postInfo.title}
            onChange={(e) =>
              setPostInfo({ ...postInfo, title: e.target.value })
            }
          />
        </label>
        <label>
          Content:
          <TextArea
            className="Post-TextBox"
            type="text"
            value={postInfo.content}
            onChange={(e) =>
              setPostInfo({ ...postInfo, content: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Post!" />
      </form>
    </div>
  );
}

export default NewPost;
