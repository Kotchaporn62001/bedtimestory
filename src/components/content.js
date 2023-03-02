import React from "react";
import './content.css'
import { FiBookOpen } from "react-icons/fi";

let ficdata= {
    fic1 :"หมาป่ากับลูกแกะ",
    story1 :"เช้าตรู่วันหนึ่ง ลูกแกะหลงฝูงยืนดื่มน้ำอยู่บริเวณริมฝั่งลำธารในป่า ในเช้าวันเดียวกันนั้นเอง หมาป่าหิวโซก็ย่างกายลงมาจากต้นน้ำเพื่อล่าเหยื่อ ไม่ช้าไม่นานมันก็ ..."
}
function content() {
    return(
        <div className="content">
            <div className="container">
                <div className="content_con">
                    <h1>รวมนิทานก่อนนอน</h1>
                </div>
                <section className="content_fic">
                    <div className="fic_area">
                        <img scr="" alt=""></img>
                        <h2>{ficdata.fic1}<FiBookOpen/></h2>
                        <p>{ficdata.story1}</p>
                    </div>
                </section>
            </div>
        </div>

    )
}
 export default content;