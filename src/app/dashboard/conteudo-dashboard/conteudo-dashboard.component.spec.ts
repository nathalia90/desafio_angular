import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoDashboardComponent } from './conteudo-dashboard.component';

describe('ConteudoDashboardComponent', () => {
  let component: ConteudoDashboardComponent;
  let fixture: ComponentFixture<ConteudoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
