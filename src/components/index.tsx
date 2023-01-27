import {
  ButtonFlix,
  Container,
  ContainerDiv,
  ContainerFilme,
  Grid1,
  Grid2,
} from "./styles";
import Logo from "../assets/rocketflix.svg";
import Poster from "../assets/poster.svg";
import { API_KEY, BASE_URL, IMG_URL, language } from "./API/api";
export function AppFlix() {
  fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=3050349fe23318d657cbfb17f2d37e94`
  );
  return (
    <Container>
      <ContainerDiv>
        <img src={Logo} alt="Logo" />
        <h1>Não sabe o que assistir?</h1>

        <ContainerFilme>
          <Grid1>
            <img src={Poster} alt="Imagem do Filme" />
          </Grid1>

          <Grid2>
            <h2>Os Caças-Fantasmas</h2>
            <p>
              Em Nova York Peter Venkman, Ray Stantz e Egon Spengler são três
              cientistas do departamento de psicologia da Columbia University,
              que se dedicam ao estudo de casos paranormais. Quando a subvenção
              termina eles são despedidos e Venkman sugere que abram um negócio
              próprio, a exterminadora de fantasmas Ghostbusters. Inicialmente
              eles só têm despesas e nenhum cliente, mas eis que surge Dana
              Barrett, uma violoncelista que teve uma experiência assustadora em
              seu apartamento.
            </p>
          </Grid2>
        </ContainerFilme>

        <ButtonFlix>
          {" "}
          <img src={Logo} alt="Logo" id="logoButton" /> Encontrar filme
        </ButtonFlix>
        <span>
          Clique em "Encontrar filme" que traremos informações de algum filme
          para você assistir hoje.
        </span>
      </ContainerDiv>
    </Container>
  );
}
