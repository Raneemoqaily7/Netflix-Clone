import {Button,Card,Col} from 'react-bootstrap'

function Movie(props){
    return (
        <>
        <Col key={props.data.id} md={4}>
            <Card style={{width:'50rem'}}>
                <Card.Img variant='top' src={`https://image.`}/>
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.release_date}
                </Card.Text>
                <Card.Text>
                    {props.overview}
                    </Card.Text>
                    <div>
                        <Button className='div-card-button' variant='primary'
                        onClick={()=>{
                            props.Card(props.data)
                            props.show(true);

                        }}>Add to Favourite</Button>
                    </div>
                    </Card.Body>
                    </Card>
                    </Col>



            
        </>
    )
}
export default Movie;