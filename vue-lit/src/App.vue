<script setup>
import { ref } from 'vue';

const items = ref([
  'JavaScript',
  'Rust',
  'Python',
]);

const newItem = ref('');

const addItem = () => {
  if (!newItem.value.length) return;
  items.value = [...items.value, newItem.value];
};

const onItemsChanged = (event) => {
  const { items: newItems } = event.detail;
  items.value = newItems;
};
</script>

<template>
  <div>
    <div class="form">
      <input class="form__input" type="text" v-model="newItem">
      <button class="form__btn" @click="addItem">Add from Vue</button>
    </div>

    <hr>

    <lit-items-renderer
      :items="items"
      @items-changed="onItemsChanged">
    </lit-items-renderer>
  </div>
</template>

<style scoped>
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
