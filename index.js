var app = new Vue({
  el: '#app',
  data: {
    message: 'Write your name down below',
    input: '',
    visible: false,
    img: 'https://preview.redd.it/x1tiwi3do3q71.jpg?width=640&crop=smart&auto=webp&s=16f12e2106bb0063213aa085f8800112f9645472',
  },
  methods: {
    imgShow: function () {
      this.visible = !this.visible
    },
    inputShow: function () {
      this.message = this.input
    },
  },
})
