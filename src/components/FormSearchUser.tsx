// import React from 'react';
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./FormSearchUser.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function FormSearchUser({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loadUser(userName);
      setUserName("");
    }
  };

  const handleClick = () => {
    loadUser(userName);
    setUserName("");
  };

  return (
    <div className="FormSearchUser">
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repósitórios</p>

      <div className="search-input-button">
        <input
          type="text"
          placeholder="ex.: elielsondev"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default FormSearchUser;
