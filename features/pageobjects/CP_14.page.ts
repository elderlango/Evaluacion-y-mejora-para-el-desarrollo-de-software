import { $ } from '@wdio/globals'
import Page from './page';

class Caso14 extends Page {

    public get btnOption () {
        return $("//*[@id='root']/div[1]/main/div/div[1]/div/select")
    }

    public get btnSelect () {
        return $("//*[@id='root']/div[1]/main/div/div[1]/div/select/option[2]")
    }
    public async login () {
        await this.btnOption.click();
        await this.btnSelect.click();
    }
}

export default new Caso14();
