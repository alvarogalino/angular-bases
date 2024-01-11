import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDBZComponent } from './list.dbzcomponent';

describe('ListComponent', () => {
  let component: ListDBZComponent;
  let fixture: ComponentFixture<ListDBZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDBZComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDBZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
