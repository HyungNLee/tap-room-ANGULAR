import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegSaleListComponent } from './keg-sale-list.component';

describe('KegSaleListComponent', () => {
  let component: KegSaleListComponent;
  let fixture: ComponentFixture<KegSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
