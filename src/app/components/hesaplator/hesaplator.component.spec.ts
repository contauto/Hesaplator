/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HesaplatorComponent } from './hesaplator.component';

describe('HesaplatorComponent', () => {
  let component: HesaplatorComponent;
  let fixture: ComponentFixture<HesaplatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesaplatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesaplatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
