import { Link } from "react-router-dom";
import "../App.css";

function ImagePreview({ image }) {
  return (
    <div>
      <div className="postTitle">{`${image.postTitle}`}</div>
      <Link to={`/${image._id}`}>
        <img src={`${image.filePath}`} width="240" />
      </Link>
    </div>
  );
}

export default ImagePreview;
