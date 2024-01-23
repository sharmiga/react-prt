import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Ar extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Musthaffa', url: 'https://c-cl.cdn.smule.com/rs-s77/arr/81/2e/e0ed53d9-c70f-435f-bc76-e46c0058049a.jpg'},
        { id: 2, title: 'New york',  url: 'https://i.ibb.co/6HsWQJ2/new-york-nagaram.png' },
        { id: 3, title: 'Varaga Nadhikarai',  url: 'https://3.bp.blogspot.com/_Xa8ks56FBzs/SAHHqBATFFI/AAAAAAAAEng/fch9fEW5wTo/s320/sangamammp3.jpg' },
        { id: 4, title: 'Aaruyirae', url: 'https://lofaber.com/wp-content/uploads/2021/07/Aaruyire-Mannipaaya-Lyrics.png'},
        { id: 5, title: 'Enna Solla Pogirai',  url: 'https://i.ibb.co/tbVzD3t/enna.jpg' },
        { id: 6, title: 'Mulu Madhi',  url: 'https://c-fa.cdn.smule.com/rs-s77/arr/42/5b/72be63f9-1e64-4498-b2ef-9b959fbc35d4.jpg' },
        { id: 7, title: 'Raanjhanaa',  url: 'https://i.ibb.co/hZM0Dfw/dhanush.jpg' },
        { id: 8, title: 'Oorvasi',  url: 'https://i.ibb.co/1K1XTFZ/urvashui.png' },
        { id: 9, title: 'Ella Pugalum Iraivan',  url: 'https://c-fa.cdn.smule.com/rs-s79/arr/99/1c/5b04f972-b093-4293-bd17-4b9e5b69e934.jpg' },
        { id: 10, title: 'Puthu Vellai Malai',  url: 'https://www.tamil2lyrics.com/wp-content/uploads/2018/05/thamizha.png' }
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