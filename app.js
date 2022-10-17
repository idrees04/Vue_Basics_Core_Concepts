
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      lastName: '',
      //   fullname: ''
    };
  },
  //when every name will chenge form data propery below name methad will executed
  // wather can accept new value and old value'
  //1 not used directly on template
  //2 Allows you to run any code in reaction to some changed data (e.g send Http request etc.)
  //3 use for any non-data update you want to make
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + '' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + '' + value;
    //   }
    // }
  },
  //in computed we can defind bunch of method.
  // and we can call as we call data properties
  //we use this method like properties like variable we dont use like function
  //we dont need to bind event to this method
  // we only use need to computer properties to output something
  //1 use with data binding
  //2 computed properties are only re-avaluated if one of their "used values" changed
  //3 use for data that depends on other data
  computed: {
    fullname() {
      console.log('Running agian...')
      if (this.name === "" || this.lastName == '') {
        return '';
      }
      return this.name + " " + this.lastName
    }
  },
  // in methods we can defind bunch of method.
  // and we can call with like this methods() 
  //we use like function
  //we need to bind event to this method 
  //1 use with event binding or data binding
  //2 Data binding: Methot is executed for every "re-Render" cycle of the component
  //3 use for events or data that really needs to be re-evaluated all the time
  methods: {
    outputFullname() {
      console.log('Running agian...')
      if (this.name === "") {
        return '';
      }
      return this.name + " " + "SecondName"
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      //     event.preventDefault();
      alert('Submitted');
    },
    resetInput() {
      // document.querySelector('input').value = '';
      this.name = '';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter--;
    },
    add5(num) {
      this.counter = this.counter + num;
    },
    reduce5(num) {
      this.counter = this.counter - num;
      //    this.counter--;
    },
    reset() {
      this.counter = 0;
    }
  },

});

app.mount('#events');
