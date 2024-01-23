import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Hop extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Neeyum Naanum Anbe', url: 'https://i.ibb.co/pyQBzbX/hqdefault.jpg'},
        { id: 2, title: 'Kadhal Cricket',  url: 'https://i.ibb.co/FKKm1Cn/cri.jpg' },
        { id: 3, title: 'Kadhal Oru Agayam',  url: 'https://i.ibb.co/TgNtZXz/agayam.jpg' },
        { id: 4, title: 'Vaadi Pulla Vaadi', url: 'https://i.ibb.co/HzxB8dV/vaadi.jpg'},
        { id: 5, title: 'Kadhalikadhey',  url: 'https://i.ibb.co/Sc6NmfY/atharva.jpg' },
        { id: 6, title: 'Naan Konjam Karupu',  url: 'https://i.ibb.co/NxLzS7h/karupu.jpg' },
        { id: 7, title: 'Kannala Kannala',  url: 'https://i.pinimg.com/236x/3f/78/f1/3f78f1b193c335145a0590438d2252da.jpg' },
        { id: 8, title: 'Theemai Than Vellum',  url: 'https://i.ibb.co/rfqk2Kh/theemai.jpg' },
        { id: 9, title: 'Karaikudi Ilavarasi',  url: 'https://i.ibb.co/sHTJ8nG/karakudi.jpg' },
        { id: 10, title: 'Paisa Note',  url: 'https://i.ibb.co/HrxgZhq/paisa.jpg' }
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

export default Hop;