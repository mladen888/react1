import React from 'react';

const ItemList = () => {
    const list = ['Item 1', 'Item 2', 'Item 3']
    const listItems = list.map(e =><li>{e}</li>)
  return (
    <ul>{listItems}</ul>
  );
};

export default ItemList