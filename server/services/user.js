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

  async findByDisplayName(username) {
    return await this.prismaClient.user.findFirst({
      where: {
        username,
      },
    });
  }

  async findByUserName(username) {
    return await this.prismaClient.user.findFirst({
      where: {
        username,
      },
    });
  }

  async create(username, password, displayname) {
    return await this.prismaClient.user.create({
      data: {
        username,
        password,
        displayname,
      },
    });
  }
}
