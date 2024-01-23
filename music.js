import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class MusicPage extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, description: 'Melody',url:'https://i.ibb.co/bsKxyKN/playlist1.jpg' },
        { id: 2, description: 'Latest songs',url:'https://i.ibb.co/q16tc5L/play.jpg'},
        { id: 3, description: 'Evergreen hits',url:'https://www.tamil2lyrics.com/wp-content/uploads/2017/05/unnai-kodu.jpg' },
        { id: 4, description: ' 90s Melodies',url:'https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/62d9302ad43eeb797b8f48b8/COLLECTION_2104724568704094.png' },
        { id: 5, description: 'Folk songs',url:'https://c-cl.cdn.smule.com/rs-s80/arr/2a/87/792c0216-70aa-48e7-a126-15f1355c593d.jpg' },
        { id: 5, description: 'Yuvan hits',url:'https://1601606126.rsc.cdn77.org/raagaimg/r_img/250/t/tc0001572.jpg' },
      ],
    };
 }

 render() {
    return (
     <Container style={{
        width:'100%',
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
                paddingLeft:'50%'
              }}>{music.description}</p></Col>
                </Row>
                
              
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
 }
}

export default MusicPage;