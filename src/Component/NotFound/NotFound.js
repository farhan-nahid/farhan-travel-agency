import React from 'react';
import { Alert } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Alert variant="danger text-center mt-5 pt-5 pb-5">
        <Alert.Heading>Oh snap!!! You got an error!!!</Alert.Heading>
              <p>  Change this and that and try again!! </p>
      </Alert>
    );
};

export default NotFound;