export class Response {
  code: number;
  data: any | any[];

  constructor(message: ResponseMessage) {
    this.data = message.Data;
    this.code = message.Code;
  }
}

export class ResponseMessage {
  private data: any | any[];
  private code: number;

  get Data(): any | any[] {
    return this.data;
  }

  get Code(): number {
    return this.code;
  }

  public success(code: number, data: any | any[] = ''): ResponseMessage {
    this.code = code;
    this.data = data;
    return this;
  }

  public error(code: number, message: string): ResponseMessage {
    this.code = code;
    this.data = { message };
    return this;
  }

  public build(): Response {
    return new Response(this);
  }
}
