import { useState, useEffect } from "react";
import axios from "axios";
import ImagePreview from "./ImagePreview";

function ImageRowPreview() {
  const [images, setImages] = useState([]);

  async function getImage() {
    try {
      const response = await axios.get(
        "https://capstone-backend-kpc2.onrender.com/home"
      );
      setImages(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  let imageMapping = images.map((element) => {
    return <ImagePreview image={element} />;
  });

  useEffect(() => {
    getImage();
    console.log(images);
  }, []);

  const loading = () => {
    return <h3>Loading...</h3>;
  };

  const loaded = () => {
    return <>{imageMapping}</>;
  };
  return images.length ? loaded() : loading();
}

export default ImageRowPreview;
