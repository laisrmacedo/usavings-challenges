import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInPageComponent } from './goods-in-page.component';

describe('GoodsInPageComponent', () => {
  let component: GoodsInPageComponent;
  let fixture: ComponentFixture<GoodsInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsInPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodsInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
