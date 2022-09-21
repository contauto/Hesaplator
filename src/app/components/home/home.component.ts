import { Router } from '@angular/router';
import { ValidationService } from './../../services/validation.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user1Name: string
  user2Name: string
  user1NumberOfItems: number;
  user2NumberOfItems: number;
  numberOfCommonItems: number;
  loading: boolean;
  numberOfItemForm: FormGroup



  constructor(public validationService: ValidationService, private router: Router) { }

  ngOnInit() {


    const {required,pattern } = Validators

    this.numberOfItemForm = new FormGroup({
      user1NumberOfItems: new FormControl("", [required, pattern("^[0-9]*$")]),
      user2NumberOfItems: new FormControl("", [required, pattern("^[0-9]*$")]),
      numberOfCommonItems: new FormControl("",[required, pattern("^[0-9]*$")]),
      user1Name: new FormControl("", required),
      user2Name: new FormControl("", required)
    })

  }

  get getControls() {
    return this.numberOfItemForm.controls
  }

  onSubmit() {
    const {value} = this.numberOfItemForm
    const {valid}=this.numberOfItemForm
    if (valid) {
      this.loading = true;
      this.router.navigate(['/cart'], { queryParams: { commoncart: value.numberOfCommonItems, username1: value.user1Name, cart1: value.user1NumberOfItems, username2: value.user2Name, cart2: value.user2NumberOfItems, } })
    }
  }

}
