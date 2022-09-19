import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import{useParams}from 'react-router-dom';


function Searched() {

const[searchedRecipes, setSearchedRecipes] = useState([]);
let params = useParams();
    const getSearched = async(name) =>{
    

      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`) ;
      const recipes = await data.json();
      console.log(recipes.results);
      setSearchedRecipes(recipes.results);
    
 }
 useEffect(() =>{
    getSearched(params.search);
 },[params.search])

  return (
    <Grid>
        {searchedRecipes.map((item) =>{
            return(
            <Card key={item.id}>
                <img src={item.image} alt=""/>
                <h4>{item.title}</h4>
            </Card>
            )
        })}
    </Grid>
  )


}
const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(10.3rem, 1fr));
  grid-gap:3rem;
`
const Card = styled.div`
  img{
    width:100%;
    border-radius:1rem;

  }
  a{
    text-decoration:none;
  }
  h4{
    text-align:center;
    padding:1rem;
  }
`
export default Searched