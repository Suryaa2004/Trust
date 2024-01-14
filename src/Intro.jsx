import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import introimage from "./images/home-blog2.jpg";
import "./Intro.css";
function Intro() {
  return (
    <Container>
      <Row>
       <Col sm={6} className='intro-column'>
            <h2 className='intro-heading'>INTRODUCTION</h2>
            <div className='intro-content'>
                <h5>Charity is the act of extending love and kindness to others unconditionally, which is a conscious act but the decision is to be made by the heart and soul without expecting a reward. It is due to this act of nature that makes it precious and soulful.</h5>
            </div>
        
        </Col>
        <Col sm={6}>
            <img src={introimage} alt="" className='introimage'/>

        </Col>
      </Row>
      
    </Container>
  );
}

export default Intro;