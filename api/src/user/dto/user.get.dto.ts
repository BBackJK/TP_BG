export class GetUserDTO {
  readonly uuid: string;

  constructor(uuid: string) {
    this.uuid = uuid;
  }
}

export class GetUserEmailDTO {
  readonly name: string;
  readonly phone: string;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

export class GetUserPasswordDTO {
  readonly email: string;
  readonly phone: string;

  constructor(email: string, phone: string) {
    this.email = email;
    this.phone = phone;
  }
}
