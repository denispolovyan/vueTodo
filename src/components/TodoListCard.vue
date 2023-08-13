<template>
  <div class="cards">
    <div
      class="card"
      v-for="card in $store.getters.getFilteredTasks"
      :key="card"
    >
      <div class="card__body">
        <div class="card__title">{{ card.title }}</div>
        <div v-if="selectedTask.id == card.id">
          <input
            @click="inputError = false"
            :class="{
              inputError: inputError,
            }"
            class="card__input input"
            maxlength="25"
            placeholder="Task"
            tabindex="1"
            v-model="changeTitle"
            type="text"
          />
        </div>
        <div class="card__task">
          {{ card.text }}
        </div>
        <div v-if="selectedTask.id == card.id">
          <textarea
            @click="inputError = false"
            :class="{
              inputError: inputError,
            }"
            class="card__textarea input"
            v-model="changeText"
            maxlength="300"
            placeholder="More about task"
            tabindex="2"
            type="text"
          ></textarea>
        </div>
        <div class="card__buttons">
          <div class="button button__change">
            <button @click="changeTask(card)">
              {{ changeCounter == 1 ? "change" : "save" }}
            </button>
          </div>
          <div class="button button__done">
            <button @click.prevent="completeTask(card.id)">done</button>
          </div>
          <div class="button button__delete">
            <button @click.prevent="deleteTask(card.id)">delete</button>
          </div>
        </div>
        <div class="card__img">
          <img src="../assets/img/card/redPin.png" alt="red pin" />
        </div>
        <div class="card__stage">
          <img
            v-if="card.stage == 'undone'"
            src="../assets/img/card/stage.png"
            alt="undone task"
          />
          <img v-else src="../assets/img/card/done.png" alt="done task" />

          <p>{{ card.stage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cards: [],
      changeStage: "change",
      selectedTask: "",
      changeTitle: "",
      changeText: "",
      changeCounter: 1,
      inputError: false,
    };
  },
  methods: {
    changeTask(task) {
      this.selectedTask = task;
      this.changeCounter++;
      let changedTask = {};
      if (this.changeCounter == 2) {
        this.changeTitle = task.title;
        this.changeText = task.text;
      }
      if (this.changeCounter == 3) {
        changedTask = {
          title: this.changeTitle,
          text: this.changeText,
          id: task.id,
        };
        if (changedTask.title && changedTask.text) {
          this.selectedTask = "";
          this.changeCounter = 1;
          this.$store.commit("changeTask", changedTask);
          this.changeText = "";
          this.changeTitle = "";
        } else {
          this.inputError = true;
          this.changeCounter--;
        }
      }
      localStorage.setItem(
        "tasks",
        JSON.stringify(this.$store.getters.getTasks)
      );
    },
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
      localStorage.setItem(
        "tasks",
        JSON.stringify(this.$store.getters.getTasks)
      );
      this.showResults();
    },
    completeTask(id) {
      this.$store.commit("completeTask", id);
      this.showResults();
      localStorage.setItem(
        "tasks",
        JSON.stringify(this.$store.getters.getTasks)
      );
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
  created() {
    let loadedTasks = localStorage.getItem("tasks");
    if (loadedTasks) {
      let parsedTasks = JSON.parse(loadedTasks);
      parsedTasks.forEach((task) => {
        this.$store.commit("setTask", task);
      });
      // this.$store.commit("setStage", "");
      this.$store.commit("setFilteredTasks");
      this.showResults();
    }
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  gap: 30px 20px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  position: relative;
  display: flex;
  flex: 0 0 31%;
  box-shadow: 5px 3px 3px rgb(175, 175, 175);
}
.card__body {
  width: 100%;
  padding: 40px 20px;
  background: url("../assets/img/card/background.jpg");
  display: flex;
  flex-direction: column;
}
.card__title {
  text-transform: none;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 24px;
}
.card__task {
  text-transform: none;
  margin-bottom: 10px;
  font-size: 16px;
  flex: 1 0 auto;
}
.card__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}
.button {
  button {
    color: #000;
    height: 30px;
    text-transform: uppercase;
    font-weight: 700;
  }
}
.button__change {
  flex: 0 1 45%;
  transition-duration: 0.5s;

  button {
    width: 100%;
    background: #dbd97944;
  }
  &:hover {
    background: #dbd979b0;
  }
}
.button__done {
  flex: 0 1 45%;
  transition-duration: 0.5s;

  button {
    width: 100%;
    background: #73e18e83;
  }
  &:hover {
    background: #73e18ec8;
  }
}
.button__delete {
  flex: 0 1 100%;
  transition-duration: 0.5s;

  button {
    width: 100%;
    background: #dd5c5c7d;
  }
  &:hover {
    background: #dd5c5ccd;
  }
}
.card__img {
  img {
    position: absolute;
    width: 40px;
    top: 0px;
    left: 0px;
  }
}
.card__stage {
  font-weight: 500;
  gap: 5px;
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
  }
}
.input {
  transition-duration: 0.5s;
  max-width: 100%;
  min-width: 100%;
  background: rgba(128, 128, 128, 0.327);
  margin-bottom: 10px;
}
.card__input {
  height: 30px;
  padding: 0px 5px;
  margin-bottom: 10px;
  font-size: 20px;
}
.card__textarea {
  min-height: 100px;
  max-height: 100px;
  padding: 5px;
  font-size: 16px;
  resize: none;
}
.inputError {
  background: #ff00002e;
  font-weight: 700;
}
@media (max-width: 700px) {
  .cards {
    justify-content: space-between;
  }
  .card {
    flex: 0 0 47%;
  }
}
@media (max-width: 500px) {
  .cards {
    justify-content: center;
  }
  .card {
    flex: 0 0 90%;
  }
}
@media (max-width: 500px) {
  .card {
    flex: 0 0 100%;
    justify-content: center;
  }
}
</style>
