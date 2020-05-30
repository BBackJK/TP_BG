import { Injectable } from '@nestjs/common';

import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { Token } from '../util/token.util';
import { Encryption } from '../util/encrypt.util';

import {
  GetUserDTO,
  GetUserEmailDTO,
  GetUserPasswordDTO,
  PostUserDTO,
  PutUserPasswordDTO,
  PutUserPhoneDTO,
  DeleteUserDTO,
} from './dto';
import {
  GetUserResponse,
  GetUserEmailResponse,
  GetUserPasswordResponse,
  PostUserResponse,
  PutUserPhoneResponse,
  PutUserPasswordResponse,
  DeleteUserResponse,
} from './type';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async postUser(body: PostUserDTO): Promise<PostUserResponse> {
    const user: UserEntity = await this.userRepository.create();

    const password: string = await Encryption.encrypt(body.password);

    user.email = body.email;
    user.name = body.name;
    user.phone = body.phone;
    user.password = password;
    user.uuid = Token.getUUID();

    const responseUser: UserEntity = await this.userRepository.save(user);

    const postUserResponse: PostUserResponse = {
      uuid: responseUser.uuid,
      email: responseUser.email,
      name: responseUser.name,
      phone: responseUser.phone,
      createdAt: responseUser.createdAt,
    };

    return postUserResponse;
  }

  public async getUser(param: GetUserDTO): Promise<GetUserResponse> {
    const user: UserEntity = await this.userRepository.findOne({
      where: {
        uuid: param.uuid,
        deletedAt: null,
      },
    });

    if (!user) return null;

    const getUserResponse: GetUserResponse = {
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      phone: user.phone,
      lastLoginAt: user.lastLoginAt,
    };

    return getUserResponse;
  }

  public async getUserEmail(
    getUserEmail: GetUserEmailDTO,
  ): Promise<GetUserEmailResponse> {
    const user: UserEntity = await this.userRepository.findOne({
      where: {
        name: getUserEmail.name,
        phone: getUserEmail.phone,
        deletedAt: null,
      },
    });

    if (!user) return null;

    const getUserEmailResponse: GetUserEmailResponse = {
      email: user.email,
    };

    return getUserEmailResponse;
  }

  public async getUserPassword(
    getUserPassword: GetUserPasswordDTO,
  ): Promise<GetUserPasswordResponse> {
    const user: UserEntity = await this.userRepository.findOne({
      where: {
        email: getUserPassword.email,
        phone: getUserPassword.phone,
        deletedAt: null,
      },
    });

    if (!user) return null;

    const getUserPasswordResponse: GetUserPasswordResponse = {
      temporaryPassword: '1234567890',
    };

    return getUserPasswordResponse;
  }

  public async putUserPhone(
    putUserPhone: PutUserPhoneDTO,
  ): Promise<PutUserPhoneResponse> {
    const user: UserEntity = await this.userRepository.findOne({
      where: {
        uuid: putUserPhone.uuid,
        deletedAt: null,
      },
    });

    if (!user) return null;

    user.phone = putUserPhone.phone;
    user.updatedAt = new Date();

    await this.userRepository.save(user);

    const putUserPhoneResponse: PutUserPhoneResponse = {
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      phone: user.phone,
      updatedAt: user.updatedAt,
    };

    return putUserPhoneResponse;
  }

  public async putUserPassword(
    putUserPassword: PutUserPasswordDTO,
  ): Promise<PutUserPasswordResponse | string> {
    const user: UserEntity = await this.userRepository.findOne({
      where: {
        uuid: putUserPassword.uuid,
        deletedAt: null,
      },
    });

    if (!user) return null;

    const passwordCheck = await Encryption.check(
      putUserPassword.oldPassword,
      user.password,
    );

    if (!passwordCheck) return 'Mismatch';

    const password: string = await Encryption.encrypt(
      putUserPassword.newPassword,
    );

    user.password = password;
    user.updatedAt = new Date();

    await this.userRepository.save(user);

    const putUserPasswordResponse: PutUserPasswordResponse = {
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      phone: user.phone,
      updatedAt: user.updatedAt,
    };

    return putUserPasswordResponse;
  }

  public async deleteUser(
    deleteUser: DeleteUserDTO,
  ): Promise<DeleteUserResponse> {
    const user: UserEntity = await this.userRepository.findOne({
      where: {
        uuid: deleteUser.uuid,
        deletedAt: null,
      },
    });

    if (!user) return null;

    user.deletedAt = new Date();

    await this.userRepository.save(user);

    const deleteUserResponse: DeleteUserResponse = {
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      phone: user.phone,
      deletedAt: user.deletedAt,
    };

    return deleteUserResponse;
  }
}
