import { UserProps } from "../types/user";
import { useState } from "react";
import FormSearchUser from "../components/FormSearchUser";
import CardUser from "../components/CardUser";

import './Home.css';

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [status, setStatus] = useState(false);

  const loadUser = async (user: string) => {
    setStatus(false);
    setUser(null);

    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();

    if (response.status === 404) {
      setStatus(true);
      setUser(null)
      return;
    }

    const { login, avatar_url, location, followers, following } = data;

    const userData: UserProps = {
      login,
      avatar_url,
      location,
      followers,
      following
    };

    setUser(userData);
  };

  return (
    <section className="Home">
      <FormSearchUser loadUser={ loadUser } />
      <div>
        {user && <CardUser {...user} /> }
        {status && <p className="not-found-user">Usuário não encontrado</p>}
      </div>
    </section>
  )
}

export default Home;
