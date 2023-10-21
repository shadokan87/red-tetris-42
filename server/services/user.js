export class userService {
  prismaClient;
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async getAll() {
    return await this.prismaClient.user.findMany();
  }

  async findById(id) {
    return await this.prismaClient.user.findFirst({
      where: {
        id,
      },
    });
  }

  async findByDisplayName(userName) {
    return await this.prismaClient.user.findFirst({
      where: {
        userName,
      },
    });
  }

  async findByUserName(userName) {
    return await this.prismaClient.user.findFirst({
      where: {
        userName,
      },
    });
  }

  async create(userName, password, displayName) {
    return await this.prismaClient.user.create({
      data: {
        userName,
        password,
        displayName,
      },
    });
  }
}
