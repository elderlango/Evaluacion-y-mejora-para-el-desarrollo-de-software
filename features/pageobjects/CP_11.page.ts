import { $ } from '@wdio/globals'
import Page from './page';

class Caso11 extends Page {

    public get btnModal () {
        return $("//*[@id='root']/div[1]/main/div/div[2]/div[1]/section/div[1]/div[6]/div/button")
    }

    public get btnClone () {
        return $("/html/body/ul/li[1]/button")
    }

    public async login () {
        await this.btnModal.click();
        await this.btnClone.click();
    }

    public open () {
        return super.open('articulos');
    }
}

export default new Caso11();
