import React, { useState } from 'react';
import './content.css';
import { FiBookOpen, FiBook } from "react-icons/fi";

let ficdata= {
    fic1 :"เด็กเลี้ยงแกะ",
    story1 :"ณ หมู่บ้านชายป่า มีเด็กเลี้ยงแกะคนหนึ่งชอบพูดโกหกเป็นประจำ วันหนึ่งเกิดนึกสนุกอยากแกล้งชาวบ้านจึงร้องตะโกนว่า 'ช่วยด้วย ๆ หมาป่ามันจะมากินแกะแล้ว' ชาวบ้านต่างพากันมาช่วย พอเด็กเลี้ยงแกะเห็นชาวบ้านวิ่งหน้าตาตื่นก็หัวเราะด้วยความชอบใจ แล้วชอบเล่นสนุปแบบนี้อีกหลายครั้ง ชาวบ้านก็พากันวิ่งหน้าตาตื่นมาช่วยเขาทุกครั้ง และพบว่าพวกเขาถูกหลอกอีกเช่นเคย จนวันหนึ่งหมาป่าก็มาจริง ๆ คราวนี้เด็กเลี้ยงแกะตะโกนให้คนมาช่วยสุดเสียง 'ช่วยด้วย ๆ หมาป่ามันจะมากินแกะแล้ว' แต่ครั้งนี้กลับไม่มีชาวบ้านออกมาช่วยเด็กเลี้ยงแกะอีกแล้ว เพราะคิดว่าเขาคงจะโกหกอีก สุดท้ายเจ้าหมาป่าจึงกินแกะของเด็กเลี้ยงแกะไปทีละตัว ๆ จนหมด",
    motto1 :"นิทานเรื่องนี้สอนให้รู้ว่า : คนที่ชอบโกหก แม้พูดควางจริงก็ไม่มีใครเชื่อ"
}
function Content() { 

        const [click, setClick ] = useState(false);
        const handleClick = () => setClick(!click);
        console.log(click);

    return(
        <div className="content">
            <div className="container">
                <div className="content_con">
                    <h1>รวมนิทานก่อนนอน</h1>
                </div>
                <section className="content_fic">
                    <div className= "fic_area" >
                        <div className="fic_data">
                            <img src='https://cdn.pixabay.com/photo/2016/08/10/06/22/cartoon-1582537_960_720.jpg' alt="" width="100" height="100"/>
                            <h2>{ficdata.fic1}</h2>
                            <div className='logo_book' onClick={handleClick }>
                                {click ?(
                                <FiBookOpen/>
                                ):(
                                    <FiBook/>
                                )}
                            </div>
                            <div className= {click? "text active" : "text"}>
                                <p>{ficdata.story1}<br/> {ficdata.motto1}</p>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </section>
            </div>
        </div>

    )
}
 export default Content;