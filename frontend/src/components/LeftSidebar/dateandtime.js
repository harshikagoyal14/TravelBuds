import React,{ useState } from 'react'
import DateTimePicker from 'react-datetime-picker';


const DateTime = ()=>{
    
  const [value, setValue] = useState(new Date());
  return (
    <div>
       <DateTimePicker onChange={setValue} value={value} />
    </div>
  )
}

export default DateTime;
