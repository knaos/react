const tasksKey = 'TASKS';

export default class TasksAPI {

    static getAll() {
        let tasks = JSON.parse(localStorage.getItem(tasksKey));

        if (!Array.isArray(tasks)) {
            tasks = []
            TasksAPI.save(tasks);
        }

        return tasks;
    }

    static save(tasks) {
        localStorage.setItem(tasksKey, JSON.stringify(tasks));
        return tasks;
    }

    static getById(id) {
        id = Number(id);

        return TasksAPI.getAll().find(t => t.id == id);
    }

    static add(task) {
        if (!task) throw 'Invalid task';

        task.id = Math.floor(Math.random() * 10001) + 1;

        TasksAPI.update(task);
    }

    static update(task) {
        debugger;
        let tasks = TasksAPI.getAll();
        tasks = tasks.filter(t => t.id !== task.id);
        tasks.push(task);
        TasksAPI.save(tasks);

        return task;
    }

    static delete(id) {
        let tasks = TasksAPI.getAll().filter(t => t.id !== id);
        TasksAPI.save(tasks);
    }
}