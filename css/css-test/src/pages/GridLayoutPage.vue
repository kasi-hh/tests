<template>
  <q-page class="">
    <h2>Grid Layout</h2>
    <div class="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
    </div>
    <div class="centered">
      <div class="centered-item">Centered</div>
    </div>
    <div class="buttons">
      <div class="button-group">
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
      </div>
    </div>
    <h4>Testgrid</h4>
    <div class="test-grid">
      <div v-for="i in 9" :key="i" :class="'test-grid-item test-grid-item-'+i">{{ i }}</div>
    </div>
    <h3>Info</h3>
    <p>
      <a href="https://caniuse.com/css-grid" target="_blank">Can i use CSS Grid</a><br>
      <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks Complete Guide to Grid</a><br>
      <a href="https://kulturbanause.de/blog/css-grid-layout-module/" target="_blank">CSS Grid Layout Module</a><br>
    </p>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid red;
  height: 600px;
  display: grid;
  gap: 20px 10px;
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}

.item {
  border: 1px solid #ccc;
  grid-column-gap: 30px;
}

.item-1 {
  grid-area: header;
}

.item-2 {
  grid-area: main;
}

.item-3 {
  grid-area: sidebar;
}

.item-4 {
  grid-area: footer;
}

.centered {
  border: 1px solid red;
  height: 200px;
  display: grid;
  place-items: center right;
}

.centered-item {
  border: 1px solid blue;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: #21BA45;
  height: 40px;
}

.buttons {
  display: grid;
  place-items: center right;
  border: 1px solid #000;
  height: 100px;
  .button-group {
    margin-right: 30px;
    button {
      margin-left: 10px;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 10px;
      background-color: #21BA45;
      color: white;
    }
  }
}
.test-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  .test-grid-item {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    background-color: #21BA45;
    color: white;
  }
  .test-grid-item-1 {
    background-color: #121212;
    grid-column: 1;
    grid-row: 2;
  }
  .test-grid-item-2 {
    background-color: #121212;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
}
</style>
