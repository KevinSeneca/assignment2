import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  constructor() { }

  @Input() resultAnswer: string = '';
  
  ngOnInit(): void { 
  }

}
