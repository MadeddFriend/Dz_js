const taskManager = {
	tasks: [],
	taskCount: 1,

	//Создание задачи
	addTask(title = 'task', priority = null) {
		//Проверяем приоритет, если он не задан
		if (priority === null) {
			if (this.tasks.length > 0) {
				priority = this.tasks.reduce((acc, task) => {
					acc = task.priority > acc ? task.priority + 1 : acc
					return acc
				}, 0)
			} else priority = 1
		}

		//Добавление задачи в массив и создание id
		this.tasks.push({
			title: String(title),
			id: this.taskCount++,
			// id: this.tasks.length > 0 ? this.tasks.length + 1 : 1,
			priority,
		})

		//Сортировка массива по приоритету
		this.tasks.sort((a, b) => {
			return b.priority - a.priority
		})
	},

	//Удаление задачи по ID
	deleteTask(taskId) {
		const index = this.tasks.findIndex(task => task.id === taskId)

		if (index !== -1) {
			this.tasks.splice(index, 1)
		} else console.log('Такого id не существует')
	},

	//Обновление задачи по ID
	upgradeTask(taskId, title = null, priority = null) {
		const task = this.tasks.find(task => task.id === taskId)
		if (task) {
			if (priority !== null) task.priority = priority
			if (title !== null) task.title = String(title)
			this.tasks.sort((a, b) => {
				return b.priority - a.priority
			})
		}
	},
}

taskManager.addTask('test1')
taskManager.addTask('test2')
taskManager.addTask('test3')
taskManager.addTask('test4', 10)
taskManager.addTask('test5')
taskManager.addTask()
taskManager.addTask()
taskManager.addTask()
taskManager.addTask()
taskManager.addTask()
taskManager.addTask()

taskManager.deleteTask(9)

taskManager.deleteTask(3)
taskManager.deleteTask(2)
taskManager.deleteTask(1)

taskManager.addTask()
taskManager.addTask()
taskManager.addTask()
taskManager.addTask()

taskManager.upgradeTask(2, 'upgrade test', 10)

console.log(taskManager.tasks)
