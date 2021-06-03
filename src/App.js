import React,{useState} from 'react'

const App = () => {
  const [hour,setHour] = useState(22);
  const [minute,setMinute] = useState(59);
  const [second,setSecond] = useState(50);
  setTimeout(() => {
    if(second!==59)
      setSecond(second+1);
    else{
      setSecond(0);
      if(minute!==59)
        setMinute(minute+1)
      else{
        setMinute(0);
        if(hour!==23)
          setHour(hour+1);
        else{
          setHour(0);
        }
      }
    }
  }, 1000);
  return (
    <div>
      {hour+":"+minute+":"+second}
    </div>
  )
}

export default App
