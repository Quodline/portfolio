import { useEffect, useState } from 'react';

export default function CurrentTime() {
  const [ time, setTime ] = useState('');

  const updateTime = () => {
    const time = new Date().toLocaleString(
      'en-US',
      { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }
    );
    setTime(time);
  }

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  return <div className="min-w-[11ch]">{ time }</div>;
}