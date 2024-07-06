import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyleApp = styled.main`
  background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Heading as="h1">The Wild Oasis</Heading>

        <Heading as="h2">Button</Heading>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check out</Button>

        <Heading as="h3">From</Heading>
        <Input type="number" placeholder="Number of Guests" />
      </StyleApp>
    </>
  );
}

export default App;
