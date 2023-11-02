import jwt from "jsonwebtoken";

export class authService {
  prismaClient;
  userService;
  secretKey;

  constructor(prismaClient, userService, secretKey) {
    this.prismaClient = prismaClient;
    this.userService = userService;
    this.secretKey = secretKey;
  }

  async sign(username, password) {
    const user = await this.userService.findByUserName(username);
    const token = jwt.sign({ id: user.id, username, password }, this.secretKey);
    return token;
  }

  async verify(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (err) {
      return null;
    }
  }
}
