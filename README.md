# eCommerkland - 2019

## Description

eCommerce demo developed based on [Platzi - Professional Javascript Career](https://platzi.com/clases/1711-escuela-de-javascript/22875-e-commerce/)

**_Developed from scratch_**

Based on different eCommerce such as:

- [Costco](costco.com.mx)
- [Amazon](amazon.com.mx)

---

## Installation

> ```
> npm install
> ```

## Run

> npm run start

---

## Package usage

- webpack
- babel
- eslint
- sass
- react

---

## Setup Environment

### Babel

> npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

### Webpack

> npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev

### Webpack Dev Server

> npm install --save-dev webpack-dev-server

### SASS

> npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

### ESLint

> npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

### File Loader

> npm install --save-dev file-loader

### JSON Server

> sudo npm install json-server -g
>
> > #### Run (as administrator)
> >
> > json-server jsonFile.json

### React Router Dom

> npm install react-router-dom --save

_Modify webpack.config.js_ in order to accept routes in **dev environment**

> devServer: {  
>  historyApiFallback: true,  
> },

### Material-UI

`npm install @material-ui/core`
`npm install @material-ui/icons`

- [Referencias](https://material-ui.com/es/getting-started/installation/)

### Configuracion Server Side

`npm i react-hot-loader babel-plugin-transform-object-assign babel-plugin-transform-class-properties`

### Sweet Alert

`npm install sweetalert --save`

### Git

#### Create a new brach

> git checkout -b feature/router-redux

### Others

- [Palette Colors](COLORS.md)
- [AdobeXD Mockup]()

---

## Contributors

- [Mauricio García](https://mau2099.dev)
- [Alexis Araujo](https://alexisaraujo.com/)
- [Alfredo Plata](https://github.com/alfredo15)

---

## License

This project was developed under [MIT License](License) only for educational porpuse.
