import { Header } from "../../components/Header";
import { BiPlus } from "react-icons/bi"
import { MovieCard } from "../../components/MovieCard";
import { Container, Menu, Content, NewMovie } from "./style";

export function Home() {
  return (
    <Container>
      <Header />

      <Menu>
        <h2>Meus filmes</h2>

        <NewMovie to="/createMovie" >
          <BiPlus /> Adicionar filme
        </NewMovie>
      </Menu>

      <Content>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Content>
    </Container>
  );
}
