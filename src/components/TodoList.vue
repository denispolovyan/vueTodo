<template>
  <div class="todoList">
    <div class="todoList__container">
      <header>
        <todo-list-header />
      </header>
		<main><todo-list-main></todo-list-main></main>
    </div>
  </div>
</template>

<script>
import TodoListHeader from "./TodoListHeader.vue";
import TodoListMain from "./TodoListMain.vue";

export default {
  components: {
    TodoListHeader,
    TodoListMain,
  },
};
</script>
