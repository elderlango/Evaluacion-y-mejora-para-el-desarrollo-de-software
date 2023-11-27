import { $ } from '@wdio/globals'
import Page from './page';

class SigninPage extends Page {
   
    public get btnAdd () {
        return $('//*[@id="root"]/div[1]/main/div/div[2]/div[2]/button')
    }

    public get inputName () {
        return $('#name');
    }

    public get inputPrice () {
        return $('#precio');
    }

    public get inputAmount () {
        return $('#cantidad');
    }

    public get inputDesc () {
        return $('#descripcion');
    }

    public get inputImg () {
        return $('#image');
    }


    public get btnSubmit () {
        return $("/html/body/div[2]/div/div/form/div[6]/button[2]")
    }
   
    public async login (name: string, price: number, amount: string, desc: string, img: string) {
        await this.btnAdd.click();
        await this.inputName.setValue(name);
        await this.inputPrice.setValue(price);
        await this.inputAmount.setValue(amount);
        await this.inputDesc.setValue(desc);
        await this.inputImg.setValue(img);
        await this.btnSubmit.click();
    }

    public get flashAlert () {
        return $('.go2072408551');
    }

    public open () {
        return super.open('Productos');
    }
}

export default new SigninPage();
