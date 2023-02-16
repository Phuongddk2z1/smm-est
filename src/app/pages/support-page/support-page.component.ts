import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup
} from '@angular/forms';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.scss'],
})
export class SupportPageComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  dataSet: any = [];

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      category: ['male'],
      subject: [null],
      attachment: [null],
      message: [null],
    });
  }

  submitForm(): void {
    console.log('1111');
  }
}
