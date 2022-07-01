import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleDelete(id) {

      fetch(`http://localhost:3001/toys/${id}`, {
        method: "DELETE",
      })
      .then(r => r.json())

      const updatedToyArray = toys.filter(toy => toy.id !== id);
      setToys(updatedToyArray)

  }

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null} 
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} />
    </>
  );
}

export default App;
