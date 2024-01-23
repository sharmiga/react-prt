import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Harris extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Ava Enna', url: 'https://c-fa.cdn.smule.com/rs-s80/arr/26/34/079541a8-83a7-4e10-8acb-f792da50a78e.jpg'},
        { id: 2, title: 'Yennamo Yeadho',  url: 'https://i1.sndcdn.com/artworks-000017407321-nh9d3h-t240x240.jpg' },
        { id: 3, title: 'Thee Illai',  url: 'https://i.ibb.co/XLVHXDR/thee.jpg' },
        { id: 4, title: 'Vizhi Moodi', url: 'https://i.ibb.co/PNp32M4/vizhi-moodi01.jpg'},
        { id: 5, title: 'Kaadhal oru',  url: 'https://i.ibb.co/ZGPqFL4/ok-ok.jpg' },
        { id: 6, title: 'Ragasiya Kanavugal',  url: 'https://i.ibb.co/4PbKyF2/rg.jpg' },
        { id: 7, title: 'Vaarayo Vaarayo',  url: 'https://1.bp.blogspot.com/-ZzEedhUDVnw/UI_ar2rMWAI/AAAAAAAABPM/_VnYd-z7Ljw/s1600/537.jpg' },
        { id: 8, title: 'Anal Maelae',  url: 'https://i.ibb.co/c12zjN4/Anal-Mele-Panithuli-Song-Lyrics.jpg' },
        { id: 9, title: 'Thodu Vaanam',  url: 'https://i.ibb.co/M7B6nym/anegan.jpg' },
        { id: 10, title: 'Nangaai',  url: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/08/nangai.png' }
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
export default Harris;