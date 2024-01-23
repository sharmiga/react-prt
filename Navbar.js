import {Component} from "react"
import "./Home.css";
import { Menu } from "./Menu";
import { Link } from 'react-router-dom';
import { Button } from "bootstrap";
import MusicPlayer from "../Song";
class Navbar extends Component{
   
    render(){
        return(
            <nav className="items">
                <h1 className="logo">Music player</h1>
               
                <ul className="menu">
                    {Menu.map((item,index)=>{
                        return(

                    <li key={index}>
                        <Link to={item.url} className="link"><i className={item.icon}></i>{item.title}</Link>
                    </li>
                        );
                    })}
                    <button className="login"> <Link to='/Login'  style={{
                        textDecoration: 'none',
                        color:'black',
                        
                    }}> Login</Link></button>
                    
                </ul>
            </nav>
        );
    }
}
export default Navbar;