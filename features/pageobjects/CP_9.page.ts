import { $ } from '@wdio/globals'
import Page from './page';

class Caso9 extends Page {

    public get btnModal () {
        return $("//*[@id='root']/div[1]/main/div/div[2]/div[1]/section/div[1]/div[6]/div/button")
    }

    public get btnDelete () {
        return $("/html/body/ul/li[3]/button")
    }

    public get btnConfirm () {
        return $("/html/body/div[2]/div/div/div/div/button[2]")
    }
    public async login () {
        await this.btnModal.click();
        await this.btnDelete.click();
        await this.btnConfirm.click();
    }

    public open () {
        return super.open('articulos');
    }
}

export default new Caso9();
