export class AppUser{
    fullName: string;
    email: string;
    dateOfBirth: string;
    role: string;
    password: string;
    confirmPassword: string;

    constructor(fullName:string,  email: string, dateOfBirth: string, role: string, password:  string, confirmPassword: string) {
        this.fullName = fullName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.role = role;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}