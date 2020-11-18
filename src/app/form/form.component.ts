import { Component, OnInit } from '@angular/core';
import { calculateSide } from '../services/resultscalculator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor() { }

  // Properties that bind to form fields
  largeSide: string = '';
  smallSide: string = '';

  myResult: number = 0;
  myResultString: string = '';
 //  resultAnswer: number;

  // Create properties that will help form interact with the user
  formError: string;

  smallSideError: string;
  largeSideError: string;

  reset() {
    // Clear all previous errors
    this.smallSideError = '';
    this.largeSideError = '';
    // Clear all previous values
    this.smallSide = '';
    this.largeSide = '';
    this.myResultString = '';
    this.myResult = 0;
  }

  submitForm() {
    const requiredErrorMessage = 'This field is required.';
    const numberRequiredErrorMessage = 'A number is required.';

    // Clear all previous errors
    this.smallSideError = '';
    this.largeSideError = '';

    let errorCount = 0;

    // Ensure all fields are not blank
    if (this.smallSide === '') {
      this.smallSideError = requiredErrorMessage;
      errorCount++;
    }
        
    // Email validation
    if (this.largeSide === '') {
      this.largeSideError = requiredErrorMessage;
      errorCount++;
    }

    if (Number(this.largeSide) < Number(this.smallSide)) {
      this.largeSideError = "Large side must be larger than small side.";
      errorCount++;
    }

    if (isNaN(Number(this.largeSide))) {
      this.largeSideError = numberRequiredErrorMessage;
      errorCount++;
    }

    if (isNaN(Number(this.smallSide))) {
      this.smallSideError = numberRequiredErrorMessage;
      errorCount++;
    }

    console.log(`There are ${errorCount} error(s) in the form!`);

    console.log(this.smallSide);
    console.log(this.largeSide);

    if (errorCount === 0) {
      console.log(calculateSide(Number(this.smallSide), Number(this.largeSide)));  /* something wrong here, function is not available to this component */
      this.myResult = calculateSide(Number(this.smallSide), Number(this.largeSide));
      this.myResultString = calculateSide(Number(this.smallSide), Number(this.largeSide)).toString();
    }
  }

  ngOnInit(): void {
  }
  
}
