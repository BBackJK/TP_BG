export class DeleteUserDTO {
  readonly uuid: string;

  constructor(uuid: string) {
    this.uuid = uuid;
  }
}
