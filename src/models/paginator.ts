import { observable, computed, action } from 'mobx'

export class Paginator<T>
{
    @observable private _perPage: number;
    @observable public _currentPage: number;
    @observable private _items: Array<T>;
    @observable public totalNumber: number;

    constructor() {
        this._currentPage = 0;
        this._perPage = 5;
    }

    @computed get TotalPages(): number { return this._items == null ? 0 : Math.ceil(this.totalNumber / this._perPage); }
    @action SetItems(items: Array<T>): void { this._items = items; }
    @computed get TotalItems(): number { return this._items == null ? 0 : this.totalNumber; }

    @action SetPerPage = (perPage: number) => this._perPage = perPage;
    @computed get PerPage(): number { return this._perPage; }

    @computed get CurrentPage(): number { return this._currentPage; }
    @computed get CanGoToFirstPage(): boolean { return this._currentPage > 1; }
    @computed get CanGoToPreviousPage(): boolean { return this._currentPage > 1; }
    @computed get CanGoToNextPage(): boolean { return this._currentPage < this.TotalPages; }
    @computed get CanGoToLastPage(): boolean { return this._currentPage < this.TotalPages; }

    @action GoToFirstPage = () => this._currentPage = 1;
    @action GoToLastPage = () => this._currentPage = this.TotalPages;
    @action GoToPreviousPage = () => this._currentPage -= 1;
    @action GoToNextPage = () => this._currentPage += 1;

    @computed get ShowingIndexStart() {
        return (this._currentPage - 1) * this.PerPage + 1;
    }
    @computed get ShowingIndexLast() {
        const last = this.CurrentPage * this.PerPage;
        if (last > this.TotalItems)
            return this.TotalItems
        return last;
    }

    @computed get CurrentPageItems(): Array<T> {

        if (this._items == null || this.totalNumber < 0)
            return [];
        return this._items;
    }

    @computed get shouldShow(): boolean {
        return this.totalNumber > this.PerPage;
    }
}