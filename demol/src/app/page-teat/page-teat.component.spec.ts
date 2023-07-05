import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeatComponent } from './page-teat.component';

describe('PageTeatComponent', () => {
  let component: PageTeatComponent;
  let fixture: ComponentFixture<PageTeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTeatComponent]
    });
    fixture = TestBed.createComponent(PageTeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
