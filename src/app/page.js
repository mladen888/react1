import React from 'react';
import HelloWorld from './components/HelloWorld.js';
import Greeting from './components/Greetings.js';
import Counter from './components/Counter.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ItemList from './components/ItemList.js'
import ToggleText from './components/ToggleText.js';
import ToggleButton from './components/ToggleButton.js'
import Message from './components/Message.js'
import Welcome from './components/Welcome.js'
import CollorChange from './components/ColorChange.js'
import UserProfile from './components/UserProfile.js';
import ToDoList from './components/TodoList.js'
import FormValidation from './components/FormValidation.js'
import Accordion from './components/Accordion.js'
const hello = () => {
  const name ='Miladin'
  return (
    <div>
      <Header/>
      <HelloWorld />
      <Greeting name={name}/>
      <Counter/>
      <ItemList/>
      <Footer/>
      <ToggleText/>
      <ToggleButton/>
      <Message/>
      <Welcome/>
      <CollorChange/>
      <UserProfile/>
      <ToDoList/>
      <FormValidation/>
      <Accordion/>
    </div>
  );
};

export default hello;
