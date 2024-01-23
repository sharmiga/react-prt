import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Sid extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Enodu Nee Irunthal', url: 'https://i.ibb.co/nwkMfcs/Ennodu-Nee-Irundhaal-song-lyrics-I.jpg'},
        { id: 2, title: 'Mai Nigara',  url: 'https://i.ibb.co/h7SJRq5/nigara.jpg' },
        { id: 3, title: 'Inkem Inkem',  url: 'https://i.ibb.co/pfnQqTz/inkem.jpg' },
        { id: 4, title: 'Kannana Kanne', url: 'https://i.ibb.co/BrT1qYN/76752224.jpg'},
        { id: 5, title: 'Thaarame Thaarame',  url: 'https://i.ibb.co/RphHpZy/MV5-BYTRi-Mzkz-OTQt-OTQz-MC00-Mz-U0-LTky-MWEt-NWFj-Nm-Zm-ZDA3-OWVj-Xk-Ey-Xk-Fqc-Gde-QXVy-ODEz-OTQw-N.jpg' },
        { id: 6, title: 'Aradhya',  url: 'https://i.ibb.co/Ldcjz30/hqdefault-1.jpg' },
        { id: 7, title: 'Yaar Alaipathu',  url: 'https://i.ibb.co/6BZL02G/2584dff8d0a327188d18de192382756c.jpg' },
        { id: 8, title: 'Nee Singam Dhan',  url: 'https://i.ibb.co/FDfCZs7/singam.jpg' },
        { id: 9, title: 'Maruvaarthai',  url: 'https://i.ibb.co/0rDyQsL/hqdefault-2.jpg' },
        { id: 10, title: 'Vaa Senthalini',  url: 'https://i.ibb.co/7vbSFw7/sen.jpg' }
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

export default Sid;