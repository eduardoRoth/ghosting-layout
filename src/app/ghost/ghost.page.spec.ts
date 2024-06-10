import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GhostPage } from './ghost.page';

describe('GhostPage', () => {
  let component: GhostPage;
  let fixture: ComponentFixture<GhostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
