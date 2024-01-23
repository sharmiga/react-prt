import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Anto extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Unnai Kanda Naal Mudhal', url: 'https://i.ibb.co/9cjsBqf/sal.jpg'},
        { id: 2, title: 'Azhagaai Pookkuthey',  url: 'https://tamil.statusdp.com/videos/thumbs/fb/Love/42558.jpg' },
        { id: 3, title: 'Chillax',  url: 'https://i.ibb.co/WHHPNqk/chilx.jpg' },
        { id: 4, title: 'Nooru Saamigal', url: 'https://i.ibb.co/1sTny59/pichai.jpg'},
        { id: 5, title: 'Pia Pia',  url: 'https://i.ibb.co/MhXdRQH/pia.jpg' },
        { id: 6, title: 'Ippadi Mazhai',  url: 'https://i.ibb.co/q1MQ33s/malai.jpg' },
        { id: 7, title: 'Ussumu Larasey',  url: 'https://i.ibb.co/rMf9B1C/larasey.jpg' },
        { id: 8, title: 'Naakku Mukku',  url: 'https://i.ibb.co/Swb7mn5/nakumukku.jpg' },
        { id: 9, title: 'Idicha Pacharisi',  url: 'https://i.ibb.co/mhHphz2/idicha.jpg' },
        { id: 10, title: 'Ichu Ichu',  url: 'https://i.ibb.co/FzcNzjD/ichu.jpg' }
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

export default Anto;