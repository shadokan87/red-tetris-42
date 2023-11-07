export class gameService {
  prismaClient;
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async saveVersusGame(lhsPlayerId, rhsPlayerId, scores, winnerId, scoreLimit) {
    return await this.prismaClient.game.create({
      data: {
        lhsScore: scores[0],
        rhsScore: scores[1],
        winnerId,
        scoreLimit,
        lhsPlayer: {
          connect: {
            id: lhsPlayerId,
          },
        },
        rhsPlayer: {
          connect: {
            id: rhsPlayerId,
          },
        },
      },
    });
  }

  ping(message) {
    console.log(message);
  }
}
