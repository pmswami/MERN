import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);

  // If a context is used outside of wrapped component tree then React by default return null value for that context. So need to handle such case.
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider only"
    );
  }
  return context;
};
