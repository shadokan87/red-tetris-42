export class roomService {
  rooms;
  id;
  constructor() {
    this.id = 0;
    this.rooms = new Map();
  }

  /**
   * Check if a room exists for a given user.
   * @param {string} ownerUserId - The ID of the user.
   * @returns {boolean} - True if the room exists, false otherwise.
   */
  exist(ownerUserId) {
    return this.rooms.has(ownerUserId);
  }

  /**
   * Create a room for a given user.
   * @param {string} ownerUserId - The ID of the user.
   * @param {object} data - The data to be stored in the room.
   * @returns {object} - The data stored in the room.
   */
  create(ownerUserId, data) {
    const result = { ...data, id: this.id++ };
    this.rooms.set(ownerUserId, result);
    return result;
  }

  /**
   * Destroy a room for a given user.
   * @param {string} ownerUserId - The ID of the user.
   */
  destroy(ownerUserId) {
    this.rooms.delete(ownerUserId);
  }

  /**
   * Get the room of a given user.
   * @param {string} ownerUserId - The ID of the user.
   * @returns {object} - The room of the user.
   */
  get(ownerUserId) {
    return this.rooms.get(ownerUserId);
  }

  /**
   * Check if a room is crowded.
   * @param {string} ownerUserId - The ID of the user.
   * @returns {boolean} - True if the room is crowded, false otherwise.
   */
  isRoomCrowded(ownerUserId) {
    const room = this.get(ownerUserId);
    return "opponent" in room;
  }

  /**
   * Remove a member from a room.
   * @param {string} ownerUserId - The ID of the user.
   * @param {string} userId - The ID of the member to be removed.
   * @returns {object} - The updated room.
   */
  removeMember(ownerUserId, userId) {
    const room = this.get(ownerUserId);
    delete room.opponent;
    this.rooms.set(ownerUserId, room);
    return room;
  }

  /**
   * Add a member to a room.
   * @param {string} ownerUserId - The ID of the user.
   * @param {string} userId - The ID of the member to be added.
   * @returns {object} - The updated room.
   */
  addMember(ownerUserId, userId) {
    const room = this.get(ownerUserId);
    room.opponent = userId;
    this.rooms.set(ownerUserId, room);
    return room;
  }

  /**
   * Update the room of a given user.
   * @param {string} ownerUserId - The ID of the user.
   * @param {function} callback - The callback function to generate the new room. It can take the actual room as a parameter.
   * @returns {object} - The updated room.
   */
  update(ownerUserId, callback) {
    const room = this.get(ownerUserId);
    const newRoom = callback(room);
    this.rooms.set(ownerUserId, newRoom);
    return newRoom;
  }
}
