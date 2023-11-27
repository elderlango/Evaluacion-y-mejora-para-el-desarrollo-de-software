import { $ } from '@wdio/globals'
import Page from './page';

class Caso13 extends Page {

    public get inputMessage () {
        return $('[name="message"]');
    }

    public get btnConfirm () {
        return $("//*[@id='root']/div[1]/main/div/div/div/section/section/form/button")
    }
    public async login (msg: string) {
        await this.inputMessage.setValue(msg);
        await this.btnConfirm.click();
    }

    public open () {
        return super.open('Mensajes');
    }
}

export default new Caso13();
