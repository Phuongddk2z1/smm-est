import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add-funds-page',
  templateUrl: './add-funds-page.component.html',
  styleUrls: ['./add-funds-page.component.scss']
})
export class AddFundsPageComponent implements OnInit {

  validateForm!: UntypedFormGroup;
  dataSet: any = [];

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      method: ['male'],
      instruction: [null],
      amount: [null],
    });
  }

  submitForm(): void {
    console.log('1111');
  }

}
