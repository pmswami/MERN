import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("Mario");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
        sagittis odio. Vivamus maximus vitae lectus vel auctor. Vestibulum lorem
        turpis, dapibus vel tellus non, varius molestie ligula. Mauris viverra
        maximus dolor, eget blandit magna condimentum non. Sed quis nisl
        ultricies, suscipit velit nec, ultrices dolor. Nullam eu nisl in neque
        porttitor rhoncus. Vestibulum sit amet dui lorem. Integer et libero eu
        leo tincidunt sollicitudin. Proin vel ipsum nec urna dictum
        sollicitudin.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
