import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTemplateComponent } from './page-list-template.component';

describe('PageListTemplateComponent', () => {
  let component: PageListTemplateComponent;
  let fixture: ComponentFixture<PageListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
