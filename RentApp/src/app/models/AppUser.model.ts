export class AppUser{
    name: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    password: string;

    constructor(name:string, surname: string, email: string, dateOfBirth: string, password:  string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
    }
}