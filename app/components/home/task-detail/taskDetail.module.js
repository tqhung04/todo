'use strict';

function TaskDetailController (Task, $window) {
	console.log('TaskDetailController loaded.');

	var vm = this;

	vm.$onInit = function () {
		vm.checkedTask = false;
	}

	vm.edit = function () {	
		vm.checkedTask = false;

		if ( vm.txtTask ) {
			Task.editTask(vm.task.id, vm.txtTask, vm.task.status);
		}
	}

	vm.delete = function () {
		Task.deleteTask(vm.task.id)
	}

	vm.selectedBox = function () {
		if ( vm.cb == `active` )
			Task.editTask(vm.task.id, vm.task.name, 2);
		else
			Task.editTask(vm.task.id, vm.task.name, 1);
	}

	vm.$onChanges = function () {
		if ( vm.selected == true ) {
			vm.cb = `active`;
			Task.editTask(vm.task.id, vm.task.name, 2);
			console.log(vm.task)
		}
		else {
			vm.cb = `noactive`;
			Task.editTask(vm.task.id, vm.task.name, 1);
			console.log(vm.task)
		}
	}
}

angular
	.module('homeModule')
	.component('taskDetail', {
		templateUrl: 'app/components/home/task-detail/taskDetail.template.html',
		controller: TaskDetailController,
		bindings: {
			task: '<',
			track: '<',
			selected: '<'
		}
	})