import { useEffect, useState } from 'react'

export default function Clock() {

  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {

      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const horaDoce = hours % 12 || 12;
      const minutosFormateados = minutes.toString().padStart(2, "0");
      const periodo = hours > 12 ? "PM" : "AM";
      let timeFormat = `${horaDoce}: ${minutosFormateados} ${periodo}`;


      setTime(timeFormat)
    }, 1000);

    return () => clearInterval(interval);

  }, []);


  return (
    <div>
      {time}
    </div>
  )
}
