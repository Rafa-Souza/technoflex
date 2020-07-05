<template>
  <div class="hello">
    <h1>Welcome</h1>
    <div class="container">
      <div class="send-data">
        <h2>Send Data</h2>
        <p>Type the data you want to send to your CLP</p>
        <div class="send-input-container">
          <textarea id="send-data-input" type="text" v-model="message"></textarea>
          <button class="send-data-button" @click="handleSubmit">
            Send!
          </button>
        </div>
      </div>
      <div class="receive-data">
        <h2>Receive Data</h2>
        <button class="receive-data-button">
          Check for data from CLP!
        </button>
        <div :class="{ hasData: hasDataFromCLP }">
          {{ dataFromCLP }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  data: function() {
    return  {
      dataFromCLP: '',
      message: ''
    }
  },
  computed: {
    hasDataFromCLP: function () {
      return !!this.dataFromCLP;
    }
  },
  methods: {
    handleSubmit: function() {
      console.log(this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}
.send-data, .received-data {
  margin: 0 24px;
}
.send-data-button {
  margin-left: 12px;
}
.send-input-container {
  display: flex;
  justify-content: space-evenly;
}
.hasData{
  margin-top: 12px;
  background: #ddd;
  min-width: 100px;
  padding: 8px 16px;
}
</style>
