import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };

    const movies =useSelector(selectMovies);



  return (
    <Carousel {...settings}>

{movies && 
movies.map((movie)=>
<Wrap>
    <img src={movie.backgroundImg} alt='no'  />
</Wrap>
)}


     
    </Carousel>
  )
}

export default ImgSlider

const Carousel =styled(Slider)`

margin-top:20px;
ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}

li.slick-active button:before{
    color:white;
}

.slick-list{
    overflow:visible;

}

button{
    z-index:1;
}
`

const Wrap =styled.div`

cursor:pointer;
img{
  height:400px;
    border:4px solid transparent;
    border-radius:4px;
   
width:100%;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:300ms;
&:hover{
    border:4px solid rgba(249 ,249, 249 ,0.8);
}

}

`