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

  // it('初期値は空であること。11', () => {
  //   fixture.detectChanges();
  //   const hostElement = fixture.nativeElement;
  //   const userNameInput: HTMLInputElement = hostElement.querySelector('#userName');
  //   const passwdInput: HTMLInputElement = hostElement.querySelector('#password');

  //   // const userNameErr1 = compiled.querySelector('#userNameErr1');
  //   // const userNameErr2 = compiled.querySelector('#userNameErr2');
  //   // expect(userNameErr1).toBeNull();
  //   // expect(userNameErr2).toBeNull();

  //   // expect(userNameInput.textContent).toBe('');
  //   // expect(passwdInput.textContent).toBe('');
  //   fixture.detectChanges();
  //   userNameInput.value = 'abc';
  //   userNameInput.dispatchEvent(new Event('input'));
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     expect(userNameInput.value).toEqual('abc');
  //   });
  // });

  it('初期値は空であること。121', fakeAsync(() =>{
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    const userNameInput: HTMLInputElement = hostElement.querySelector('#userName');

    const required = hostElement.querySelector('#userNameErr1');
    const minlength = hostElement.querySelector('#userNameErr2');

    userNameInput.value = 'abc';
    userNameInput.dispatchEvent(new Event('input'));
    tick();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      // expect(userNameInput.textContent).toEqual('abc');
      expect(userNameInput.value).toEqual('abc');
      expect(minlength).toBeTruthy();
    });
  }));
});
