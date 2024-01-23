import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Dsp extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Kan Moodi Thirakumbothu', url: 'https://i.ibb.co/m4LznGQ/Sachein.jpg'},
        { id: 2, title: 'Kaalangathale',  url: 'https://i.ibb.co/Wg67x6w/kala.jpg' },
        { id: 3, title: 'Yeppadi Irundha',  url: 'https://www.filmibeat.com/img/2008/05/santosh-subramaniam-100408_13052008.jpg' },
        { id: 4, title: 'Feel My Love', url: 'https://i.ibb.co/Ln4HwGp/kutty.jpg'},
        { id: 5, title: 'Bullet',  url: 'https://i.ibb.co/Vj1p6tH/bull.jpg' },
        { id: 6, title: 'Paakatha',  url: 'https://i.ibb.co/wJM02BK/aaru.jpg' },
        { id: 7, title: 'Pooparika',  url: 'https://i.ibb.co/pQxWHHj/Pooparika.jpg' },
        { id: 8, title: 'Excuse Me',  url: 'https://i.ibb.co/WfnwsjS/excuseme.jpg' },
        { id: 9, title: 'Uyire Uyire',  url: 'https://i.ibb.co/28WcyWv/uyire.jpg' },
        { id: 10, title: 'Kozhiveda Kozhi',  url: 'https://i.ibb.co/n11jqcC/kozhi.png' }
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
export default Dsp;