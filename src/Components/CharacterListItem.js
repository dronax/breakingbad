import React from "react";

const CharacterListItem = ({ item }) => {
    
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="character"></img>
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <u1>
            <li>
              <strong>Actor Name:</strong>
              {item.potrayed}
            </li>
            <li>
              <strong>Nickname:</strong>
              {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong>
              {item.birthday}
            </li>
            <li>
              <strong>Status:</strong>
              <span
                style={{ color: item.status === "Alive" ? "green" : "red" }}
              >
                {item.status}
              </span>
            </li>
          </u1>
        </div>
      </div>
    </div>
  );
};

export default CharacterListItem;
