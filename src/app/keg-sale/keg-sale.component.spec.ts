import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegSaleComponent } from './keg-sale.component';

describe('KegSaleComponent', () => {
  let component: KegSaleComponent;
  let fixture: ComponentFixture<KegSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
