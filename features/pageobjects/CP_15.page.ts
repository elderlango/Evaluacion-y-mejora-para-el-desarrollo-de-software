import { $ } from '@wdio/globals'
import Page from './page';

class Caso14 extends Page {

    public get inputCont () {
        return $('//*[@id="root"]/div[1]/main/div/div[2]/header/input');
    }

    public async login (cont:string) {
        await this.inputCont.setValue(cont);
    }
}

export default new Caso14();
