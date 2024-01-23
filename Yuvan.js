import React from 'react';
//import Song from '../Song';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Yuvan extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Ithu Varai', url: 'https://2.bp.blogspot.com/-pGXe3lwuALU/WWQ0_VJEe3I/AAAAAAAACnI/8aGoKPt8qTQF3ExTSOSdUvhQRThtoUrYQCLcBGAs/s1600/Idhu%2BVarai%2Bsong%2Blyrics%2B-%2B%2BGoa.JPG'},
        { id: 2, title: 'Poongatre Poongatre',  url: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/07/poongatre.png' },
        { id: 3, title: 'Iragai Pole',  url: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/03/iragey.jpg' },
        { id: 4, title: 'Devathai Kannden', url: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/04/thottu-song.jpg'},
        { id: 5, title: 'Oru Kal Oru Kannadi',  url: 'https://1.bp.blogspot.com/_Je8mCzJRCXQ/SZ60FvSy0HI/AAAAAAAAAck/V5ZOSRY0pRk/s280/siva-manasula-sakthi2.jpg' },
        { id: 6, title: 'Ninaithu Ninaithu',  url: 'https://i.ibb.co/dbkBXdd/7g.jpg' },
        { id: 7, title: 'Kadhal Vaithu',  url: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/08/kadhal-vaithu.png' },
        { id: 8, title: 'Sollamal Thottu',  url: 'https://i.ibb.co/qDB1HwC/dhee.jpg' },
        { id: 9, title: 'Oh Senorita',  url: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/03/chudidar.jpg' },
        { id: 10, title: 'En Kadhal Solla',  url: 'https://c-cl.cdn.smule.com/rs-s-sf-1/arr/db/1c/0171ddf1-2a96-4a6e-a87d-67e1bb478a96_1024.jpg' }
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

export default Yuvan;