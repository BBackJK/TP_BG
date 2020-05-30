export class PutUserPhoneDTO {
  readonly uuid: string;
  readonly phone: string;

  constructor(uuid: string, phone: string) {
    this.uuid = uuid;
    this.phone = phone;
  }
}

export class PutUserPasswordDTO {
  readonly uuid: string;
  readonly oldPassword: string;
  readonly newPassword: string;

  constructor(uuid: string, oldPW: string, newPW: string) {
    this.uuid = uuid;
    this.oldPassword = oldPW;
    this.newPassword = newPW;
  }
}
