import React, { useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  //define state vars
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  // console.log(workouts, dispatch);
  //runs only once after component is rendered.
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
      });
      //   console.log(response);
      const json = await response.json();
      //   console.log(json);
      if (response.ok) {
        // setWorkouts(json);
        dispatch({ type: "SET_WORKOUTS", payload: json });
        // console.log("tets");
      }
      //   console.log(workouts);
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);
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
