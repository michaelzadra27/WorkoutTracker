const router = require("express").Router();

const db = require("../models")


//Find workout data
router.get("/api/workouts", (req, res) => {
    console.log("geting workout data")
    db.Workout.find()
        .then(workoutData => {
    console.log(workoutData)

            res.json(workoutData);
        })
        .catch(err=> {
            res.status(500).json(err);
        })
  });

//Gets range from getWorkoutsInRange function then returns data
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
        .then ((workoutData) =>{
            res.json(workoutData);
        }).catch(err => {
            res.status(400).json(err);
        });
});

//Post new workout data
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((workoutData) => {
            res.json(workoutData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


//Udpate Workout Data
router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    console.log("IN THE IDD")
    let workoutUpdates = [];
    db.Workout.find({ _id:id })
        .then (workoutData => {
            console.log(workoutData)
            workoutUpdates = workoutData[0].exercises;
            console.log(workoutUpdates)
            res.json(workoutUpdates);
        
        let exercises = [...workoutUpdates, req.body];
        db.Workout.findByIdAndUpdate(id, {exercises:exercises}, function (err, document){
            if (err) {
                console.log(err)
            }
        })

})
    .catch(err => {
        res.json(err);
    });

});


module.exports = router;




