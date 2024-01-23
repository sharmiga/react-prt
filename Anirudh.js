import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
class Anirudh extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'sirikathey', url: 'https://i.ibb.co/L6YMmzp/sirikathey.jpg'},
        { id: 2, title: 'Velicha Poove',  url: 'https://i.ibb.co/zHdTHLs/velicha.jpg' },
        { id: 3, title: 'Thangamey',  url: 'https://i.ibb.co/k0kT5wB/thangamey.jpg' },
        { id: 4, title: 'Pakkam Vanthu', url: 'https://i.ibb.co/xJ042gr/pakksm.jpg'},
        { id: 5, title: 'Oh Penne',  url: 'https://i.ibb.co/gDRkSyv/oh-penne.jpg' },
        { id: 6, title: 'Senjitaley',  url: 'https://i.ibb.co/C07DCPg/senjitaley.jpg' },
        { id: 7, title: "Don'u Don'u Don'u",  url: 'https://i.ibb.co/GnvMKVx/donu-donu.jpg' },
        { id: 8, title: 'So Baby',  url: 'https://i.ibb.co/hBkN3GZ/so-bby.jpg' },
        { id: 9, title: 'Marakavillaye',  url: 'https://i.ibb.co/HrR7K1y/maraka.jpg' },
        { id: 10, title: 'Kadhal Kan Katuthey',  url: 'https://i.ibb.co/mbHFJwR/katuthery.jpg' }
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

export default Anirudh;