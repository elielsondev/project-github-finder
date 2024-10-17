// import React from 'react';
import { useState, useEffect } from "react";
import "./Repository.css";
import { Link } from "react-router-dom";

function Repository() {
  const [data, setData] = useState([]);

  const userRepository = async () => {
    const user = location.pathname;
    const response = await fetch(`https://api.github.com/users${user}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    userRepository();
  }, []);

  return (
    <section className="Repository">
      <div className="repository-cards">
        {data.map(({ id, name, language, description, svn_url }) => (
          <div key={id} className="card">
            <h3>{name}</h3>
            <p>{language}</p>
            <p>{description}</p>
            <a href={svn_url} className="link-repository" target="_blank">
              VER REPOSITÓRIO
            </a>
          </div>
        ))}
      </div>
        <br />
      <div>
        <Link to="/" className="link-back-page">
          Voltar
        </Link>
      </div>
    </section>
  );
}

export default Repository;
