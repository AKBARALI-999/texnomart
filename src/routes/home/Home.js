import React from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { DATA } from "../../static";
import Footer from "../../components/footer/Footer";
import img1 from "../../routes/home/img/download.jpg"
import img2 from "../../routes/home/img/7160cc7e-711b-44bb-a6dc-77dca7ec4924.webp"
import img3 from "../home/img/db9c48fb-a175-4ff9-ab06-bd953ddc82cd-medium.webp"
import img4 from "../../routes/home/img/dd3aeb98-802f-4ddd-9d07-c1abd4b1a482-medium.webp"
import img5 from "../../routes/home/img/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png"
import img6 from "../../routes/home/img/9f3f6966-5f68-4bd1-a918-21f6f2c68f26.webp"
import img7 from "../../routes/home/img/409cc1aa-92c8-403e-96fc-f0e3dc15da92-medium.webp"
import img8 from "../../routes/home/img/2f4d6f16-a2af-45bc-9993-82a0320e0630-medium.png"
import img9 from "../../routes/home/img/21a7fcd7-6ca4-4cd3-ade4-499ad6c96660-medium.webp"
import img10 from "../../routes/home/img/5de3eafa-3056-457c-9a3d-1809c89456b9.webp"
import img11 from "../../routes/home/img/8541e646-2b8a-40aa-95e1-d4147930533a-medium.webp"
import img12 from "../../routes/home/img/b2eb3b33-9a84-4b37-80a4-421332d0c5fc-medium.png"
import img13 from "../../routes/home/img/cb377838-24b4-4c67-8efb-42f81678c320.webp"
import img14 from "../../routes/home/img/e3cc7a21-1549-4aa5-b9d2-ba885a129e67-medium.webp"
import './Home.css'
function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
      <div className="giglug">
      <div className="logolar">
        <img src={img1} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img2} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img3} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img4} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img5} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img6} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img7} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img8} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img9} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img10} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img11} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img12} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img13} alt="" className='img' />
      </div>
      <div className="logolar">
        <img src={img14} alt="" className='img' />
      </div>
      </div>
      </div>
      <Product data={DATA} />
      <Footer />
    </div>
  );
}

export default Home;

