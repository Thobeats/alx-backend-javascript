export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index:string]: any,
}

export interface Director extends Teacher {
    numberOfReport: number
}

export interface printTeacherFunction {

}

export const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
}
  
export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
}


export class StudentClass {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string{
        return "Currently working";
    }

    displayName() {
        return this._firstName;
    }
}