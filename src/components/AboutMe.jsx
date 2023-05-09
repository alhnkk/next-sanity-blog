import { useState } from 'react';

export default function AboutMe() {
  const [state,setState] = useState({
    name:'Alihan Küçükkaya',
    age:23,
    location: 'Ordu-İstanbul',
    job:'Front End Developer',
    bio: 
    'Selam.',
    });

  return (
    <div className="container mx-auto max-w-lg my-16">
     <div className="flex flex-col gap-4 p-4 bg-main-300 rounded-md shadow-md">
      <h1 className="text-center font-bold text-4xl text-main-950">{state.name}</h1>
      <p className="text-center text-xl text-main-800">{state.age} | {state.location}</p> 
      <p className="text-center text-main-800">{state.bio}</p>
     </div>
    </div>
  );
}
