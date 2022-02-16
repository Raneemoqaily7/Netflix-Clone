import {useState,useEffect} from 'react'
import axios from 'axios';
import {Button,Card,Row,Container,Col} from 'react-bootstrap';
function Home(){
    const[results,setData]=useState([]);
 const getTrending=async()=>{
     return await axios.get("https://moviesraneem.herokuapp.com/trending")
                    .then (result=>{
                        return result.results;
                    }).catch ((error)=>{
                        console.log(error)
                    })
                

                }
                useEffect(()=>{
                    void(async()=>{
                   let results = await getTrending ();
                   setData(results)}) ();
                    },[]) 

                    
        

                    

    return(
<>
<Container className='div-container'>
  <Row md={3}>
      {
          results.length&&results.map((results)=>(
    <Col key={results.id} md={4}>
        <Card  className='div-card'>
            <Card.Img className='div-card-img' variant="top" src={results.poster_path}/>
            <Card.Body>
            <Card.Title className='div-card-title'>{results.title}</Card.Title>
            <div>
                <Button className='div-card-button' variant='primary' > Add to favorite list.</Button>
            </div>
            </Card.Body>
            
       </Card>
    </Col>
          ))}
  </Row>
  
</Container>
{
    !results.length&&<div><h2>No such result please try again or wait</h2> </div>
}
</>
    )
}
export default Home;