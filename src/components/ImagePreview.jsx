import { Link } from "react-router-dom";

function ImagePreview({ image }) {
  return (
    <Link to={`/${image.postId}`}>
      <div>
        <div className="postTitle">{`${image.postTitle}`}</div>
        <img src={`${image.filePath}`} width="240" />
      </div>
    </Link>
  );
}

export default ImagePreview;
