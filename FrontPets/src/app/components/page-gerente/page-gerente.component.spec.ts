import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGerenteComponent } from './page-gerente.component';

describe('PageGerenteComponent', () => {
  let component: PageGerenteComponent;
  let fixture: ComponentFixture<PageGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
