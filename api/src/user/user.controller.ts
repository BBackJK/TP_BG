import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
  UsePipes,
  HttpStatus,
} from '@nestjs/common';
import {} from '@nestjs/platform-express';

import { UserService } from './user.service';

import {
  PostUserDTO,
  GetUserDTO,
  GetUserEmailDTO,
  GetUserPasswordDTO,
  PutUserPhoneDTO,
  PutUserPasswordDTO,
  DeleteUserDTO,
} from './dto';
import {
  PostUserSchema,
  GetUserSchema,
  GetUserEmailSchema,
  GetUserPasswordSchema,
  PutUserPhoneSchema,
  PutUserPasswordSchema,
  DeleteUserSchema,
} from './schema';
import {
  PostUserResponse,
  GetUserResponse,
  GetUserEmailResponse,
  GetUserPasswordResponse,
  PutUserPhoneResponse,
  PutUserPasswordResponse,
  DeleteUserResponse,
} from './type';

import { Response, ResponseMessage } from '../util/response.util';
import { JoiValidationPipe } from '../pipe/validation.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(PostUserSchema))
  async post(@Body() body: PostUserDTO): Promise<Response> {
    try {
      const user: PostUserResponse = await this.userService.postUser(body);

      return new ResponseMessage().success(HttpStatus.CREATED, user).build();
    } catch (err) {
      throw new ResponseMessage()
        .error(HttpStatus.INTERNAL_SERVER_ERROR, err)
        .build();
    }
  }

  @Get()
  @UsePipes(new JoiValidationPipe(GetUserSchema))
  async get(@Query() param: GetUserDTO): Promise<Response> {
    try {
      const user: GetUserResponse = await this.userService.getUser(param);

      return !user
        ? new ResponseMessage().error(HttpStatus.NOT_FOUND, 'Not Found').build()
        : new ResponseMessage().success(HttpStatus.OK, user).build();
    } catch (err) {
      throw new ResponseMessage()
        .error(HttpStatus.INTERNAL_SERVER_ERROR, err)
        .build();
    }
  }

  @Get('email')
  @UsePipes(new JoiValidationPipe(GetUserEmailSchema))
  async getEmail(@Query() param: GetUserEmailDTO): Promise<Response> {
    try {
      const user: GetUserEmailResponse = await this.userService.getUserEmail(
        param,
      );

      return !user
        ? new ResponseMessage().error(HttpStatus.NOT_FOUND, 'Not Found').build()
        : new ResponseMessage().success(HttpStatus.OK, user).build();
    } catch (err) {
      throw new ResponseMessage()
        .error(HttpStatus.INTERNAL_SERVER_ERROR, err)
        .build();
    }
  }

  @Get('password')
  @UsePipes(new JoiValidationPipe(GetUserPasswordSchema))
  async getPassword(@Query() param: GetUserPasswordDTO): Promise<Response> {
    try {
      const user: GetUserPasswordResponse = await this.userService.getUserPassword(
        param,
      );

      return !user
        ? new ResponseMessage().error(HttpStatus.NOT_FOUND, 'Not Found').build()
        : new ResponseMessage().success(HttpStatus.OK, user).build();
    } catch (err) {
      throw new ResponseMessage()
        .error(HttpStatus.INTERNAL_SERVER_ERROR, err)
        .build();
    }
  }

  @Put('phone')
  @UsePipes(new JoiValidationPipe(PutUserPhoneSchema))
  async putPhone(@Body() body: PutUserPhoneDTO): Promise<Response> {
    try {
      const user: PutUserPhoneResponse = await this.userService.putUserPhone(
        body,
      );

      return !user
        ? new ResponseMessage().error(HttpStatus.NOT_FOUND, 'Not Found').build()
        : new ResponseMessage().success(HttpStatus.ACCEPTED, user).build();
    } catch (err) {
      throw new ResponseMessage()
        .error(HttpStatus.INTERNAL_SERVER_ERROR, err)
        .build();
    }
  }

  @Put('password')
  @UsePipes(new JoiValidationPipe(PutUserPasswordSchema))
  async putPassword(@Body() body: PutUserPasswordDTO): Promise<Response> {
    try {
      const user:
        | PutUserPasswordResponse
        | string = await this.userService.putUserPassword(body);

      if (!user)
        return new ResponseMessage()
          .error(HttpStatus.NOT_FOUND, 'Not Found')
          .build();

      if (user === 'Mismatch')
        return new ResponseMessage()
          .error(
            HttpStatus.NON_AUTHORITATIVE_INFORMATION,
            'Information Mismatch',
          )
          .build();

      return new ResponseMessage().success(HttpStatus.ACCEPTED, user).build();
    } catch (err) {
      throw new ResponseMessage()
        .error(HttpStatus.INTERNAL_SERVER_ERROR, err)
        .build();
    }
  }

  @Delete()
  @UsePipes(new JoiValidationPipe(DeleteUserSchema))
  async delete(@Query() param: DeleteUserDTO): Promise<Response> {
    try {
      const user: DeleteUserResponse = await this.userService.deleteUser(param);

      return !user
        ? new ResponseMessage().error(HttpStatus.NOT_FOUND, 'Not Found').build()
        : new ResponseMessage().success(HttpStatus.OK, user).build();
    } catch (err) {
      throw new ResponseMessage()
        .error(HttpStatus.INTERNAL_SERVER_ERROR, err)
        .build();
    }
  }
}
