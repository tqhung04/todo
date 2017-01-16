'use strict';

angular
	.module('myApp')
	.factory('Task', function() {

		var id = 0;

		var tasks = [
			{
				id: id,
				name: 'Remove this',
				status: 1
			},
		];

		var services = {
			getAllTasks: getAllTasks,
			editTask: editTask,
			deleteTask: deleteTask,
			add: add,
		};

		function getAllTasks () {
			return tasks;
		}

		function editTask (id, name, status) {
			angular.forEach(tasks, function(val, key) {
				if ( val.id == id ) {
					val.name = name;
					val.status = status;
					return "Edited Success"
				}
				else {
					return "Failed"
				}
			});
		}

		function deleteTask (id) {
			angular.forEach(tasks, function(val, key) {
				if ( val.id == id ) {
					tasks.splice(key,1);
					return "Deleted task Success"
				}
				else {
					return "Failed"
				}
			});
		}

		function add (name) {
			id += 1;
			tasks.push({
				id: id,
				name: name,
				status: 1
			});
			return "Add Task Successed."
		}

		return services;
	})