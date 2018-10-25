import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegOutUnitComponent } from './keg-out-unit.component';

describe('KegOutUnitComponent', () => {
  let component: KegOutUnitComponent;
  let fixture: ComponentFixture<KegOutUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegOutUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegOutUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
