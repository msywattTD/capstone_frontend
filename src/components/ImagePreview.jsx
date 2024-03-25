import { useState, useEffect } from "react";
import axios from "axios";

function ImagePreview() {
  const [images, setImages] = useState([]);

  async function getImage() {
    try {
      const response = await axios.get("http://localhost:3000/images/");
      setImages(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    getImage();
    console.log(images);
  }, []);

  const loading = () => {
    return <h3>Loading...</h3>;
  };

  const loaded = () => {
    return (
      <>
        <div>
          <div className="postTitle">{`${
            images[images.length - 1].postTitle
          }`}</div>
          <img src={`${images[images.length - 1].filePath}`} width="240" />
        </div>
        <div>
          <div className="postTitle">{`${
            images[images.length - 2].postTitle
          }`}</div>
          <img src={`${images[images.length - 2].filePath}`} width="240" />
        </div>
        <div>
          <div className="postTitle">{`${
            images[images.length - 3].postTitle
          }`}</div>
          <img src={`${images[images.length - 3].filePath}`} width="240" />
        </div>
        <div>
          <div className="postTitle">{`${
            images[images.length - 4].postTitle
          }`}</div>
          <img src={`${images[images.length - 4].filePath}`} width="240" />
        </div>
        <div>
          <div className="postTitle">{`${
            images[images.length - 5].postTitle
          }`}</div>
          <img src={`${images[images.length - 5].filePath}`} width="240" />
        </div>
      </>
    );
  };
  return images.length ? loaded() : loading();
}

export default ImagePreview;
