
// import {React,useState} from "react";
// function App(){
//   let[value1,setValue1]=useState({name:"",surname:""})
//   let[value2,setValue2]=useState({name:"",surname:""})
  
//   function handle(e){
// let{name, value}=e.target
// setValue1((previsusState)=>({...previsusState,[name]:value}))
//   }
//   function handleButton(){
//     setValue2(value1)
//    //console.log(value1)

//   }
   
//   return(
//     <>
//   <input name="name" type="text" value={value1.name.toUpperCase()} placeholder="Enter Name" onChange={handle} />
//    <input name="surname" value={value1.surname.toUpperCase()}  type="text"  placeholder="Enter SurName" onChange={handle} />
//    <button onClick={handleButton}>ADd</button>

//    <div>Welcome {value2.name} to the {value2.surname} family.</div>
//     </>
//   )
// }
// export default App

// import { useState } from "react";
// function App(){
// let[data,setData]=useState(10)
// function Increment(){
//   setData(data+2)

// }

// function Decrement(){
//   setData(data-2)

// } 

//   return(<>
//   <div>{data}</div>
//   {data>100?<button onClick={Increment} disabled>Increment</button>:<button onClick={Increment}>Increment</button>}
//   {data<0?<button onClick={Decrement} disabled>Decrement</button>:<button onClick={Decrement}>Decrement</button>}
//   </>)

//   }
// export default App;




// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },[count])

//   return<> <div onClick={()=>setCount(count+1)}>Add</div>
//   <div>{count}</div>
//   </>;
// }

// export default App;


// import { useState } from "react";
// function App(){
//     let[data,setData]=useState(0)
//     function handle(){
//         setData(1-data)
//     }
//     return(<>
//     {data?<div style={{color:"red"}} onClick={handle}>Clicked</div>:<div onClick={handle}>click Me</div>}
//     {data&&<div>Button is active</div>}
//     </>)

// }
// export default App


import { useState } from "react";
import "./App.css"
function App(){
    let[data1,setData1]=useState(0)
    let[data2,setData2]=useState(0)
    let[data3,setData3]=useState(0)
    let[data4,setData4]=useState(0)
    function handle1(){
        setData1(1-data1)

    }
    function handle2(){
        setData2(1-data2)

    }
    function handle3(){
        setData3(1-data3)

    }
    function handle4(){
        setData4(1-data4)

    }
    return(
        <>
        <div id="container">
            <div id="button">
                <div class="btn" onClick={handle1}>Open Tunnale</div>
                <div class="btn" onClick={handle2}>Enable Power</div>
                <div class="btn" onClick={handle3}>Start Countdown</div>
                <div class="btn" onClick={handle4}>Launch Missile</div>

            </div>
            <div id="Status">
                {data1?<div class="btn">on</div>:<div class="btn">Off</div>}
                {data1&&data2?<div class="btn">On</div>:<div class="btn">Off</div>}
                {data1&&data2&&data3?<div class="btn">On</div>:<div class="btn">Off</div>}
                {data1&&data2&&data3&&data4?<div class="btn">On</div>:<div class="btn">Off</div>}

            </div>
           {data1&&data2&&data3&&data4?<div id="status1">
                Missile is Launched</div>:<div></div>
            }

        </div>
        
        </>
    )

}
export default App;