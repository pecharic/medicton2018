
export class LocalStorage
{
    setItem(key : string, value : string)
    {
        window.localStorage[key] = value;
    }

    getItem<T>(key : string): any
    {
        const object = window.localStorage[key];
        if(object == null)
            return {};
        return JSON.parse(object) as T;
    }

    hasItem(key : string): boolean
    {
        return this.getItem(key) == {} ? false : true;
    }

}