import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Jay extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Hey Nijame', url: 'https://i.ibb.co/X7YKjnj/nij.jpg'},
        { id: 2, title: 'Visiri',  url: 'https://i.ibb.co/N22mhmv/visiri.jpg' },
        { id: 3, title: 'Ondra Renda',  url: 'https://i.pinimg.com/222x/e4/15/5a/e4155aaa45361963b0f9a245f26ccf91.jpg' },
        { id: 4, title: 'Mudhar Kanave', url: 'https://i.ibb.co/TbJq2vy/kanavu.jpg'},
        { id: 5, title: 'Thaimai',  url: 'https://i.ibb.co/W5T8LLH/thaimai.jpg' },
        { id: 6, title: 'Vaseegara',  url: 'https://i.pinimg.com/236x/3c/92/2b/3c922b6f18091e6739e1ad33497d56d3.jpg' },
        { id: 7, title: 'Unnakul Naane',  url: 'https://i.ibb.co/BsqQPZT/naane.jpg' },
        { id: 8, title: 'Paartha Mudhal',  url: 'https://i.ibb.co/2czxHb6/partha.jpg' },
        { id: 9, title: 'Narumugaye',  url: 'https://i.ibb.co/Yyp3V5P/narumugaiye.jpg' },
        { id: 10, title: 'Yemma Yea Alagamma',  url: 'https://i.ibb.co/PTfssWK/yemma.jpg' }
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

export default Jay;