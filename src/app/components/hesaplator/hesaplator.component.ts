import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-hesaplator',
  templateUrl: './hesaplator.component.html',
  styleUrls: ['./hesaplator.component.css']
})
export class HesaplatorComponent implements OnInit {
  user1debt: number = 0
  user2debt: number = 0
  commondebt: number = 0
  user1andcommondebt: number = 0
  user2andcommondebt: number = 0
  numberOfCommonItems: number
  user1Name: string
  user2Name: string
  user1NumberOfItems: number
  user2NumberOfItems: number

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, public validationService: ValidationService) {
    this.numberOfCommonItems = Number(this.activatedRoute.snapshot.queryParamMap.get('commoncart'))
    this.user1NumberOfItems = Number(this.activatedRoute.snapshot.queryParamMap.get('cart1'))
    this.user2NumberOfItems = Number(this.activatedRoute.snapshot.queryParamMap.get('cart2'))
    this.user1Name = String(this.activatedRoute.snapshot.queryParamMap.get('username1'))
    this.user2Name = String(this.activatedRoute.snapshot.queryParamMap.get('username2'))
  }

  form1 = this.fb.group({
    isim: this.fb.control([]),
    fiyat: this.fb.control([]),
    sepet1: this.fb.array([])
  });
  form2 = this.fb.group({
    isim: this.fb.control([]),
    fiyat: this.fb.control([]),
    sepet2: this.fb.array([])
  });
  formortak = this.fb.group({
    isim: this.fb.control([]),
    fiyat: this.fb.control([]),
    sepetortak: this.fb.array([])
  });

  ngOnInit(): void {
    {
      for (let index = 0; index < this.user1NumberOfItems; index++) {

        const form1 = this.fb.group({
          fiyat: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
          isim: ['',]
        });
        this.sepet1.push(form1);

      }

      for (let index = 0; index < this.user2NumberOfItems; index++) {

        const form2 = this.fb.group({
          fiyat: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
          isim: ['',]
        });
        this.sepet2.push(form2);

      }

      for (let index = 0; index < this.numberOfCommonItems; index++) {

        const formortak = this.fb.group({
          fiyat: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
          isim: ['',]
        });
        this.sepetortak.push(formortak);

      }

    }
  }
  get sepet1() {
    return this.form1.controls["sepet1"] as FormArray;
  }

  get getControls1() {
    return this.form1.controls;
  }
  get sepet2() {
    return this.form2.controls["sepet2"] as FormArray;
  }

  get getControls2() {
    return this.form2.controls;
  }
  get sepetortak() {
    return this.formortak.controls["sepetortak"] as FormArray;
  }

  get getControlsortak() {
    return this.formortak.controls;
  }




  addDebt() {
  this.user1debt = 0
  this.user2debt= 0
  this.commondebt= 0
  this.user1andcommondebt= 0
  this.user2andcommondebt = 0
    if (this.getControls1.sepet1.valid) {

      for (let index = 0; index < this.user1NumberOfItems; index++) {
        this.user1debt = this.user1debt + (this.sepet1.value[index].fiyat)
      }


    }
    if (this.getControls2.sepet2.valid) {

      for (let index = 0; index < this.user2NumberOfItems; index++) {
        this.user2debt = this.user2debt + (this.sepet2.value[index].fiyat)
      }


    }
    if (this.getControlsortak.sepetortak.valid) {
      this.user1andcommondebt=this.user1debt
      this.user2andcommondebt=this.user2debt
      for (let index = 0; index < this.numberOfCommonItems; index++) {
        this.user1andcommondebt = this.user1andcommondebt + (this.sepetortak.value[index].fiyat)/2
        this.user2andcommondebt = this.user2andcommondebt + (this.sepetortak.value[index].fiyat)/2
      }


    }
    window.scrollTo(0, 0);
  }
}
