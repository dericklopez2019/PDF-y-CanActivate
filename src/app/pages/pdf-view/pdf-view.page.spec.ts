import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfViewPage } from './pdf-view.page';

describe('PdfViewPage', () => {
  let component: PdfViewPage;
  let fixture: ComponentFixture<PdfViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PdfViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
