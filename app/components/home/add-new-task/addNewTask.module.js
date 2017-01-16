'use strict';

function AddNewTaskController (Task) {
	let vm = this;

	vm.mesWarning = '';

	vm.add = function () {
		if ( vm.txtNewTask ) {
			vm.mesWarning = '';
			Task.add(vm.txtNewTask);
			vm.txtNewTask = '';
		}
		else {
			vm.mesWarning = "* Please insert name of task."
		}
	}
}

angular
	.module('homeModule')
	.component('addNewTask', {
		controller: AddNewTaskController,
		template: `
				<input type='text' ng-model='$ctrl.txtNewTask'>
				<button class='btn btn-sm btn-success' ng-click="$ctrl.add()">Add</button>
				<span class='mesWarning'>{{$ctrl.mesWarning}}</span>
		`
	})