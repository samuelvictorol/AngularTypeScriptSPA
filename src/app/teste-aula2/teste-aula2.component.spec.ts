import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAula2Component } from './teste-aula2.component';

describe('TesteAula2Component', () => {
  let component: TesteAula2Component;
  let fixture: ComponentFixture<TesteAula2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteAula2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteAula2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
