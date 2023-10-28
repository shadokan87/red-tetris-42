export class roomService {
  rooms;
  constructor() {
    this.rooms = new Map();
  }

  exist(ownerUserId) {
    return this.rooms.has(ownerUserId);
  }

  create(ownerUserId, data) {
    this.rooms.set(ownerUserId, data);
  }

  destroy(ownerUserId) {
    this.rooms.delete(ownerUserId);
  }

  get(ownerUserId) {
    return this.rooms.get(ownerUserId);
  }

  isRoomCrowded(ownerUserId) {
    const room = this.get(ownerUserId);
    return this.room.opponent != undefined;
  }

  removeMember(ownerUserId, userId) {
    const room = this.get(ownerUserId);
    delete room.opponent;
    this.rooms.set(ownerUserId, room);
  }

  addMember(ownerUserId, userId) {
    const room = this.get(ownerUserId);
    room.opponent = userId;
    this.rooms.set(ownerUserId, room);
  }
}
