<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Todo App which are using Vue.js 2 & Firebase</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Task</h3>
      </div>
      <div class="panel-body">
         <form id="form" v-on:submit.prevent="addTask">
          <div class="form-group">
            <label for="taskName">Task Name:</label>
            <input type="text" id="taskName" class="form-control" v-model="newTask.name">
          </div>
          <div class="form-group">
          <input type="submit" class="btn btn-primary" value="Add Task">
          </div>
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Todo List</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in tasks">
              <td><input type="checkbox" class="toggle" v-model="task.completed"></input></td>
              <td><span :class="{completed: task.completed}">{{task.name}}</span></td>
              <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeTask(task)"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyASq7i5l2ZZ_D0QInJoyVnmjhho6-bCa98",
    authDomain: "todoappsample-a3022.firebaseapp.com",
    databaseURL: "https://todoappsample-a3022.firebaseio.com",
    storageBucket: "todoappsample-a3022.appspot.com",
    messagingSenderId: "362220190592"
  };

let app = Firebase.initializeApp(config)
let db = app.database()
let tasksRef = db.ref('tasks')

export default {
  name: 'todo',
  
  firebase: {
    tasks: tasksRef
  },
  
  data () {
    return {
      title: 'Todo List',
      newTask: {
          name: '',
          completed: false
      },
      mock_tasks: [
        {name: 'Buy new Macbook Pro', completed: false},
        {name: 'Pick up the kid', completed: true},
        {name: 'Buy new iPhone', completed: false},
        {name: 'Email to HR', completed: false},
        {name: 'Create an account', completed: false}
      ]
    }
  },
  // define methods
  methods: {
            addTask: function () {
                console.log('Add');
                tasksRef.push(this.newTask);
                this.newTask.name = '';
                },
                removeTask: function (task) {
                    tasksRef.child(task['.key']).remove();
                }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td, th {
    text-align: center;
}
.completed {
    text-decoration: line-through;
}
</style>
