import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxMatSelectSearchModule } from './mat-select-search/ngx-mat-select-search.module';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatToolbarModule } from '@angular/material';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatToolbarModule,
        NgxMatSelectSearchModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
