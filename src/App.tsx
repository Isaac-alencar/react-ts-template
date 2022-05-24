import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  font-family: ${({ theme }) => theme.fontFamily.default};
  color: ${({ theme }) => theme.colors.primary};
`;

export function App() {
  return <Heading>Hello World !!</Heading>;
}
