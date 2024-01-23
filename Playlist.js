import React from "react";
import "../components/Home.css";
import { Container, Carousel, CarouselItem } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import MusicPage from "./music";
import Navbar from "./Navbar";
function Playlist() {
  return (
   
    <div className="con">       
        <Navbar/>
      <div className="img1" style={{
        paddingTop:'110px'
      }}>
    
        <Container
          fluid
          className="cont"
          style={{
            maxWidth: "35%",
            marginLeft: "35%",
          }}
        >
          <Carousel style={{

          }}>
            <CarouselItem>
              <img
                className="eng"
                src="https://i.postimg.cc/vB5KvN96/eng.jpg"
                alt="eng"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="anj"
                src="https://e1.pxfuel.com/desktop-wallpaper/306/368/desktop-wallpaper-gv-prakash-bachelor-movie-stills-gallery-bachelor-tamil-thumbnail.jpg"
                alt="rowdey"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="raja"
                src="https://i.postimg.cc/T25JWW6Z/okok.jpg"
                alt="vc"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className="anjan"
                src="https://e1.pxfuel.com/desktop-wallpaper/412/192/desktop-wallpaper-surya-vaaranam-aayiram-vaaranam-aayiram-thumbnail.jpg"
                alt="ath"
              />
            </CarouselItem>
          </Carousel>
         
        </Container>
        <MusicPage/> 
          <div>
        </div>
      </div>
    </div>
  );
}
export default Playlist;
