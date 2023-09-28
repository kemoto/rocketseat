import { Container, Profile, ProfileLink } from "./style";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Vitor Tominaga</strong>
          <span>sair</span>
        </div>

        <ProfileLink to="/profile">
          <img src="https://github.com/kemoto.png" alt="" />
        </ProfileLink>
      </Profile>
    </Container>
  );
}
