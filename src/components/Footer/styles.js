import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--primary);
  border-top: 2px solid var(--primary);
  padding-left: 1vh;
  padding-right: 1vh;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  color: var(--black);
  font-size: 17px;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
