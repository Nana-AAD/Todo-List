export function saveData(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
  
export  function loadData() {
    const data = localStorage.getItem('projects');
    if (data) {
      return JSON.parse(data).map(project => {
        const p = new Project(project.name);
        p.todo = project.todo.map(todo => new Todo(todo.title, todo.description, new Date(todo.dueDate), todo.priority));
        return p;
      });
    }
    return [];
  }