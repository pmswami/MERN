import React, { useEffect, useState } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";

export default function Home() {
  //define state vars
  const [workouts, setWorkouts] = useState(null);

  //runs only once after component is rendered.
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      //   console.log(response);
      const json = await response.json();
      //   console.log(json);
      if (response.ok) {
        setWorkouts(json);
      }
      //   console.log(workouts);
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {/* {workouts} */}
        {workouts &&
          workouts.map((workout) => (
            // <WorkoutDetails/>
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
