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
        <section className="container ">
            <div className="row">
                <div className="col-lg-4 mt-5  p-5 destination">
                <from>
                        <label>Pick Form</label> <br/>
                        <input className="form-control" type="text" placeholder="Mirpur" /> <br/> <br/>

                        <label>Pick To</label> <br/>
                        <input  className="form-control" type="text" placeholder="Dhanmondi" /> <br/> <br/> 
                        
                        <label>Date</label><br/>
                        <input type="date" className="form-control"></input>  <br/><br/>           
                            
                    <button  className="bg-info text-white form-control" onClick={() => handelBook()} > Search </button>
                 </from>
                </div>
                
                <div className="col-lg-8 mt-5">
                    <SimpleMap />
                </div>
            </div>
        </section>
    );
};

export default Destination;