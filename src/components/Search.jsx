import React from 'react'
import styled from 'styled-components'
import{useState} from "react";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/searched/" + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
            
        </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
 margin:0rem 9rem;
 
    div{
        width:100%;
        positon:relative;
        
    }
    input{
        border: none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size:0.8rem;
        color:white;
        padding:0.7rem 2rem;
        border-radius:1rem;
        outline:none;
        width:100%;
        

    }
    svg{
        position:absolute;
        top:2%;
        left:31.3%;
        transform:translate(14%, -0%);
        color:white;
        font-size:0.8rem;
    }
`

export default Search