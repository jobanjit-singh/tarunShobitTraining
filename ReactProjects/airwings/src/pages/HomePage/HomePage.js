import { useState } from "react";

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
function HomePage() {
  return (
    <div className="homePageBaseContainer">
      <div className="homePageNavbarContainer">
        <CustomNavbar />
      </div>
      <div className="homePageRouteContainer"></div>
    </div>
  );
}

export default HomePage;
