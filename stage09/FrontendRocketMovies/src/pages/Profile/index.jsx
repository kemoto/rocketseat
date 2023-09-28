import { Container, Avatar, Forms, ReturnButton } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  BiArrowBack,
  BiCamera,
  BiUser,
  BiEnvelope,
  BiLockAlt,
} from "react-icons/bi";

export function Profile() {
  return (
    <Container>
      <header>
        <ReturnButton to="/" >
          <BiArrowBack /> Voltar
        </ReturnButton>
      </header>
      <Avatar>
        <img src="https://github.com/kemoto.png" alt="" />

        <label htmlFor="avatar">
          <BiCamera />
          <input id="avatar" type="file" />
        </label>
      </Avatar>

      <Forms>
        <Input icon={BiUser} placeholder="Nome Completo" type="text" />
        <Input icon={BiEnvelope} placeholder="email@email.com" type="email" />
        <Input icon={BiLockAlt} placeholder="Senha atual" type="password" />
        <Input icon={BiLockAlt} placeholder="Nova senha" type="password" />

        <Button type="submit" title="Salvar" />
      </Forms>
    </Container>
  );
}
