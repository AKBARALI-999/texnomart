import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import "./Product.css";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishies, removeFromWishies } from "../../redux/wishiesSlice";
import { incCart } from "../../redux/cartSlice";
import { Link } from 'react-router-dom'; 
import img from "../../components/product/img/6b2bcf71-c572-4673-94ad-3bfa34523103.svg"
import img1 from "../../components/product/img/888ea4a7-55dc-4da3-b83d-f34a44c25e3c.svg"
import img2 from "../../components/product/img/365fda66-9e5f-44ac-88ea-f25fc90dc9d1.svg"
import img3 from "../../components/product/img/43e4d667-f026-484c-80a5-eebc1b128988.svg"
import img4 from "../../components/product/img/17e6cca8-ba51-490a-832a-e13d432640d2.svg"
import img5 from "../../components/product/img/4349e3dd-97b3-4300-9a34-16cfcb3d10c7.svg"
import img6 from "../../components/product/img/022df0cb-6560-4735-af2b-925057321911.svg"
import img7 from "../../components/product/img/5c67e6db-da29-4946-9790-83c15d205c82.svg"
import img8 from "../../components/product/img/ecd242c1-1ff2-4c5e-8e67-3fe7e2819b00.svg"
import img9 from "../../components/product/img/0fc51fb8-ba7d-42dc-bf7a-f131ac4f83f9.svg"
import img10 from "../../components/product/img/b4f03ab9-a48d-4bd0-9e27-8bb8d5838036.svg"
function Product({ data }) {
  const dispatch = useDispatch();
  let wishes = useSelector((state) => state.wishes.value);
  return (
  <div className="container">
    <h2 className="product-heading">Tavsiyalar</h2>
    <div className="giglug__1">
      <div className="logolar__1">
      <img src={img1} alt="" className='imgg' /> <span>Смартфонлар</span>
      </div>
      <div className="logolar__1">
        <img src={img2} alt="" className='imgg' /> <span>Чангютгичлар</span>
      </div>
      <div className="logolar__1">
        <img src={img3} alt="" className='imgg' /> <span>Музлатгичлар</span>
      </div>
      <div className="logolar__1">
        <img src={img4} alt="" className='imgg' /> <span>Ҳаво совутгичлар</span>
      </div>
      <div className="logolar__1">
        <img src={img5} alt="" className='imgg' /> <span>Ноутбуклар</span>
      </div>
      <div className="logolar__1">
        <img src={img6} alt="" className='imgg' /> <span>Телевизорлар</span>
      </div>
      <div className="logolar__1">
        <img src={img7} alt="" className='imgg' /> <span>Қаҳва машиналари</span>
      </div>
      <div className="logolar__1">
        <img src={img8} alt="" className='imgg' /> <span>Кир ювиш машиналари</span>
      </div>
      <div className="logolar__1">
        <img src={img9} alt="" className='imgg' /> <span>Фенлар</span>
      </div>
      <div className="logolar__1">
        <img src={img10} alt="" className='imgg' /> <span>Планшетлар</span>
      </div>
      </div>
      <br /><br />  

<div className="product-wrapper">
  {data.map((el, index) => {
    return (
      <div className="product-card">
      <img src={img} alt="" className='img__1' />
  <div className="product-card-img-wrapper">
    <a className="product-card-img-link" href="">
    <Link to={`product/${el.id}`}>
      <img className="product-card-img" src={el.url[0]} alt="" />

    </Link>
    </a>

    {wishes?.some((item) => item.id === el.id) ? (
      <div
        onClick={() => dispatch(removeFromWishies(el))}
        className="product-card-heart"
      >
        <FaHeart />
      </div>
    ) : (
      <div
      
        onClick={() => dispatch(addToWishies(el))}
        className="product-card-heart"
      >
        <CiHeart />
      </div>
    )}
  </div>

  <div className="product-card-body">
    <h2 className="product-card-title">{el.title}</h2>
    <mark>{(el.price * 1.5) / 12} So'm / Oyiga </mark>
    <div className="product-card-price-wrapper">
      <div className="product-card-price-item">
        <del>{el.price * 1.5}</del>
        <p>{el.price}</p>
      </div>
      <div
        onClick={() => dispatch(incCart(el))}
        className="product-card-price-icon"
      >
        <TbShoppingBagPlus />
      </div>
    </div>
  </div>
</div>
    );
  })}
</div>
  </div>
  
  );
}

export default Product;
