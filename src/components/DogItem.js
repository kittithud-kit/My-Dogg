import "./DogItem.css";

function DogItem(props) {
  const { dog, onDogClick } = props;
  return (
    <div className="dog-item">
      <img
        src={dog.thumbnaiUrl}
        onClick={() => {
          onDogClick(dog);
        }}
      />
      <h4>{dog.title}</h4>
    </div>
  );
}

export default DogItem;
