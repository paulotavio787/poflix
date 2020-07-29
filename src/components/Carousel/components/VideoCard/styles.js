import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  opacity: .6;
  transition: .5s;
  margin-bottom: 65px;

 
  &:focus, &:hover {
    opacity: 1;
    width: 398px;
    height: 263px;

  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
