import { Container } from "./style";

export function TextButton({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}