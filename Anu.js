import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class Anu extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Aaga Naga', url: 'https://i.ibb.co/fNG0rNG/naga.jpg'},
        { id: 2, title: 'Vaaya Veera',  url: 'https://i.ibb.co/16S59GM/vaaya.jpg' },
        { id: 3, title: 'Nenjukulla',  url: 'https://c-fa.cdn.smule.com/rs-s80/arr/bb/4e/dec99154-13e5-426e-abb9-9a78ff8169b4.jpg' },
        { id: 4, title: 'Makkayala', url: 'https://i.ibb.co/QmJvYqV/makayala.jpg'},
        { id: 5, title: 'Nenaiviruka',  url: 'https://e0.pxfuel.com/wallpapers/466/451/desktop-wallpaper-polladhavan-2007-backdrops-thumbnail.jpg' },
        { id: 6, title: 'Nenjame Nenjame',  url: 'https://i.ibb.co/R0sLxpm/maamannan.jpg' },
        { id: 7, title: 'Yaanji',  url: 'https://i.ibb.co/vsChD9j/yaanji.jpg' },
        { id: 8, title: 'Imaye Imaye',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9kniyMuIiWhhb-SUnxnNNTr7AeQpiJBSmOHM1aVWSSxUW2m40-Gf9cEC_wS-3Taznak&usqp=CAU' },
        { id: 9, title: 'Vaanmegam',  url: 'https://i.ibb.co/Dp0CWR8/vaan.jpg'},
        { id: 10, title: 'Angnyade',  url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1hlclzzQLSV63Ck_NkPrcHCJy4IEoBU3K96txFTx00X1wbcRt' }
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

export default Anu;