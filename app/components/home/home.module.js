'use strict';

let HomeController = () => {
	console.log('HomeController loaded.')
}

angular
	.module('homeModule', [])
	.component('home', {
		controller: HomeController,
		template: 	`<h1 class="title">Todo Application</h1>
					<list-task></list-task>`
	})