import { useEffect, useState } from "react";

// function HomePage() {
//   // let count = 0;
//   // const [count, setCount] = useState(0);

//   // const handleClick = () => {
//   //   // count++;
//   //   // count = count + 1
//   //   setCount(count + 1);
//   //   console.log(count);
//   // };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

// export default HomePage;
import "./styles.css";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import { Outlet } from "react-router-dom";
function LandingPage() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (counter2 % 2 === 0) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [counter2]);

  return (
    <div className="homePageBaseContainer">
      <div className="homePageNavbarContainer">
        <CustomNavbar />
      </div>
      <div className="homePageRouteContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default LandingPage;
