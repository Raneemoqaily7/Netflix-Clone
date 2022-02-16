import { Container,Row } from "react-bootstrap";
import Movie from "../Movie/Movie";
import { useState,useEffect } from "react";

import axios from "axios";
import ModalMovie from '../ModalMovie/ModalMovie'

function MovieList(props){
    const [card,setCard]=useState({})
    const [show,setShow]=useState(false);

    const handleClose=()=>setShow(false);
    return (
        <>
        {
            props.data.length && props.data.map((ele) =>(
                <Movie data={ele} show={setShow} card={setCard}/>


            ))
        }
        {
            props.data.length && <div><h2>No result</h2></div>
        }
        </>
    )
}

export default MovieList;