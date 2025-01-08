import  React, { useState , useEffect } from 'react'

export const Time = () => {

    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='time-div'>
            <p className='time nunito-normal'> {date.toLocaleTimeString()}</p>
            <p className='time nunito-normal'> {date.toLocaleDateString()}</p>
        </div>
    )
}

export default Time