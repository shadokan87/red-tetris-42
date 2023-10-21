import jwt from "jsonwebtoken";

export class authService {
  prismaClient;
  secretKey;

  constructor(prismaClient, secretKey) {
    this.prismaClient = prismaClient;
    this.secretKey = secretKey;
  }

  async sign(username, password) {
    const token = jwt.sign({ username, password }, this.secretKey);
    return token;
  }

  async verify(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      console.log("!decoded", decoded);
      return decoded;
    } catch (err) {
      return null;
    }
  }
}
