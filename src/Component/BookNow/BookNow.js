import { faMapMarker, faMapMarkerAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';
import './BookNow.css';
  


const BookNow = () => {
    const {id} = useParams();

    const transport=  fakeData.find(transport => transport.id === id)
    console.log(transport);
    console.log(id);
    return (
        <section className="container  mt-5">
        <div className="row">
            <div className="col-md-4 book-details p-5">
                <div className="location p-3">
                    <h5> <span><FontAwesomeIcon icon={faMapMarker} /></span> {transport.location1}</h5>
                    <h5 className="mt-4"> <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> {transport.location2}</h5>
                </div>
                <div className="transport-quality p-2">
                    <span className="transport-image"><img src={transport.image} alt=".."/></span>
                    <span className="transport-name">{transport.name}</span>
                    <span className="transport-capacity">
                            <span ><FontAwesomeIcon icon={faUserFriends} /> </span>
                            {transport.capacity}
                    </span>
                    <span className="transport-cost">{transport.cost}</span>
                </div>
                <div className="transport-quality p-2">
                    <span className="transport-image"><img src={transport.image} alt=".."/></span>
                    <span className="transport-name">{transport.name}</span>
                    <span className="transport-capacity">
                        <span ><FontAwesomeIcon icon={faUserFriends} /> </span>
                    {transport.capacity}</span>
                    <span className="transport-cost">{transport.cost}</span>
                </div>
                <div className="transport-quality p-2">
                    <span className="transport-image"><img src={transport.image} alt=".."/></span>
                    <span className="transport-name">{transport.name}</span>
                    <span className="transport-capacity">
                        <span ><FontAwesomeIcon icon={faUserFriends} /> </span>
                    {transport.capacity}</span>
                    <span className="transport-cost">{transport.cost}</span>
                </div>
            </div>
            <div className="col-md-8">

            </div>
        </div>
    </section>
    );
};

export default BookNow;