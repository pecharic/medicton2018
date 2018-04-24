import { observable } from 'mobx';
import {FetchProvider} from '../services/fetch/fetchProvider';
import {AppStore} from '../stores/app';
import {LocalStorage} from "../services/localStorage/localStorage";
import { IToken } from '../services/types/type';
export enum UserType
{
    Unknown = 0,
    User = 1,
    Admin = 2,
}

export class LoginStore
{
    private localStorage:LocalStorage;
    private dataProvider:FetchProvider;
    private appStore:AppStore;
    @observable
    public Username:string = '';
    @observable
    public Password:string = '';
    @observable
    public IsBusy: boolean = false;
    @observable
    public LoginFailed:boolean = false;

    constructor(){
        this.dataProvider= new FetchProvider();
        this.appStore=new AppStore();
        this.localStorage=new LocalStorage();
    }


    public Login = async () =>
    {


        this.IsBusy = true;
        const formData = new FormData();
        formData.append('email',this.Username);
        console.log(this.Username);
        formData.append('password',this.Password);
        console.log(this.Password);
        try {
            const response = await this.dataProvider.requestPostRaw('/user/login',formData);
            const userType: UserType = Number.parseInt(response);
            console.log(userType);
            if (userType == UserType.Unknown)
                throw 'login failed';
            this.createAndSaveToken(userType);

            let redirectUrl = '/dashboard';
            if (userType == UserType.Admin)
                redirectUrl = '/admin';
            console.log(redirectUrl);
            //await this.appStore.getUser();
            this.appStore.goImmediately(redirectUrl);

        } catch (error) {
            this.LoginFailed = true;
        }
        finally{
            this.IsBusy = false;
        }
    }
    private createAndSaveToken = (userType:UserType) =>
    {
        const token = this.dataProvider.lastResponse.headers.get('Authorization');
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 10);
        const sessionInfo:IToken = {
            UserType: userType,
            Token: token,
            ExpirationDate: expirationDate,
            AcquiredDate: new Date()
        }
        this.localStorage.setItem('sessionInfo',JSON.stringify(sessionInfo));
        this.dataProvider.setToken(sessionInfo.Token);
    }

}

