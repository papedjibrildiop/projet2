<!DOCTYPE html>
<html>
<head>
    <title>Task List</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <input type="text" id="tache" placeholder="Enter a task">
    <button onclick="ajouterTache()">Add Task</button>
    <ul id="taskList">
        <!-- Existing tasks will be listed here -->
    </ul>

    <script>
        function ajouterTache() {
            const tache = document.getElementById('tache');
            const taskList = document.getElementById('taskList');

            const newTask = document.createElement('li');
            newTask.innerText = tache.value;
            $(newTask).on('swiperight', function() {
                if (this.classList.contains('termine')) {
                    this.classList.remove('termine');
                } else {
                    this.classList.add('termine');
                }
            });
            $(newTask).on('swipeleft', function() {
                if (this.classList.contains('termine')) {
                    taskList.appendChild(this);
                } else {
                    this.classList.add('termine');
                    taskList.appendChild(this);
                }
            });
            taskList.appendChild(newTask);
            tache.value = '';
            tache.focus();
        }
    </script>
</body>
</html>
