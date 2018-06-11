export class AppUser{
    fullName: string;
    email: string;
    dateOfBirth: string;
    password: string;

    constructor(fullName:string,  email: string, dateOfBirth: string, password:  string) {
        this.fullName = fullName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
    }
}