import axios from "axios"

export default {
  async getCLPMessage() {
    const res = await axios.get("http://localhost:3000/clp-message");
    return res.data;
  },
  async sendCLPMessage(message) {
    console.log(`sending message: ${message}`);
    const res = await axios.post("http://localhost:3000/clp-message/", {
      message: message
    });
    return res.data;
  }
}