function setCookie(name, value, days) {
  document.cookie = name + '=' + value + '; max-age=2592000; path=/';
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].startsWith(name + '=')) {
      return cookies[i].split('=')[1];
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + '=; max-age=0; path=/';
}

function todoListApp() {
  return {
    darkMode: false,
    dyslexia: false,
    newTask: '',
    tasks: [],

    init() {
      this.darkMode = localStorage.getItem('theme') === 'dark';
      this.dyslexia = localStorage.getItem('dyslexia') === 'true';
      this.tasks = JSON.parse(
        localStorage.getItem('tasks')
      ) || [];
    },

    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme');
      }
    },

    toggleDyslexia() {
      this.dyslexia = !this.dyslexia;
      localStorage.setItem(
        'dyslexia',
        this.dyslexia ? 'true' : 'false'
      );
    },

    addTask() {
      if (this.newTask.trim() === '') return;
      this.tasks.push({
        id: Date.now(),
        text: this.newTask.trim(),
        completed: false
      });

      this.newTask = '';
      this.saveTasks();
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.saveTasks();
    },

    saveTasks() {
      localStorage.setItem(
        'tasks',
        JSON.stringify(this.tasks)
      );
    },

    get completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    },

    get remainingTasks() {
      return this.tasks.filter(task => !task.completed).length;
    }
  };
}