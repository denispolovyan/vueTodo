import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      filteredTasks: [],
      tasks: [],
      results: "0",
      filter: "",
      stage: "",
    };
  },
  getters: {
    getTasksLength(state) {
      return state.tasks.length;
    },
    getTasks(state) {
      return state.tasks;
    },
    getFilteredTasks(state) {
      return state.filteredTasks;
    },
    getResults(state) {
      return state.results;
    },
  },
  mutations: {
    setTask(state, value) {
      state.tasks.push(value);
    },
    setResults(state, value) {
      state.results = value;
    },
    pullFilteredTasks(state) {
      state.filteredTasks = state.tasks.filter((t) =>
        t.title.includes(state.filter)
      );
      if (state.stage) {
        state.filteredTasks = state.filteredTasks.filter(
          (t) => t.stage == state.stage
        );
      } else {
        return;
      }
    },
    setFilteredTasks(state, filter) {
      state.filter = filter;
      let filteredTasks = state.tasks.filter((t) => t.title.includes(filter));
      if (filter) {
        state.filteredTasks = filteredTasks;
        state.filteredTasks = state.filteredTasks.filter((t) => t.stage == state.stage);
      } else {
        state.filteredTasks = state.tasks.filter((t) => t.stage == state.stage);
      }
    },
    filterFilteredTasks(state, value) {
      state.stage = value;
      if (value) {
        let filteredTasks = state.tasks.filter((t) =>
          t.title.includes(state.filter)
        );
        state.filteredTasks = filteredTasks.filter((t) => t.stage == value);
      } else {
        state.filteredTasks = state.tasks.filter((t) =>
          t.title.includes(state.filter)
        );
      }
    },

    deleteTask(state, id) {
      state.filteredTasks = state.filteredTasks.filter((t) => t.id != id);
      state.tasks = state.tasks.filter((t) => t.id != id);
      state.filter = "";
    },
    completeTask(state, id) {
      let completedTask = state.tasks.filter((t) => t.id == id)[0];
      if (completedTask.stage != "done") {
        completedTask.stage = "done";
      }
    },
    changeTask(state, data) {
      let completedTask = state.tasks.filter((t) => t.id == data.id)[0];
      completedTask.title = data.title;
      completedTask.text = data.text;
    },
  },
});
