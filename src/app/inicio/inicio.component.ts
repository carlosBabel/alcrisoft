import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$(document).ready(function(){
			$('.slider').slider();
		});
		$(document).ready(function(){
			$('.modal').modal();
		});
  	}
}
