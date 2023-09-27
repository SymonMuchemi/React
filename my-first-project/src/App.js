import { useEffect, useState } from "react";

export default function App(){
  
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    async function getAdvice(){    
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        
        setCount(function (count) {
                return count + 1;
            })
        setAdvice(data.slip.advice);
  }
  useEffect(function(){
        getAdvice()
  }, [])
  
  return(
    <>
      <h1>{ advice }</h1>
      <button onClick={ getAdvice }>Get Advice</button>
      <Message count={count}/>      
    </>
  )
}

const Message = (props) => {
    return (
        <p>You have read {props.count} pieces of advice</p>
    )
}
