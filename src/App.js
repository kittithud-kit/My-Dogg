import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import DogItem from "./components/DogItem";
import DogPost from "./components/DogPost";
import dogs from "./data/dogs";
import AppSearch from "./components/AppSearch";
import AppFooter from "./components/AppFooter";

function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onDogOpenClick(theDog) {
    setSelectedDog(theDog);
  }

  function onDogClosClick(theDog) {
    setSelectedDog(null);
  }

  const dogElement = dogs
    .filter((dog) => {
      return dog.title.includes(searchText);
    })
    .map((dog, index) => {
      return <DogItem key={index} dog={dog} onDogClick={onDogOpenClick} />;
    });

  let dogPost = null;
  if (!!selectedDog) {
    dogPost = <DogPost dog={selectedDog} onBgClick={onDogClosClick} />;
  }
  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{dogElement}</div>
        </div>
      </section>
      <AppFooter />
      {dogPost}
    </div>
  );
}

export default App;
