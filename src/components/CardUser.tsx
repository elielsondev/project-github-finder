// import React from 'react';
import './CardUser.css';

import { UserProps } from '../types/user';
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';

function CardUser({ login, avatar_url, location, followers, following }: UserProps) {
  return (
    <div className="CardUser">
      <img src={avatar_url} alt={login} />
      <h2 className='user-name'>{login}</h2>
      <div className='div-location'>
        <MdLocationOn /> {/* Icone de localização */}
        <p>{location}</p>
      </div>
      <div className="div-follow">
        <p className="follow">Seguidores: {followers}</p>
        <p className="follow">Seguindo: {following}</p>
      </div>
      <div className='div-link'>
        <Link className='link-repository' to={`/${login}/repos`}>Ver melhores repositorios</Link>
      </div>
    </div>
  );
}

export default CardUser;
