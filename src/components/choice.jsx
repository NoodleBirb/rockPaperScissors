/* eslint-disable react/prop-types */

import '../App.css';

function App(props) {


  return (
    <>
      <div>
        <img src={props.url} style="choiceIMG"/>
      </div>
    </>
  );
}



export default App;
