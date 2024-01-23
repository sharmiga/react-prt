import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Kar extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Un Paarvaiyil', url: 'https://i.ibb.co/HTYtmw4/unparvayil.png'},
        { id: 1, title: 'Kan Pesum Vaarthaigal', url: 'https://i.ibb.co/bBWVgZJ/Kan-pesum.png'},
        { id: 3, title: 'Nee Korinal',  url: 'https://i.ibb.co/JxgXyVx/koruinal.jpg' },
        { id: 4, title: 'Oru Maalai', url: 'https://i.ibb.co/qntYWWQ/oru-maalai.jpg'},
        { id: 5, title: 'Hasile Fisile',  url: 'https://i.ibb.co/cxTgbQ2/fisile.jpg' },
        { id: 6, title: 'Mun Andhi',  url: 'https://i.ibb.co/17WdYYM/andhi.jpg' },
        { id: 7, title: 'Aval Ulaghazhagi',  url: 'https://i.ibb.co/cb44yWm/lesa.jpg' },
        { id: 8, title: 'Adatha Attamellam',  url: 'https://i.ibb.co/PhwbnTK/adath.jpg' },
        { id: 9, title: 'Usure Poguthey',  url: 'https://i.ibb.co/HT95Z8V/poguthey.jpg' },
        { id: 10, title: 'Karu Karu',  url: 'https://i.ibb.co/JdGgz9V/karu-karu.png' }
      ],
    };
 }

 render() {
    return (
      <div className='prakash'>
     <Container style={{
        width:'90%',
      }}>
        <ListGroup  style={{
        backgroundColor: 'transparent',
        border:'0px'
        }}> 
          {this.state.music.map((music) => (
            <ListGroup.Item key={music.id} style={{
              backgroundColor: 'transparent',
              border:'0px'
              }}>
                <Row>
                    <Col style={{
                        width:'15%',
                    }}><img style={{
                      width:'50%',
                      
                    }} src={music.url} alt='img'/>
                    </Col >
                    <Col style={{
                        paddingRight:'50%',
                        width:'50%',
                        marginLeft:'0px'
                    }}>
              <p style={{
                paddingLeft:'0%',
                paddingTop:'15px',
                color:'white'
              }}>{music.title}</p></Col>
                </Row>
                
              
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      </div>
    );
 }
}

export default Kar;