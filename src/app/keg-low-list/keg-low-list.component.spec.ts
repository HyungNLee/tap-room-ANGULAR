import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegLowListComponent } from './keg-low-list.component';

describe('KegLowListComponent', () => {
  let component: KegLowListComponent;
  let fixture: ComponentFixture<KegLowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegLowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegLowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
