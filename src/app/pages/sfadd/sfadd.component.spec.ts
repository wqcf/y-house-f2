import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfaddComponent } from './sfadd.component';

describe('SfaddComponent', () => {
  let component: SfaddComponent;
  let fixture: ComponentFixture<SfaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
