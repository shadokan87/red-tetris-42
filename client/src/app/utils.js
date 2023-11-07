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

export const redirectToTetris = (router) =>
  router.push("/tetris", undefined, {
    shallow: true,
    query: { redirect: window.location.hash },
  });
