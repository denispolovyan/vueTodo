import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      tasks: [],
    };
  },
  getters: {
    getTasksLength(state) {
      return state.tasks.length;
    },
    getTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setTask(state, value) {
      state.tasks.push(value);
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((t) => t.id != id);
    },
  },
});
