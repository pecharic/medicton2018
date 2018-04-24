import { observable, action } from 'mobx';
import { IAnnouncement, IPaginator } from '../../services/types/type';
import { Paginator } from '../../models/index';
import {FetchProvider} from '../../services/fetch/fetchProvider';

export class DashboardStore
{
    @observable public Announcements:IAnnouncement[] = [];
    @observable public Paginator:Paginator<IAnnouncement> = new Paginator<IAnnouncement>();
    private dataProvider:FetchProvider;
    constructor(){this.dataProvider=new FetchProvider();}

    @action public async getAnnouncments(page:number)
    {
        const temp = await this.dataProvider.requestGet<IPaginator<IAnnouncement>>(`/dashboard/getAnnouncements/${page}`);

        this.Paginator.SetItems(temp.actualPageItems);
        this.Paginator.totalNumber = temp.totalItems;
        this.Paginator._currentPage = page;
        this.Announcements = temp.actualPageItems;
    }

}


