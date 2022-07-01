import React from "react";

function ToyCard({ toy, handleDelete }) {

  const { id, name, image, likes} = toy

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={toy}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(id)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
