export enum UserType {
    Unknown = 0,
    User = 1,
    Admin = 2,
}

export interface IToken {
    UserType: UserType,
    Token: any,
    ExpirationDate: Date,
    AcquiredDate: Date
}


export interface IEquipment {
    equipmentId?: number;
    buisnessName?: string;
    serialNumber?: string;
    riskClass?: string;
    producer?: string;
    servisContact?: string;
    startDate?: Date;
    owner?: IUser;
    Category?: string;
    Contact?: string;
    HardwareID?: string;
    Manufacturer?: string;
    Name?: string;
    DateCreated?: Date;
    type?: 'intuo' | 'local' | 'Intuo' | 'Local';
}
export interface IAnnouncement {
    announcementId?: number;
    title?: string;
    text?: string;
    date?: Date;//Who knows????? but definately not date
    isAnnouncement?: number;
    isPublished?: number;
    specializations?: IDoctorspecialization[]
}
export interface IDoctorspecialization {
    name: string;
    doctorSpecializationId: number;
    users: IUser[];
    annoucements: IAnnouncement[];
    isSelected: boolean;
}
export enum Role{
    Admin,
    Doctor
}
export interface IUser {
    userId?: number;
    isAdmin?: number;

    firstName?: string;
    lastName?: string;
    email?: string;

    password?: string;
    passwordConfirm?: string;
    ico?: string;
    phoneNumber?: string;

    addressHouseNumber?: string;
    addressStreet?: string;
    addressCity?: string;
    addressState?: string;

    specializations?: IDoctorspecialization[];
    equipments?: IEquipment[];
    role?: Role;

}

export interface IPaginator<T> {
    itemsPerPage: number;
    currentPage: number;
    actualPageItems: Array<T>;
    totalItems: number;
}