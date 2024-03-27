import NavBar from "../components/NavBar";
import axios from "axios";
import { useState } from "react";

function UploadImage() {
  const [file, setFile] = useState();

  async function handleOnChange(e) {
    const target = await e.target;

    setFile(target.files[0]);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const results = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      body: formData,
      headers: {
        // "User-Agent": "curl/8.1.1",
        Authorization: "Client-ID 25e08194ee19d47",
        // Accept: "application/json",
      },
    }).then(
      (r) =>
        r.json() &&
        alert("image uploaded").catch((e) => alert("failed") && console.log(e))
    );
    console.log("results", results);
    // try {
    //   await axios.post("https://api.imgur.com/3/image", {
    //     image: file,
    //   }),
    //     {
    //       headers: {
    //         Authorization: "Client-ID 25e08194ee19d47",
    //       },
    //     }.then(function (response) {
    //       console.log(response);
    //     });
    // } catch (e) {
    //   console.error(e.message);
    // }
  }
  return (
    <>
      <NavBar />
      <h1>Upload</h1>
      <form
        onSubmit={handleOnSubmit}
        id="upload-form"
        // action="https://capstone-backend-kpc2.onrender.com/imgurUpload"
        // method="post"
        // encType="multipart/form-data"
      >
        <label htmlFor="Upload">Upload</label>
        <label htmlFor="Tags">Tags</label>
        <input
          type="file"
          name="imageUpload"
          id="upload-input"
          onChange={handleOnChange}
        />
        <button
          type="submit"
          name="submit"
          id="form-submit"
          onSubmit={handleOnSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default UploadImage;
