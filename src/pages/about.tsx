import styled from "styled-components";
import tw from "twin.macro";

export default function Home() {
  return <NameWrap>About</NameWrap>;
}

const NameWrap = styled.div`
  background-color: red;
  ${tw`text-4xl`}
`;
