import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);

    if (error) {
      throw new BadRequestException({
        code: HttpStatus.BAD_REQUEST,
        data: error.details[0].message,
      });
    }

    return value;
  }
}
