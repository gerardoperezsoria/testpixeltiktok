import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({titulo, eventClick}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={eventClick} style={{backgroundColor: '#6bb023'}}>{titulo}</Button>
    </Stack>
  );
}