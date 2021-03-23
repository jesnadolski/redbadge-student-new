import React from "react";
import PropsExample from './components/PropsExample';
import PropsMapping from './components/PropsMapping';

function App() {
const visitedPlaces = ['Italy', 'Germany', 'Spain', 'South Africa', 'Egypt', 'South Korea', 'Ireland', 'Morocco', 'Andora', 'France', 'Colombia', 'Jamaica', 'Mexico', 'Aruba','Bahamas','Cayman Islands', 'Austria', 'Netherlands', 'Poland', 'Vietnam', 'Thailand', 'Greece', 'Austria'];

  return (
    <div>
 <div><PropsExample name='Tom' business='MySpace' /></div>
 <div><PropsMapping visited={visitedPlaces}/></div>
 </div>
  );
}

export default App;
