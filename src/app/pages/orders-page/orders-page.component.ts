import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  }
  dataLog = [
    {date: 'January 14', title: 'Now Available - Exclusive:',  option: 'Embed'},
    {date: 'January 14', title: 'Now Available - Exclusive:',  option: 'Embed'},
    {date: 'January 14', title: 'Now Available - Exclusive:',  option: 'Embed'},
    {date: 'January 14', title: 'Now Available - Exclusive:',  option: 'Embed'},
  ]
  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      category: ['male'],
      service: ['male'],
      description: [null],
      link: [null],
      quantity: [null],
      dripFeed: [false],
      averageTime: [null],
      charge: [null],
    });
  }

  submitForm(): void {
    console.log('1111');

  }
}
