import React, {useState} from 'react';
import './header.css';
import { FiUser } from "react-icons/fi";

function Header() {
    const [clicksign, signClick ] = useState(false);
    const handleSign = () => signClick(!clicksign);
    

    return (
      <div className="header" >
        <div className="container">
            <div className="head_con">
                <div className="logo">
                    <h1>bedtime story</h1>
                </div>
                <ul className="menubar">
                    <li className="menu_link">
                        <a href="header.js">หน้าหลัก</a>
                    </li>
                    <li className="menu_link">
                        <a href="./Writestory/bar.js">แต่งนิทาน</a>
                    </li>
                    <div className={clicksign? "menu_log active" : "menu_log" } onClick={handleSign}>
                    <li className="menu_link">
                    {clicksign ?(   
                                <a href='#'>เข้าสู่ระบบ</a>
                                ):(
                                    <FiUser/>
                                )}
                               
                    </li>
                    
                    </div>
                </ul>
            </div>
        </div>
        
      </div>
    )
  }
  
  export default Header;