import styled from 'styled-components';


export const FooterBase = styled.footer`
  *{
    background-color: var(--darkgray)
  }
  background-color: var(--darkgray);  
  border-top: 1px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
