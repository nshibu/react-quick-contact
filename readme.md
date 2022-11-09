![react-quick-contact](https://repository-images.githubusercontent.com/562863532/f9be9670-1d1f-4a7e-b50e-c0eb98c42100)
<p align="center"><a href='https://www.npmjs.com/package/react-quick-contact'> NPM</a> | <a href='https://react-quick-contact.shibu.dev/'> Demo</a></p>

# react-quick-contact

react-quick-contact - is a simple floaing contact widget. It allows us to easily integrae floaing contact button in website. So customers can just click to contact, no need to enter their email or phone for you to have it.
## Installation
npm
```
npm i react-quick-contact
```
Yarn
```
yarn add  react-quick-contact
```

## Futures

 - You can customize the location
 - You can change the button text and color
 - You can add profile picure, Designation, Description
 - You can add multiple buttons
 - You can add muliple custom components.
## API
|Propery| type|default | required | 
|--|--|--|--|
| buttonLabel | string | |true
|buttonIcon| ReactNode| | true
|buttonColor| string||true
|name|string|-|false
|designation|string|-|false
|message|string|-|false
|profileImageUrl|string|-|false
|alignment|'left' , 'right'||true
|buttons| Array<React.FC> , Array< ReactNode >| -|false

