import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const RequestComponent = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleRequest = () => {
    setIsProcessing(true);

    // Simulando una petición
    setTimeout(() => {
      setResponseMessage('¡Petición completada!');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleRequest} disabled={isProcessing}>
        Realizar Petición
      </Button>
      {isProcessing && <CircularProgress />}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default RequestComponent;
