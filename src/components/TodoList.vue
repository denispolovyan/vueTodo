<template>
  <div class="todoList">
      <header>
        <todo-list-header />
      </header>
      <main><todo-list-main></todo-list-main></main>
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
/* fonts  */
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700;900&display=swap');

/* backgroung  */
.todoList {
  background: repeat top/100% url('../assets/img/background.jpg');
}

/* container  */
.container{
	max-width: 1030px;
	padding: 0px 15px;
	margin: 0px auto;
}
</style>
