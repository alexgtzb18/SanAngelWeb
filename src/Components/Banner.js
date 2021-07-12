import { Fragment } from "react";
import styled from "styled-components";
import { Camion } from "../assets";
import { Grid, Row, Col } from "rsuite";

const StyledBanner = styled.div`
  width: 100%;
  .banner-image {
    background-image: url(${Camion});
    height: 100vh;
    width: 100%;
    background-size: cover;
    margin: 0;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }
  .banner-cover {
    height: 100vh;
    width: 100%;
    background-color: rgba(27, 26, 26, 0.1);
    position: absolute;
  }
`;

const StyledHero = styled.div`
  color: #fff;
  h1{
      font-size: 6vw;
  }
  .rs-row{
    margin-left: 20%;
  }
  p{
      font-size: 1.5vw;
  }

`;

const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner-cover"><img src="" alt="" /></div>
      <div className="banner-image">
        <StyledHero>
          <Grid>
            <Row>
              <Col md={20}>
                <h1>El camino al éxito siempre está en construcción!</h1>
                <p>
                  Tenemos la misión de hacer que los clientes construyan su
                  propio negocio, que los empleados construyan un futuro
                  próspero y que los inversionistas incrementen su capital
                </p>
              </Col>
            </Row>
          </Grid>
        </StyledHero>
      </div>
    </StyledBanner>
  );
};
export default Banner;
