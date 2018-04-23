import {action, observable} from "mobx";

export class HomeStore {
    @observable public visible: boolean = true;

    @action
    public setVisible(n: boolean) {
        this.visible = n;
    }


}

const homeStore = new HomeStore();
export default homeStore;