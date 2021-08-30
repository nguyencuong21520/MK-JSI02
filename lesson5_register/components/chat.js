class Chat {
  constructor() {
    this.container = document.createElement("div");
    this.container.innerHTML = "Chatttt";
  }

  render() {
    return this.container;
  }
}

export { Chat };
