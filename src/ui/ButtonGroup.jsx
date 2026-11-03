import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  margin-top: 20px;

  flex-wrap: wrap;

  @media (max-width: 600px) {
    & > button {
      flex: 1 1 12rem;
    }
  }
`;

export default ButtonGroup;
