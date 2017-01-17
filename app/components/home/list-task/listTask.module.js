'use strict';

function ListTaskController (Task) {
	console.log('ListTaskController loaded.');
	var vm = this;

	vm.$onInit = function () {
		vm.tasks = Task.getAllTasks();

		vm.selectedAll = false;
	}

	vm.deleteSelectedTasks = function () {
		Task.deleteSelectedTasks();
	}
}

angular
	.module('homeModule')
	.component('listTask', {
		templateUrl: 'app/components/home/list-task/listTask.template.html',
		controller: ListTaskController,
	})