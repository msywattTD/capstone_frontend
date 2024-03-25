import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImagePreview from "./ImagePreview";

function ImageRowPreview() {
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
        <ImagePreview image={images[images.length - 1]} />

        <ImagePreview image={images[images.length - 2]} />

        <ImagePreview image={images[images.length - 3]} />

        <ImagePreview image={images[images.length - 4]} />

        <ImagePreview image={images[images.length - 5]} />
      </>
    );
  };
  return images.length ? loaded() : loading();
}

export default ImageRowPreview;
