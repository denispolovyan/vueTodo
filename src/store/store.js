import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      tasks: [],
      results: "0",
    };
  },
  getters: {
    getTasksLength(state) {
      return state.tasks.length;
    },
    getTasks(state) {
      return state.tasks;
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

    //  setPreviewTask(state, value) {
    //    state.previewTasks.push(value);
    //  },
    //  deletePreviewTask(state, id) {
    //    state.previewTasks = state.previewTasks.filter((t) => t.id != id);
    //  },

    //  setCompletedTask(state, value) {
    //    if (value.stage == "done") {
    //      state.completedTasks.push(value);
    //    }
    //  },
    //  deleteCompletedTask(state, id) {
    //    state.completedTasks = state.completedTaskss.filter((t) => t.id != id);
    //  },

    //  setUncompletedTask(state, value) {
    //    if (value.stage != "done") {
    //      state.uncompletedTasks.push(value);
    //    }
    //  },
    //  deleteUncompletedTask(state, id) {
    //    state.uncompletedTasks = state.uncompletedTasks.filter((t) => t.id != id);
    //  },

    deleteTask(state, id) {
      let deletedTask = state.tasks.filter((t) => t.id == id);
      state.tasks = state.tasks.filter((t) => t.id != id);
      this.commit("deletePreviewTask", deletedTask);
      this.commit("deleteCompletedTask", deletedTask);
      this.commit("deleteUncompletedTask", deletedTask);
    },
    completeTask(state, id) {
      let completedTask = state.tasks.filter((t) => t.id == id)[0];
      if (completedTask.stage != "done") {
        completedTask.stage = "done";
      }
    },
  },
});
