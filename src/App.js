import { useState } from 'react'
function App() {

  let newTime = new Date().toLocaleTimeString([], {hourCycle: "h12"})

  const [inTime, cTime] = useState(newTime)

  const updateTime = () => {
    newTime = new Date().toLocaleTimeString([], {hourCycle: "h12"})
    cTime(newTime)
  }

  setInterval(updateTime, 1000)

  return (
    <>
    <div>
      <h1>{ inTime }</h1>
    </div>
    </>
  );
}

export default App;
