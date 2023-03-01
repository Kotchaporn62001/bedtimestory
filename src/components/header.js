import React from "react";

function header() {
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
                        <a href="header.js">แต่งนิทาน</a>
                    </li>
                    <li className="menu_link">
                        <a href="header.js">เข้าสู่ระบบ</a>
                    </li>
                </ul>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default header;