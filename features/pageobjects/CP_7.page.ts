import { $ } from '@wdio/globals'
import Page from './page';

class Caso7 extends Page {
    public open () {
        return super.open('articulos');
    }
}

export default new Caso7();
