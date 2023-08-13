<template>
  <div class="form">
    <div class="container">
      <div class="form__body">
        <div class="form__title">Add new todo</div>
        <div class="form__fields">
          <form name="taskForm" class="form__name">
            <input
              @click="inputError = false"
              :class="{
                inputError: inputError,
              }"
              v-model="title"
              maxlength="25"
              placeholder="Task"
              tabindex="1"
              type="text"
            />
          </form>
          <div class="form__text">
            <textarea
              @click="inputError = false"
              :class="{
                inputError: inputError,
              }"
              v-model="text"
              maxlength="300"
              placeholder="More about task"
              tabindex="2"
              type="text"
            ></textarea>
          </div>
          <div class="buttons">
            <button @click.prevent="createTodo" class="buttons__submit button">
              submit
            </button>
            <button type="reset" class="buttons__reset button">reset</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: "",
      text: "",
      inputError: false,
    };
  },
  methods: {
    handleKeydown(e) {
      if (e.key === "Enter") {
        this.createTodo();
        document.activeElement.blur();
      }
    },
    createTodo() {
      let id = this.$store.getters.getTasksLength + 1;
      let task = {
        title: this.title,
        text: this.text,
        id: id,
        stage: "undone",
      };

      if (task.title && task.text) {
        this.$store.commit("setTask", task);
        this.$store.commit("setFilteredTasks");
        this.title = "";
        this.text = "";
        this.showResults();
        localStorage.setItem(
          "tasks",
          JSON.stringify(this.$store.getters.getTasks)
        );
      } else {
        this.inputError = true;
      }
    },
    showResults() {
      let allTasks = this.$store.getters.getTasks.length;
      let completedTasks = this.$store.getters.getTasks.filter(
        (t) => t.stage == "done"
      ).length;

      if (!completedTasks) {
        this.$store.commit("setResults", 0);
      } else {
        this.$store.commit(
          "setResults",
          (completedTasks / allTasks).toFixed(2)
        );
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 40px;
  margin-top: -20px;
}
.form__body {
  margin: 20px auto;
  max-width: 300px;
  text-align: center;
}
.form__title {
  background: #0555e964;
  padding: 10px 0px;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}
.form__name {
  margin-bottom: 10px;
  input {
    width: 300px;
    height: 30px;
    padding: 0px 10px;
    transition-duration: 0.5s;
  }
  input:focus {
    background: rgba(243, 225, 26, 0.441);
  }
}
.form__text {
  margin-bottom: 10px;
  textarea {
    max-width: 300px;
    min-width: 300px;
    max-height: 150px;
    min-height: 150px;
    padding: 10px;
    transition-duration: 0.5s;
    resize: none;
  }
  textarea:focus {
    background: rgba(243, 225, 26, 0.441);
  }
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.button {
  flex: 0 1 48%;
  height: 30px;
  text-transform: uppercase;
  font-weight: 700;
  color: #000;
}
.buttons__submit {
  background: #15d54268;
  transition-duration: 0.5s;
}
.buttons__submit:hover {
  background: #15d542e5;
}
.buttons__reset {
  background: #de343474;
  transition-duration: 0.5s;
}
.buttons__reset:hover {
  background: #de3434cf;
}
.inputError {
  background: #ff00002e;
  font-weight: 700;
}
@media (max-width: 500px) {
  .form__body {
    max-width: 260px;
  }
  .form__name {
    input {
      width: 260px;
    }
  }
  .form__text {
    textarea {
      max-width: 260px;
      min-width: 260px;
    }
  }
}
</style>
