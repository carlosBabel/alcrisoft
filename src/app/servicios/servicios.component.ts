import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'app-servicios',
	templateUrl: './servicios.component.html',
	styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

	constructor() { }

	ngOnInit() {
    
		$(document).ready(function(){
			$('.carousel').carousel();
		});
  	}
}
