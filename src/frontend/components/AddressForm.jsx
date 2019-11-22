import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Dirección de Envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='nombre'
            name='nombre'
            defaultValue='Emma'
            label='Nombre'
            fullWidth
            autoComplete='nombre'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='apellido'
            name='apellido'
            label='Apellido'
            defaultValue='Salafia'
            fullWidth
            autoComplete='apellido'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='direccion1'
            name='direccion1'
            label='Dirección de Envío 1'
            defaultValue='Popolna 72. Esperanza 2da Sección 09017. Pedregal de San Ángel'
            fullWidth
            autoComplete='direccion-envio-1'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='direccion2'
            name='direccion2'
            label='Dirección de Envío 2'
            fullWidth
            autoComplete='direccion-envio-2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='ciudad'
            name='ciudad'
            label='Ciudad'
            defaultValue='Ciudad de México'
            fullWidth
            autoComplete='ciudad'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='estado'
            name='estado'
            label='Estado'
            defaultValue='Ciudad de México'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='codigopostal'
            name='codigopostal'
            label='Código Postal'
            fullWidth
            defaultValue='09017'
            autoComplete='postal-code'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='pais'
            name='pais'
            label='País'
            fullWidth
            defaultValue='México'
            autoComplete='billing country'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='saveAddress' value='yes' />
            }
            label='Usar esta dirección para detalles del pago'
          />
        </Grid>
      </Grid>
    </>
  );
}
