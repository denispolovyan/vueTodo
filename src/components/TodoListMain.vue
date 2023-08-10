<template>
  <div class="main">
    <div class="container">
      <div class="main__body">
        <todo-list-form />
        <todo-list-card />
      </div>
    </div>
  </div>
</template>

<script>
import TodoListCard from "./TodoListCard.vue";
import TodoListForm from "./TodoListForm.vue";

export default {
  components: {
    TodoListCard,
    TodoListForm,
  },
};
</script>

<style lang="scss" scoped>
.main {
  font-family: "Assistant", sans-serif;
  margin: 40px 0px;
  text-transform: uppercase;
}
</style>
