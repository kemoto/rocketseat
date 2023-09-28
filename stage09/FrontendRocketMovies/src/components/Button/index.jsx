import { Container } from "./style";
import { FiPlus } from "react-icons/fi"; 

export function Button({ icon = false, title, colortype="pink",...rest}) {
  return (
    <Container type="button" $colortype={colortype}>
      {icon && <FiPlus />}
      {title}
    </Container>
  )
}