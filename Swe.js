import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
class Swe extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Ena Solla', url: 'https://i.ibb.co/WVSTBw8/solla.jpg'},
        { id: 2, title: 'Kalaarasiga',  url: 'https://i.ibb.co/hZM0Dfw/dhanush.jpg' },
        { id: 3, title: 'Siriki Vaasam',  url: 'https://i.ibb.co/6PRvb6x/siruki.png' },
        { id: 4, title: 'Mazhayin Saaralil', url: 'https://i.ibb.co/BCFvT0H/nani.jpg'},
        { id: 5, title: 'Nee Paartha Vizhigal',  url: 'https://i.ibb.co/DYYxjF4/vili.jpg' },
        { id: 6, title: 'Macho',  url: 'https://i.ibb.co/h7S0FjG/mach.jpg' },
        { id: 7, title: 'Inum Konjam Neram',  url: 'https://i.ibb.co/61V4GCd/mariyan.jpg' },
        { id: 8, title: 'Vizhiyil Un Vizhiyil',  url: 'https://i.ibb.co/DgvdqRh/eb0c0bcf-c7e8-42df-a7c8-af8567ead7f6.jpg' },
        { id: 9, title: 'Puriyavillai',  url: 'https://i.ibb.co/8DqGfYN/priyavillai.jpg' },
        { id: 10, title: 'Vaa Vaathi',  url: 'https://i.ibb.co/k1C263H/vaathi.jpg' }
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

export default Swe;