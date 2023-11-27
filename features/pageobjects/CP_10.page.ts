import { $ } from '@wdio/globals'
import Page from './page';

class Caso10 extends Page {

    public get btnModal () {
        return $("//*[@id='root']/div[1]/main/div/div[2]/div[1]/section/div[1]/div[6]/div/button")
    }

    public get btnDelete () {
        return $("/html/body/ul/li[2]/button")
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


    public get btnConfirm () {
        return $("/html/body/div[2]/div/div/form/div[6]/button[2]")
    }
    public async login (name: string, price: number, amount: string, desc: string, img: string) {
        await this.btnModal.click();
        await this.btnDelete.click();
        await this.inputName.setValue(name);
        await this.inputPrice.setValue(price);
        await this.inputAmount.setValue(amount);
        await this.inputDesc.setValue(desc);
        await this.inputImg.setValue(img);
        await this.btnConfirm.click();
    }

    public get flashAlert () {
        return $('.go3958317564');
    }
    
    public open () {
        return super.open('articulos');
    }
}

export default new Caso10();
