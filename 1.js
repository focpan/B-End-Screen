class D {
  constructor(name) {
    this.name = name;
  }
  fly = () => console.log(this.name);
}

const drone = new D("AA");
const { fly } = drone;
drone.fly();
fly();
fly.call({ name: "P" });
