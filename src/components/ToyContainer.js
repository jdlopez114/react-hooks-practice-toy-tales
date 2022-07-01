import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {

  const toysToRender = toys.map((toy) => <ToyCard key={toy.id} toy={toy}/>)

  return (
    <div id="toy-collection"> {toysToRender} </div>
  );
}

export default ToyContainer;
 