import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerDiv = styled.div`
  width: 80%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 44px;
    color: ${(props) => props.theme["white-base"]};
  }

  svg {
    text-decoration: none;
    background: transparent;
    border: none;
  }

  span {
    width: 35%;
    text-align: center;
    margin-top: 2rem;
    color: ${(props) => props.theme["white-base"]};
  }
`;

export const ButtonFlix = styled.button`
  background-color: ${(props) => props.theme["gray-base"]};
  width: 250px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-top: 4rem;
  #logoButton {
    width: 30px;
    height: 30px;
    border-color: ${(props) => props.theme["gray-base"]};
    border: ${(props) => props.theme["gray-base"]};
  }
`;

export const ContainerFilme = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  width: 700px;
`;

export const Grid1 = styled.div`
  display: flex;
  justify-content: center;
`;
export const Grid2 = styled.div`
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme["white-base"]};

  h2 {
    font-size: 18px;
  }

  p {
    margin-top: 2rem;
  }
`;
