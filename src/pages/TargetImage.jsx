import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageTagList from "../components/ImageTagList";

function TargetImage() {
  const [image, setImage] = useState({});
  const [poster, setPoster] = useState(null);
  let { postId } = useParams();
  const url = `https://capstone-backend-kpc2.onrender.com/images/${postId}`;

  async function getPostInfo(postId) {
    try {
      let response = await axios.get(url);
      setImage(response.data);
    } catch (e) {
      console.error(e);
    }

    try {
      let response = await axios.get(
        `https://capstone-backend-kpc2.onrender.com/users`
      );
      response.data.map((user) => {
        if (image[0].postedBy === user.posterId) {
          setPoster(user.name);
        }
      });
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
          <h3>{`Posted By: ${poster}`}</h3>
          <img src={`${image[0].filePath}`} width="1000" />
          <ImageTagList tags={image[0].tags} />
        </div>
      </>
    );
  };
  return image[0] ? loaded() : loading();
}

export default TargetImage;
