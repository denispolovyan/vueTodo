<template>
  <todo-list />
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
/* body{
	height: 100vh;
} */
#app {
  width: 100%;
  min-height: 100%;
}
.todoList {
  width: 100%;
  position: fixed;
  height: 100%; 
  overflow: auto;
}
.todoList__body {
  width: 100%;
  position: fixed;
  height: 100%; 
  overflow: auto;
}

.main__container {
  height: 100vh;
}
</style>
