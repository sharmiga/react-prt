// import React from 'react';
// import { ListGroup, Container,Row,Col} from 'react-bootstrap';
// class GV extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       gv: [
//         { id: 1, title: 'Ayyayo', url: 'https://c-cl.cdn.smule.com/rs-s79/arr/03/1b/136f343e-7b23-4f6a-95c7-ce78bd80f245_1024.jpg'},
//         { id: 2, title: 'Pookal Pookum',  url: 'https://newtamilstatus.in/wp-content/uploads/2019/09/pookal-pookum-tharunam-whatsapp.jpg' },
//         { id: 3, title: 'Pirai Thedum',  url: 'https://samadada.com/wp-content/uploads/2021/10/Mayakkam-Enna.webp' },

//       ],
//     };
//   }
//   }


//   // class Playlist extends React.Component {
//  render() {
//     return (
//       <div className="playlist">
//         <h2>Playlist</h2>
//         <ol>
//           {songs.map(song => (
//             <li key={song.id}>
//               {song.title}{song.url}
//             </li>
//           ))}
//         </ol>
//       </div>
//     );
//  };


// export default MusicPage;
import React from 'react';
import { ListGroup, Container,Row,Col} from 'react-bootstrap';
 
class MusicPage extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      music: [
        { id: 1, title: 'Ayyayo', url: 'https://c-cl.cdn.smule.com/rs-s79/arr/03/1b/136f343e-7b23-4f6a-95c7-ce78bd80f245_1024.jpg'},
        { id: 2, title: 'Pookal Pookum',  url: 'https://newtamilstatus.in/wp-content/uploads/2019/09/pookal-pookum-tharunam-whatsapp.jpg' },
        { id: 3, title: 'Pirai Thedum',  url: 'https://samadada.com/wp-content/uploads/2021/10/Mayakkam-Enna.webp' },
        { id: 4, title: 'Iravaga Nee', url: 'https://i.ibb.co/sqHbW9M/desktop-wallpaper-idhu-enna-maayam.jpg'},
        { id: 5, title: 'Minnalgal Koothadum',  url: 'https://e0.pxfuel.com/wallpapers/466/451/desktop-wallpaper-polladhavan-2007-backdrops-thumbnail.jpg' },
        { id: 6, title: 'Mailaanjye',  url: 'https://igimages.gumlet.io/tamil/gallery/movies/smp/sivappumanjalpachaimovie070919_1_24.jpg' },
        { id: 7, title: 'Yaaro Ivan',  url: 'https://i.pinimg.com/originals/da/29/20/da2920840a9da53ba18f485d8c3ba647.jpg' },
        { id: 8, title: 'Imaye Imaye',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9kniyMuIiWhhb-SUnxnNNTr7AeQpiJBSmOHM1aVWSSxUW2m40-Gf9cEC_wS-3Taznak&usqp=CAU' },
        { id: 9, title: 'Oru Paadhi Kadhavu',  url: 'https://c-fa.cdn.smule.com/rs-s37/arr/fb/fd/9e4c4072-ba35-4a77-a634-cfe0c1a3ece9.jpg' },
        { id: 10, title: 'Yaar Intha',  url: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/01/Vijay-in-Thalaivaa-New-Movie-Stills-4-e1530533190163.jpg' }
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

export default MusicPage;