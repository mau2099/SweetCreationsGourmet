import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/CoreStyle.scss';
import '../assets/styles/components/Filter.scss';
import { Divider, Slider, Checkbox, FormControlLabel } from '@material-ui/core';
import { CheckBoxOutlineBlank, Check } from '@material-ui/icons';

const Filter = () => {
  return (
    <section className='filter__container--fixed col-12 col-sm-3'>
      <h5 className='filter__title'>¿Como te gusta tu postre?</h5>
      <div className='widget price'>
        <h6 className='filter__subtitle'>Precios</h6>
        <Slider
          //value='100' //{value}
          //onChange={handleChange}
          valueLabelDisplay='auto'
          aria-labelledby='range-slider'
          getAriaValueText={() => 'Texto'} //{valuetext}
        />
      </div>
      <Divider />
      <div className='filter__container'>
        <h6 className='filter__subtitle'>Presentación</h6>

        <FormControlLabel
          value='cupcake'
          control={
            <Checkbox
              color='secondary'
              icon={<CheckBoxOutlineBlank fontSize='small' />}
              checkedIcon={<Check fontSize='small' />}
              value='checkedI'
            />
          }
          label='Cupcakes'
          labelPlacement='end'
        />
        <FormControlLabel
          value='muffin'
          control={
            <Checkbox
              color='secondary'
              icon={<CheckBoxOutlineBlank fontSize='small' />}
              checkedIcon={<Check fontSize='small' />}
              value='checkedI'
            />
          }
          label='Muffin'
          labelPlacement='end'
        />
        <FormControlLabel
          value='pasteles'
          control={
            <Checkbox
              color='secondary'
              icon={<CheckBoxOutlineBlank fontSize='small' />}
              checkedIcon={<Check fontSize='small' />}
              value='checkedI'
            />
          }
          label='Pasteles'
          labelPlacement='end'
        />
      </div>
      <Divider />
      <div className='filter__container'>
        <h6 className='filter__subtitle'>Sabor</h6>

        <FormControlLabel
          value='fresas'
          control={
            <Checkbox
              color='secondary'
              icon={<CheckBoxOutlineBlank fontSize='small' />}
              checkedIcon={<Check fontSize='small' />}
              value='checkedI'
            />
          }
          label='Fresas'
          labelPlacement='end'
        />
        <FormControlLabel
          value='red-velvet'
          control={
            <Checkbox
              color='secondary'
              icon={<CheckBoxOutlineBlank fontSize='small' />}
              checkedIcon={<Check fontSize='small' />}
              value='checkedI'
            />
          }
          label='Red Velvet'
          labelPlacement='end'
        />
        <FormControlLabel
          value='chai-latte'
          control={
            <Checkbox
              color='secondary'
              icon={<CheckBoxOutlineBlank fontSize='small' />}
              checkedIcon={<Check fontSize='small' />}
              value='checkedI'
            />
          }
          label='Chai Latte'
          labelPlacement='end'
        />
        <FormControlLabel
          value='unicornio'
          control={
            <Checkbox
              color='secondary'
              icon={<CheckBoxOutlineBlank fontSize='small' />}
              checkedIcon={<Check fontSize='small' />}
              value='checkedI'
            />
          }
          label='Unicornio'
          labelPlacement='end'
        />
      </div>
    </section>
  );
};

export default Filter;
