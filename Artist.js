import React from "react";
import "./Home.css";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gv from './Gv';
import Anirudh from './Anirudh';
import Navbar from "./Navbar";
export default function Artist() {
  return (
    <div className="art"
    style={{
     
    }}>
      <Navbar/>
      <Row
        style={{
          width: "100%",
          paddingTop: '110px',
          backgroundColor: 'transparent'
        }}
      >
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Gv'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.postimg.cc/L4qbcQrr/gv.jpg" /></Link>
           <Card.Body>
              <Card.Title><Link to='/Gv' className="gv">GV Prakash</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Anirudh'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://www.filmibeat.com/img/162x203/popcorn/profile_photos/anirudh-ravichander-20221117133315-26845.jpg" /></Link>
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Anirudh' className="gv">Anirudh Ravichandhran</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Spb'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.pinimg.com/236x/c3/d6/bd/c3d6bd391fbe67cb3589612b5f4c3cca.jpg" /></Link>
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Spb' className="spb">SP Balasubrahmanyam</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Ar'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.postimg.cc/Xqcg1Khv/rahman.jpg" /></Link>
            
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Ar' className="spb">AR Rahman</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Shreya'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.postimg.cc/CM3dLB1c/ghosal.jpg" /></Link>
            
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Shreya' className="spb">Shreya Ghosal</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/yuvan'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/h2ksBGX/yuvan.jpg" /></Link>
           
           
            <Card.Body>
              <Card.Title 
              style={{
                color: 'white'
              }}><Link to='/Yuvan' className="spb">Yuvan Shankar Raja</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Sid'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/23LV35Y/sid.jpg" /></Link>
            
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Sid' className="spb"> Sid Sriram</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
             <Link to='/Anu'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.pinimg.com/736x/79/aa/2d/79aa2dec2254fee5b3f69fb7d2b16f63.jpg" /></Link>
            
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Anu' className="spb"> Shree Sakthi Gopalan</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Harris'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/hBJqSff/harris.jpg" /></Link>
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Harris' className="spb">Harris jayaraj </Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Kar'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/QkLzKsV/kar.jpg" /></Link>
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Kar' className="spb"> Karthik</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Hop'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1700565993774-Hiphop_Tamizha.png" /></Link>
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Hop' className="spb">Hiphop Aadhi</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
             <Link to='/Dsp'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/FY6CFbP/dsp.jpg" /></Link>
         <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Dsp' className="spb">DSP</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Arj'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/NnLKTKF/arjith1.jpg" /></Link>
            
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Arj' className="spb">Arijith Singh</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",backgroundColor: 'transparent'
            }}
          >
            <Link to='/Swe'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/Wff067d/swetha.jpg" /></Link>
          <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Swe' className="spb">Swetha Mohan</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
             <Link to='/Jay'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://th-i.thgim.com/public/todays-paper/tp-national/tp-newdelhi/yuroxa/article66659232.ece/alternates/FREE_1200/TH24-Carnatic-s%2BG32B1DQBH.5.jpg.jpg" /></Link>
           <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Jay' className="spb"> Bombay Jayshree</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              border: "none",
              backgroundColor: 'transparent'
            }}
          >
            <Link to='/Anto'> <Card.Img style={{
              marginLeft:'80px',
              marginRight:'auto'
            }} src="https://i.ibb.co/W07HSSQ/Vijay-Antony2.jpg" /></Link>
            
            <Card.Body>
              <Card.Title style={{
                color: 'white'
              }}><Link to='/Anto' className="spb">Vijay Antony</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
