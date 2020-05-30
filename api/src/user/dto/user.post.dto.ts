export class PostUserDTO {
  readonly email: string;
  readonly name: string;
  readonly password: string;
  readonly phone: string;

  constructor(email: string, name: string, password: string, phone: string) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.phone = phone;
  }
}
