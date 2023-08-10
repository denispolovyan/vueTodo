<template>
  <div class="todoList">
    <div class="todoList__body">
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

<style>
/* null style  */
@import url("../assets/css/nullstyle.css");
@import url("https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;700&display=swap");

/* fonts  */
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@700;900&display=swap");

/* backgroung  */
.todoList {
  background: url("../assets/img/background.jpg") repeat;
  background-size: 300px 280px;
}
.todoList__body {
	background-color: #5f5f5252;
}

/* container  */
.container {
  max-width: 1030px;
  padding: 0px 15px;
  margin: 0px auto;
}
</style>
