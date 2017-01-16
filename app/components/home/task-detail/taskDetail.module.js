'use strict';

function TaskDetailController (Task) {
	console.log('TaskDetailController loaded.');

	var vm = this;

	vm.$onInit = function () {
		vm.checkedTask = false;
		console.log(vm.selected)
	}

	vm.edit = function () {	
		vm.checkedTask = false;

		if ( vm.txtTask ) {
			Task.editTask(vm.task.id, vm.txtTask, vm.task.status);
			console.log(vm.txtTask)	
		}
	}

	vm.delete = function () {
		console.log('delete')
		Task.deleteTask(vm.task.id)
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