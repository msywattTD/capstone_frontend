function ImageTagList({ tags }) {
  console.log(tags);
  let tagsMap = tags.map((element) => {
    return <button id="image-tag">{element}</button>;
  });
  return <div>{tagsMap}</div>;
}

export default ImageTagList;
