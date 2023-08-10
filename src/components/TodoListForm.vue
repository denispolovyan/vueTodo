<template>
  <div class="form">
    <div class="container">
      <div class="form__body">
        <div class="form__title">Add new todo</div>
        <form class="form__fields">
          <div class="form__name">
            <!-- <p>Task name</p> -->
            <input maxlength="45" placeholder="Task" tabindex="1" type="text" />
          </div>
          <div class="form__text">
            <!-- <p>Task body</p> -->
            <textarea
              maxlength="300"
              placeholder="More about task"
              tabindex="2"
              type="text"
            ></textarea>
          </div>
          <div class="buttons">
            <button type="submit" class="buttons__submit button">submit</button>
            <button type="reset" class="buttons__reset button">reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  border-bottom: 15px solid rgba(0, 0, 0, 0.299);
  margin-bottom: 40px;
  margin-top: -20px;
}
.form__body {
  margin: 20px auto;
  max-width: 290px;
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
  p {
    margin-bottom: 3px;
  }
  input {
    width: 290px;
    height: 30px;
    padding: 0px 10px;
  }
}
.form__text {
  margin-bottom: 10px;

  p {
    margin-bottom: 3px;
  }
  textarea {
    max-width: 290px;
    min-width: 290px;
    max-height: 150px;
    min-height: 150px;
    padding: 10px;
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
}
.buttons__submit {
  background: #15d54268;
  transition-duration: 1s;
}
.buttons__submit:hover {
  background: #15d542e5;
}
.buttons__reset {
  background: #de343474;
  transition-duration: 1s;
}
.buttons__reset:hover {
  background: #de3434e9;
}
</style>
