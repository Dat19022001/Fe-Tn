import React, { useState } from "react";
import axios from "axios";
import useNotify from "../../hook/useNotify";

const UpdateImage = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const notify = useNotify();
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "update");
    data.append("cloud_name", "daehnmtmq");

    axios
      .post("https://api.cloudinary.com/v1_1/daehnmtmq/image/upload", data)
      .then((response) => {
        setUrl(response.data.url);
        notify.success(("thanh công"));
      })
      .catch((error) => {
        console.error("Upload error:", error);
        notify.error("that bại");
      });
  };
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0], uploadImage());
          }}
        ></input>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt="123" />
      </div>
    </div>
  );
};
export default UpdateImage;
