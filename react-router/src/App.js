// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <BrowserRouter>
//       <header>
//         <nav>
//           <h1>Jobarouter</h1>
//           {/* normal link component will not provide details whether it is active currently or not.  */}
//           {/* Whereas navlink provide details like active status of that component */}
//           {/* <Link to="/">Home</Link> */}
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="about">About</NavLink>
//         </nav>
//       </header>
//       <main>
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route index element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    // we can create route inside another route
    <Route path="/" element={<RootLayout />}>
      {/* <Route path="/" element={<Home />} /> */}
      {/* path of below route = "/" */}
      <Route index element={<Home />} />
      {/* path of below route = "/about" */}
      <Route path="about" element={<About />} />
      {/* //path of below route = "/help" */}
      <Route path="help" element={<HelpLayout />}>
        {/* path of below route = "/help/faq" */}
        <Route path="faq" element={<Faq />} />
        {/* path of below route = "/help/contact" */}
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
