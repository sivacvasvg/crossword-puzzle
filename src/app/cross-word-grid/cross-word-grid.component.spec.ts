import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossWordGridComponent } from './cross-word-grid.component';

describe('CrossWordGridComponent', () => {
  let component: CrossWordGridComponent;
  let fixture: ComponentFixture<CrossWordGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossWordGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossWordGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
