import { Component, OnInit } from '@angular/core';
import { calculateSide } from '../services/resultscalculator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor() { }

    // Create properties for that can bind to you form fields
    lgSide: string = '';
    smSide: string = '';
  
    // Create properties that will help form interact with the user
    formError: string;
  
    smSideError: string;
    lgSideError: string;
  
    submitForm() {
      // Put validation logic here
      const requiredErrorMessage = 'This field is required';
  
      // Clear all previous errors
      this.smSide = '';
      this.lgSide = '';
  
      let errorCount = 0;
  
      // Ensure all fields are not blank
      if (this.smSide === '') {
        this.smSideError = requiredErrorMessage;
        errorCount++;
      }
  
      // Email validation
      if (this.lgSide === '') {
        this.lgSideError = requiredErrorMessage;
        errorCount++;
      }
  
      console.log(`There are ${errorCount} error(s) in the form!`);
  
      if (errorCount === 0) {
        console.log('Submit the form!');
        console.log(this);
        // Write code that will send the form data to where you need it to go.
      }
  
    }
 
  ngOnInit(): void {
  }
}
