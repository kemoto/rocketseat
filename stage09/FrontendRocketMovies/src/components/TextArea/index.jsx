import { Container } from "./style";

export function TextArea({values, ...rest}) {
  return (
    <Container {...rest}>
      {values}
    </Container>
  )
}