import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Ar extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Apna Bana Le', url: 'https://i.ibb.co/7jZNp4F/apna.jpg'},
        { id: 2, title: 'Naan Un',  url: 'https://i.ibb.co/Fzcygnf/un.jpg' },
        { id: 3, title: 'Mast Magan',  url: 'https://i.ibb.co/pvk9nCs/masth.jpg' },
        { id: 4, title: 'Tum Hi Ho', url: 'https://i.ibb.co/LJjLskt/tum.jpg'},
        { id: 5, title: 'Shayad',  url: 'https://i.ibb.co/DGrbHNT/sha.jpg' },
        { id: 6, title: 'Zaalima',  url: 'https://i.ibb.co/5sgz2Sq/zaa.jpg' },
        { id: 7, title: 'Agar Tum Saat Ho',  url: 'https://i.ibb.co/BKrV2wC/agar.jpg' },
        { id: 8, title: 'Neeyae',  url: 'https://i.ibb.co/Yt3Z8sP/neeyae.png' },
        { id: 9, title: 'Phir Kabira',  url: 'https://i.ibb.co/kcxRP15/phir.jpg' },
        { id: 10, title: 'Illahi',  url: 'https://i.ibb.co/ZBp5tFX/illahi.jpg' }
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

export default Ar;