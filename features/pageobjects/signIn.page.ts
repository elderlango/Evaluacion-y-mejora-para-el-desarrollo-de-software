import { $ } from '@wdio/globals'
import Page from './page';

class SigninPage extends Page {
   
    public get inputFullName () {
        return $('#fullName');
    }

    public get inputEmail() {
        return $('#email');
    }

    public get inputPhone() {
        return $('#phone');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get inputPasswordRe () {
        return $('#passwordConfirm');
    }

    public get btnConditions () {
        return $('#termsAndConditions');
    }

    public get btnSubmit () {
        return $("//button[contains(text(), 'Registrarse')]")
    }

    public async login (fullname: string, email: string, phone: number, password: string, passwordcon: string) {
        await this.inputFullName.setValue(fullname);
        await this.inputEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.inputPassword.setValue(password);
        await this.inputPasswordRe.setValue(passwordcon);
        await this.btnConditions.click();
        await this.btnSubmit.click();
    }

    public get flashAlert () {
        return $('.go2072408551');
    }
    
    public open () {
        return super.open('Homepage');
    }
}

export default new SigninPage();
