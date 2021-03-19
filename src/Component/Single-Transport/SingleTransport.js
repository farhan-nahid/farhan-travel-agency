import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './SingleTransport.css';

const SingleTransport = (props) => {
 //   console.log(props);
    const {name, image, id } = props.transport
    const history = useHistory();
    const handleBook = () => {
      history.push(`/destination/${id}`);
  }
    return (
        <section className="text-center  col-lg-3 col-md-6  mt-4">
        <Card  className="transport-card " onClick={() => handleBook()}>
        <Card.Img variant="top" className="transport-img " src={image} />
        <Card.Body>
          <Card.Title ><h3 className="name">{name}</h3></Card.Title>
        </Card.Body>
      </Card>
      </section>
    );
};

export default SingleTransport;