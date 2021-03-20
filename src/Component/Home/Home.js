import React from 'react';
import { Container, Row } from 'react-bootstrap';
import transports from '../../fakeData/fakeData.json';
import SingleTransport from '../Single-Transport/SingleTransport';
import './Home.css';

const Home = () => {
    
    return (
        <main className="home-section pt-5 pb-5 ">
            <Container className="main">
                        <Row >
                            {
                               transports.map (transport => <SingleTransport transport={transport} /> )
                            }
                        </Row>
                    </Container>
        </main>
    );
};

export default Home;