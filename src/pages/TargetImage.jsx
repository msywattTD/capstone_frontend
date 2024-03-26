import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TargetImage() {
  const [image, setImage] = useState({});
  let { postId } = useParams();
  const url = `http://localhost:3000/images/${postId}`;

  async function getPostInfo(postId) {
    try {
      let response = await axios.get(url);
      setImage(response.data);
      console.log(image);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getPostInfo();
  }, []);

  const loading = () => {
    return <h3>Loading...</h3>;
  };

  const loaded = () => {
    return (
      <>
        <NavBar />
        <div id="target-image-container">
          <h2>{`${image[0].postTitle}`}</h2>
          <h3>{`Posted By: ${image[0].postedBy}`}</h3>
          <img src={`${image[0].filePath}`} width="1000" />
          <div id="tag-container"></div>
        </div>
      </>
    );
  };
  return image[0] ? loaded() : loading();
}

export default TargetImage;
