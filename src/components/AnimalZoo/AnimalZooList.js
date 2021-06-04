import React, { useState } from 'react';
import { Modal , Button, Carousel, CarouselItem} from 'react-bootstrap';

const AnimalZooList = (props) => {
   console.log(props.animal)
   const {name, temperament, life_span, breed_group} = props.animal;

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   return (
      <section className="col-md-3 me-5 ms-4 mb-5">
         <div className="animalZooSlid p-3">
            <div className="text-center image-height">
               <img class="image-fluid-size" src={props.animal.image.url} alt="" />
            </div>
            <div className="text-center">
               <button onClick={handleShow} className="name-button mt-2">{name}</button> <br />
               <button onClick={handleShow} className="button-click">Read More <span><i class="fas fa-arrow-circle-right"></i></span></button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header>
               <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="text-center">
               <img className="img-fluid-src" src={props.animal.image.url} alt=""/>
               </div>
               <div className="mt-3">
                  <h6 className="text-f-c">Breed Group: <span className="text-secondary">{breed_group}</span></h6>
                  <h6 className="text-f-c">Height: <span className="text-secondary">{props.animal.image.height}</span></h6>
                  <h6 className="text-f-c">Width: <span className="text-secondary">{props.animal.image.width}</span></h6>
                  <h6 className="text-f-c">Life Span: <span className="text-secondary">{life_span}</span></h6>
                  <h6 className="text-f-c">Temperament: <span className="text-secondary">{temperament}</span></h6>
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </section>
   );
};

export default AnimalZooList;