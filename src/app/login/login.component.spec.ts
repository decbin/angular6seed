import { ComponentFixture, TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MdMaterialModule } from '../md-material/md-material.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MdMaterialModule,
        FlexLayoutModule,
        // AppRoutingModule
      ],
      declarations: [LoginComponent],
      // providers: [
      //   { provide: APP_BASE_HREF, useValue: '/' }
      // ]
    })
      .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tick();
  }));

  it('use fakeAsync(can not make XHR call)', fakeAsync(() => {

    const hostElement = fixture.nativeElement;
    const userNameInput: HTMLInputElement = hostElement.querySelector('#userName');
    const passwordInput: HTMLInputElement = hostElement.querySelector('#password');

    userNameInput.value = 'abc';
    userNameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();

    userNameInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    tick();

    const minlength = hostElement.querySelector('#userNameErr2');
    expect(minlength).toBeTruthy();
    expect(minlength.textContent).toBe('Input more than 4 character.');

    const required = hostElement.querySelector('#userNameErr1');
    expect(required).toBeNull();

  }));

  it('use async', async(() => {

    const hostElement = fixture.nativeElement;
    const userNameInput: HTMLInputElement = hostElement.querySelector('#userName');
    const passwordInput: HTMLInputElement = hostElement.querySelector('#password');

    userNameInput.value = 'abc';
    userNameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    userNameInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const minlength = hostElement.querySelector('#userNameErr2');
      expect(minlength).toBeTruthy();
      expect(minlength.textContent).toBe('Input more than 4 character.');

      const required = hostElement.querySelector('#userNameErr1');
      expect(required).toBeNull();
    });
  }));

});
