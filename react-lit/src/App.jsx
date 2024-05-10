
import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    'JavaScript',
    'Rust',
    'Python',
  ]);

  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (!newItem.length) return;
    setItems([...items, newItem ]);
  };

  const onInputChange = (event) => {
    const { value } = event.target;
    setNewItem(value);
  };

  const onItemsChanged = (event) => {
    const { items: newItems } = event.detail;
    setItems(newItems)
  };

  const ref = React.useRef();
  React.useLayoutEffect(() => {
    const { current } = ref;
    const handleChange = customEvent => onItemsChanged(customEvent);
    current.addEventListener('items-changed', handleChange);
    return () => current.removeEventListener('items-changed', handleChange);
  }, [ref]);

  return (
    <>
      <div>
        <div className="form">
          <input className="form__input" type="text" onInput={onInputChange}></input>
          <button className="form__btn" onClick={addItem}>Add from React</button>
        </div>
        <hr />

        <lit-items-renderer
          ref={ref}
          items={JSON.stringify(items)}
          on-items-changed={onItemsChanged}>
        </lit-items-renderer>
      </div>
    </>
  )
}

export default App;
