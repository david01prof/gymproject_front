import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchersComponent } from './sketchers.component';

describe('SketchersComponent', () => {
  let component: SketchersComponent;
  let fixture: ComponentFixture<SketchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SketchersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SketchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
