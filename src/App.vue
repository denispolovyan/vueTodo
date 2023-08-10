<template>
	<todo-list/>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  height: 100%;
}
.todoList {
  height: 100%;
}

.main__container {
  height: 100%;
}
</style>
