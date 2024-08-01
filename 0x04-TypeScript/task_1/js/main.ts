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