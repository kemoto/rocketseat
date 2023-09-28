import { Container, SignInHeader, Form, Background, ReturnToLogin } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { BiLockAlt, BiEnvelope, BiUser, BiArrowBack } from "react-icons/bi";

export function SignUp() {
  return (
    <Container>
      <Form>
        <SignInHeader>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </SignInHeader>

        <label>Crie sua conta</label>

        <div className="inputs">
          <Input icon={BiUser} placeholder="Nome" type="text" />
          <Input icon={BiEnvelope} placeholder="E-mail" type="email" />
          <Input icon={BiLockAlt} placeholder="Senha" type="password" />
        </div>

        <div className="buttons">
          <Button title="Cadastrar" />
          <ReturnToLogin to="/">
            <BiArrowBack /> Voltar para o login
          </ReturnToLogin>
        </div>
      </Form>

      <Background />
    </Container>
  );
}
