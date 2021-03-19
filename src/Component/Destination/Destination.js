import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SimpleMap from '../Map/Map';
import './Destination.css';

const Destination = () => {
    const {id} =useParams();
    const history = useHistory();
    

const handelBook = ( ) => {
    history.push(`/book/${id}`)
}
    return (
        <section className="container  mt-5">
            <div className="row">
                <div className="col-md-4  p-5 destination">
                <from>
                        <label>Pick Form</label> <br/>
                        <input className="form-control" type="text" placeholder="Mirpur" /> <br/> <br/>
                        <label>Pick To</label> <br/>
                        <input  className="form-control" type="text" placeholder="Dhanmondi" /> <br/> <br/>
                    <button  className="bg-info text-white form-control" onClick={() => handelBook()} > Search </button>
                 </from>
                </div>
                <div className="col-md-8">
                    <SimpleMap />
                </div>
            </div>
        </section>
    );
};

export default Destination;