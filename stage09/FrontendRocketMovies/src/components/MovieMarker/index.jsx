import { Container, Icon } from "./style";
import { BiPlus, BiX} from "react-icons/bi";

export function MovieMarker({ title, isNew = false, ...rest }) {
  return (
    <Container $isnew={isNew}>
      {title}
      <Icon>
        {isNew ? <BiPlus /> : <BiX />}
      </Icon>
    </Container>
  )
}