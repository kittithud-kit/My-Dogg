import "./DogPost.css";

function DogPost(props) {
  const { dog, onBgClick } = props;
  return (
    <div className="dog-post">
      <div className="dog-post-bg" onClick={onBgClick} />
      <div className="dog-post-content">
        <img src={dog.fullUrl} />
        <h4>{dog.title}</h4>
      </div>
    </div>
  );
}

export default DogPost;
