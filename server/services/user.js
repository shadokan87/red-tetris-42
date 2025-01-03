const userSelect = {
  password: false,
  id: true,
  username: true,
  displayname: true,
}

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

  async userProfile(username) {
    const gameInclude = {
      lhsPlayer: {
        select: {
          ...userSelect
        }
      },
      rhsPlayer: {
        select: {
          ...userSelect
        }
      },
    }
    return await this.prismaClient.user.findFirst({
      where: {
        username,
      },
      include: {
        leftPlayer: {
          include: {
            ...gameInclude
          },
        },
        rightPlayer: {
          include: {
            ...gameInclude
          },
        },
      }
    });
  }

  async findByDisplayName(displayname) {
    return await this.prismaClient.user.findFirst({
      where: {
        displayname,
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
