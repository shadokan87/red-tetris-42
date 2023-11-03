export class gameService {
  prismaClient;
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  // this.prisma.game.create({
  //   data: {
  //     lhsScore,
  //     rhsScore,
  //     winnerId,
  //     lhsPlayer: {
  //       connect: {
  //         id: lhsPlayerId,
  //       },
  //     },
  //     rhsPlayer: {
  //       connect: {
  //         id: rhsPlayerId,
  //       },
  //     },
  //   },
  // }),

  async saveVersusGame(lhsPlayerId, rhsPlayerId, scores, winnerId) {
    return await this.prismaClient.game.create({
      data: {
        lhsScore: scores[0],
        rhsScore: scores[1],
        winnerId,
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
