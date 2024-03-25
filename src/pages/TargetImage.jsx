import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function TargetImage() {
  let { postID } = useParams();

  async function getPostInfo(postID) {
    try {
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <NavBar />
      <h1>{`${postID}`}</h1>
    </>
  );
}

export default TargetImage;
