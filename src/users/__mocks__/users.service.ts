import { userStub } from "../test/stubs/user.stub";

export const UsersService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(userStub()),
  findAll: jest.fn().mockResolvedValue([userStub()]),
  findOne: jest.fn().mockResolvedValue(userStub()),
  findUserByEmail: jest.fn().mockResolvedValue(userStub()),
  update: jest.fn().mockResolvedValue([1, [userStub()]]),
  remove: jest.fn().mockReturnValue([1]),
});