import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Cupcake Red Velvet', desc: 'Cupcake Red Velvet', price: '$62.5' },
  { name: 'Cupcake Cookies & Cream', desc: 'Cupcake Cookies & Cream', price: '$58.7' },
  { name: 'Pay de Limón', desc: 'Pay de Limón', price: '$55' },
  { name: 'Macaron de Frutos Rojos', desc: 'Macaron de Frutos Rojos', price: '$31' },
  { name: 'Envío', desc: '', price: 'Gratis' },
];
const addresses = [
  'Popolna 72',
  'Esperanza 2da Sección',
  'CP. 09017',
  'Pedregal de San Ángel, CDMX',
  'México',
];
const payments = [
  { name: 'Tipo de Tarjeta', detail: 'Visa' },
  { name: 'Titular de la Tarjeta', detail: 'Emma Salafia' },
  { name: 'Número de Tarjeta', detail: 'xxxx-xxxx-xxxx-0832' },
  { name: 'Fecha de Expiración', detail: '02/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Resumen de Pedido
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant='body2'>{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            $207.2
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Envío
          </Typography>
          <Typography gutterBottom>Emma Salafia</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Detalles de Pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
