import { Button } from "@material-ui/core";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid orange;
  color: orange;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: orange;
      color: white;
    `};
`;

const MaterialButton = styled(Button)`
  background-color: orange;
`;

export { MaterialButton };
export default StyledButton;
