import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Forma de Pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardName'
            label='Nombre en la Tarjeta'
            defaultValue='Emma Salafia'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardNumber'
            label='Número de Tarjeta'
            defaultValue='7724 8272 8471 0832'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='expDate'
            label='Fecha de Expiración'
            defaultValue='02/24'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cvv'
            label='CVV'
            helperText='Últimos 3 dígitos de la tarjeta de crédito'
            defaultValue='929'
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='Guardar Tarjeta' value='yes' />
            }
            label='Recordar tarjeta para futuros pagos.'
          />
        </Grid>
      </Grid>
    </>
  );
}
