import { Container, SignInHeader, Form, Background, CreateAcc } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BiLockAlt, BiEnvelope } from "react-icons/bi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <SignInHeader>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </SignInHeader>

        <label>Faça seu login</label>

        <div className="inputs">
          <Input icon={BiEnvelope} placeholder="E-mail" type="email" />
          <Input icon={BiLockAlt} placeholder="Senha" type="password" />
        </div>

        <div className="buttons">
          <Button title="Entrar" />
          <CreateAcc to="/register" >
            Criar conta
          </CreateAcc>
        </div>
      </Form>

      <Background />
    </Container>
  );
}
