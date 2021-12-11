import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmpleadosComponent } from './page-empleados.component';

describe('PageEmpleadosComponent', () => {
  let component: PageEmpleadosComponent;
  let fixture: ComponentFixture<PageEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
