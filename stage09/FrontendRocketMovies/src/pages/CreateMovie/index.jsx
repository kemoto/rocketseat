import { Container, Menu, Section, Markers, Text, Footer, ReturnButton } from "./style";
import { BiArrowBack } from "react-icons/bi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MovieMarker } from "../../components/MovieMarker";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Menu>
        <ReturnButton to="/" >
          <BiArrowBack /> Voltar
        </ReturnButton>

        <h2>Novo filme</h2>
      </Menu>

      <Section>
        <Input type="text" placeholder="Título" />
        <Input type="text" placeholder="Sua nota (de 0 a 5)" />
      </Section>

      <Text>
        <TextArea placeholder="Observações" />
      </Text>

      <Markers>
        <h2>Marcadores</h2>

        <div className="markersArea">
          <MovieMarker isNew={false} title="Drama" />
          <MovieMarker isNew={true} title="Novo marcador" />
        </div>
      </Markers>

      <Footer>
        <Button title="Excluir filme" colortype="black" />
        <Button title="Salvar alterações" />
      </Footer>
    </Container>
  );
}
