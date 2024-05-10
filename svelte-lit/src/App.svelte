<script>
let items = [
  'JavaScript',
  'Rust',
  'Python',
];

let newItem = '';

const addItem = () => {
  if (!newItem.length) return;
  items = [...items, newItem];
};

const onInputChange = (event) => {
  const { value } = event.target;
  newItem = value;
};

const onItemsChanged = (event) => {
  const { items: newItems } = event.detail;
  items = newItems;
};
</script>

<main>
  <div>
    <div class="form">
      <input 
        class="form__input" 
        type="text" 
        value={newItem} 
        on:input={onInputChange}>
      <button 
        class="form__btn" 
        on:click={addItem}>
        Add from Svelte
      </button>
    </div>
    <hr>

    <lit-items-renderer
      items={items}
      on:items-changed={onItemsChanged}>
    </lit-items-renderer>
  </div>
</main>

<style>
.form {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
}

.form__input,
.form__btn {
  height: 40px;
}
</style>
