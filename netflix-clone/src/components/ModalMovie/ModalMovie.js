import Modal from 'react-router-dom';
import {Button} from 'react-bootstrap'


function ModalMovie({card,show,handleClose}){
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title> Add to your favourit</Modal.Title>
            </Modal.Header>
        <Modal.Body className='body'>
            <h3>{card.title}</h3>
            <img  alt=" " src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}/>
            <p>{card.release_date}</p>
            <p>{card.overview}</p>
            <div>
                <label htmlFor='op'> your opinion </label>
                <input placeholder='write opinion' type="text" id="op"/>

            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary'>Add it </Button>
            </Modal.Footer>
            </Modal>


        </>
    
)
    }
    export default ModalMovie;