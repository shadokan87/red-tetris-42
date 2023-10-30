export class Mutex {
  constructor(delay) {
    this.delay = delay;
    this.mutex = false;
  }

  trigger(callback) {
    if (!this.mutex) {
      this.mutex = true;
      callback();
      setTimeout(() => {
        this.mutex = false;
      }, this.delay);
    }
  }
}
