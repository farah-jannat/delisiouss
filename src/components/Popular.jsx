// import React from 'react'
import { useEffect, useState } from 'react';
import styled from "styled-components"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom";

function Popular() {
    const [Popular, setPopular] = useState([]);

    useEffect(() =>{
        getPopular();
    },[]);

    const getPopular = async() =>{
      const check = localStorage.getItem('Popular');

      if(check){
        setPopular(JSON.parse(check));
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        
        localStorage.setItem("Popular",JSON.stringify(data.recipes));
        setPopular(data.recipes)
        console.log(data.recipes)

      }



        
    };
  return (
    <div>
    
            <Wrapper>
              
              <h3>Popular Picks</h3>
              <Splide options={{
                perPage:4,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:"5rem",
                
              }}>
              {Popular.map((recipe) =>{
                return(
                  <SplideSlide>
                  <Card>
                    <Link to ={"/recipe/" +recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
</Link>
                  </Card>
                  </SplideSlide>
                )
              })}
</Splide>
            </Wrapper>

    
      
    </div>
  )
}

const Wrapper = styled.div`
  margin:4rem 0rem;

`

const Card = styled.div`
min-height:11rem;

overflow:hidden;
// background:red;
position: relative;

  img {
  
    border-radius:1rem;
    position: absolute;
    left:0;
    width:100%;
    height :100%;
    object-fit:cover;
    object-position:center;
    background:leaner-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9)) ;   
  }
  p{
   position:absolute;
   z-index:10; 
   left:50%;
   top:0%;
   transform:translate(-50%, 140%);
   width:100%;
   color:white;
   text-align:center;
   font-size:1rem;
   font-weight:600;
   height:40%;
   display:flex;
   justify-content:center;
   align-items:center;
  }
  `;
const Gradient = styled.div`
 z-index:3;
 positon:absolute;
 width :100%;
 height:100%;
 background:leaner-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)) ;
 
`
export default Popular
  // z-index:3;
  // positon:absolute;
  // width:100%;
  // height:100%;
  // background:linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0 ,0.5));