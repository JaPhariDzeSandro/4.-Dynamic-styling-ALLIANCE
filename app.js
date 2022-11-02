const app = Vue.createApp({
  data() {
    return {
      classInput: "",
      buttonClick: false,
      color: "",
    };
  },
  methods: {
    addClass() {
      this.buttonClick = !this.buttonClick;
    },
  },
}).mount("#assignment");
