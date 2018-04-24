import { observable } from 'mobx';
import createHashHistory from 'history/createHashHistory.js';
import {RouterStore, syncHistoryWithStore, SynchronizedHistory} from 'mobx-react-router';

export class RouterStoreWrapper
{
    @observable
    public RouterStore:RouterStore;
    @observable
    public browserHistory:any;
    @observable
    public history:SynchronizedHistory;
    constructor()
    {
        this.RouterStore = new RouterStore();
        this.browserHistory = createHashHistory();
        this.history = syncHistoryWithStore(this.browserHistory, this.RouterStore);
    }
}