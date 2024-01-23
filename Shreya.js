import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Shreya extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 2, title: 'Yenadi Nee',  url: 'https://c-fa.cdn.smule.com/rs-s79/arr/cf/e0/74ab378a-d925-418f-b98b-b8c406b7ce50.jpg' },
        { id: 3, title: 'Unai Vida',  url: 'https://i.ibb.co/sj691JL/viru.jpg' },
        { id: 4, title: 'Pookale Sattru', url: 'https://i.ibb.co/hY4MGLs/i.jpg'},
        { id: 5, title: 'andankkaka',  url: 'https://www.behindwoods.com/features/Interviews/Interview4/vikram/images/tamil-cinema-interview-anniyan.jpg' },
        { id: 6, title: 'Naani Koni',  url: 'https://i.ibb.co/L1PLFcp/naani.jpg' },
        { id: 1, title: 'Kootha Kaathu', url: 'https://i.ibb.co/LgFv9t2/kaathu.jpg'},
        { id: 7, title: 'Mannipaya',  url: 'https://i.ibb.co/jWJpp0t/Vinnaithandi-Varuvaaya-5.jpg' },
        { id: 8, title: 'Oru Vetkam Varuthey',  url: 'https://i.ibb.co/KVG0pjH/oru.jpg' },
        { id: 9, title: 'Nannare',  url: 'https://i.pinimg.com/200x150/7b/51/c5/7b51c5e43b9fe8d26030861ee5ac01d9.jpg' },
        { id: 10, title: 'Samjhawan',  url: 'https://i.ibb.co/HDvZ08t/samj.jpg' }
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

export default Shreya;