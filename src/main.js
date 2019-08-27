import 'todomvc-app-css/index.css'

import Vue from 'vue'

new Vue({
    el: '.todoapp',
    data: {
        msg: '',
        title: '待办清单',
        newTodo: ''
    }
})

// new Vue({
//     el: '.info'
// })