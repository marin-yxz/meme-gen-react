import { bounceIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounceIn}`;
export const SecondPictureDiv = styled.div`
  text-align: center;
`;
export const List = styled.li`
  background-color: white;
  margin-right: 30px;
  text-align: center;
  list-style: none;
  border-radius: 10px;
`;
export const UnList = styled.ul`
  background-color: #ffafcc;
`;
export const Img1 = styled.img`
  padding-top: 10px;
  padding-bottom: 5px;
  border-radius: 20px;
  width: 200px;
  animation: 0.5s ${bounceAnimation};
  @media screen {
    :hover {
      transition: transform 0.5s ease-in-out;
      transform: scale(1.2);
    }
  }
`;
export const H4 = styled.h4`
  background-color: #ffafcc;
  font-size: 24px;
  color: #fff6f9;
  text-align: center;
`;
export const TextDiv = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #ffafcc;
`;
export const ButtonPage = styled.button`
  font-family: 'Caveat', cursive;
  font-weight: bold;
  display: block;
  width: 100%;
  margin-top: 10px;
  font-size: 15px;
  height: 35px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 3px;
`;
export const H3 = styled.h3`
  text-align: center;
`;
export const DivTwice = styled.div`
  padding: 3px;
`;
export const InputTwice = styled.input`
  border: none;

  width: 150px;
`;
export const Img2 = styled.img`
  padding-top: 10px;

  border-radius: 20px;
  width: 250px;
  animation: 0.5s ${bounceAnimation};
  @media screen {
    :hover {
      transition: transform 0.5s ease-in-out;
      transform: scale(1.5);
      cursor: pointer;
    }
  }
`;
export const ListDiv = styled.div`
  height: 400px;
  overflow: scroll;
  overflow-x: hidden;
`;
export const ListDiv2 = styled.div``;

export const SearchBar = styled.input`
  border: none;

  text-align: center;
  padding: 3px;
`;
export const Full = styled.div`
  margin: 0;
  height: 100vh;
  font-family: 'Indie Flower', cursive;
  background-color: #cdb4db;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainDiv = styled.div`
  padding: 30px;
  background-color: #ffc8dd;
  font-family: 'Indie Flower', cursive;
  border-radius: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;
