import styled from "styled-components";
import { Grid, Row, Col } from "rsuite";

const StyledFooter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(22, 22, 22, .3);
`;

const StyledHero = styled.div`
  color: #fff;
  h2{
      font-size: 2vw;
  }
  .rs-row{
    margin-left: 0%;
  }
  p{
      font-size: 1.5vw;
  }

`;

const FooterPage = () => {
    return (
        <StyledFooter>
            <StyledHero>
                <Grid>
                    <Row>
                        <Col md={20}>
                            <h2>San Angel</h2>
                            <p>Una persona se ha visto a lo largo de su vida rodeada en la industria de la construcción. 
                                Entre aceros, concreto y sus derivados nace San Ángel. De raíces mexicanas, 
                                una comercializadora de materiales para la construcción, ferreterías y transportes, destacada por su gran servicio y 
                                disponibilidad de productos.</p>
                        </Col>
                    </Row>
                </Grid>
            </StyledHero>
        </StyledFooter>
    )
}
export default FooterPage