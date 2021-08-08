const API = {
  async getLastWorkout() {
    let res;
    try {
      console.log("inGet")
      res = await fetch("/api/workouts");
      console.log('after fetch')
    } catch (err) {
      console.log("In catch")
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    console.log("in add Exercise")
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    console.log("In get workouts INRange")
    const res = await fetch(`/api/workouts/range`);
    console.log("after getWorkouts In Range")
    const json = await res.json();

    return json;
  },
};
