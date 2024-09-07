import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsOutPageComponent } from './goods-out-page.component';

describe('GoodsOutPageComponent', () => {
  let component: GoodsOutPageComponent;
  let fixture: ComponentFixture<GoodsOutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsOutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodsOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
