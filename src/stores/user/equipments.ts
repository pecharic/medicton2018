import { observable, action } from 'mobx'
import { RouterStoreWrapper } from '../../stores/router';
import {FetchProvider} from '../../services/fetch/fetchProvider';
import { IEquipment, IPaginator } from '../../services/types/type';
import { Paginator } from '../../models/index';


export enum EquipmentType {
    Local
}

export class EquipmentsStore {
    private dataProvider: FetchProvider;
    public router: RouterStoreWrapper;
    @observable public equipments: IEquipment[] = [];
    @observable public pagination: Paginator<IEquipment> = new Paginator<IEquipment>();
    @observable public selectedEquipment: IEquipment;
    @observable public equipmentType: EquipmentType = EquipmentType.Local;
    @observable public file: any = null;

    constructor() {
        this.dataProvider=new FetchProvider();
        this.router=new RouterStoreWrapper();
    }


    @action
    public getAll = async (page: number = 1, mode:SortMode = SortMode.idAsc) => {
        this.pagination.SetItems([]);
        const localEquipments = await this.dataProvider.requestGet<IPaginator<IEquipment>>(`/equipment/getEquipments/${page}/${mode}`);
        // const intuoEquipments = await this.dataProvider.requestGet<IPaginator<IIntuoEquipment>>(`/equipment/intuo/getEquipments/${page}`);
        const totalItems = localEquipments.totalItems;
        const actualItems = localEquipments
            .actualPageItems
            .map(q => {
                q.type = 'local';
                return q;
            })
        // .concat(intuoEquipments.actualPageItems.map(this.convertInuoEquipmentToNormal))
        // .sort(q => q.equipmentId);
        const perPage = actualItems.length;

        this.pagination.SetPerPage(perPage);
        this.pagination.SetItems(actualItems);
        this.pagination.totalNumber = totalItems;

        // this.pagination.SetPerPage(localEquipments.itemsPerPage);
        // this.pagination.SetItems(localEquipments.actualPageItems);
        // this.pagination.totalNumber = localEquipments.totalItems;


        // this.pagination.SetPerPage(localEquipments.itemsPerPage);
        // this.pagination.SetItems(localEquipments.actualPageItems.map(q => {
        //   q.type = 'local';
        //   return q;
        // }));
        // this.pagination.totalNumber = localEquipments.totalItems;

        this.pagination._currentPage = page;
    }
    @action
    public sortByMode(mode:SortMode = SortMode.idAsc)
    {
        return this.getAll(1,mode);
    }


    @action
    public async find(id: number) {
        this.selectedEquipment = await this.dataProvider.requestGet<IEquipment>(`/equipment/getEquipment/${id}`);
    }




}



export enum SortMode {
    idAsc = 'id-asc',
    nameAsc = 'name-asc',
    serialAsc = 'serial-asc',
    riskAsc = 'risk-asc',
    producerAsc = 'producer-asc',
    serviceAsc = 'service-asc',
    startdateAsc = 'startdate-asc',
    typeAsc = 'type-asc',
    idDesc = 'id-desc',
    nameDesc = 'name-desc',
    serialDesc = 'serial-desc',
    riskDesc = 'risk-desc',
    producerDesc = 'producer-desc',
    serviceDesc = 'service-desc',
    startdateDesc = 'startdate-desc',
    typeDesc = 'type-desc',
}