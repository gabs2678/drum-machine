import { useState } from 'react'
import './App.css'
import { AudioClip } from './type'
import Drum from './Drum';

const audioClips: AudioClip[] = [{
  keytrigger: "Q",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  description: "Heater 1",
},
{
  keytrigger: "W",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  description: "Heater 2",
}, 
{
  keytrigger: "E",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  description: "Heater 3",
}, 
{
  keytrigger: "A",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  description: "Heater 4",
}, 
{
  keytrigger: "S",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  description: "Clap",
}, 
{
  keytrigger: "D",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  description: "Open-HH",
}, 
{
  keytrigger: "Z",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  description: "Kick-n'-Hat",
}, 
{
  keytrigger: "X",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  description: "Kick",
}, 
{
  keytrigger: "C",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  description: "Closed-HH",
}

];

 


function App() {
  const [count, setCount] = useState(0)

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) =>
  {
    const clip = audioClips.find((clip) => clip.keytrigger === e.key.toUpperCase());

    if(!clip)
    {
      return;
    }
      (document.getElementById(clip.keytrigger) as HTMLAudioElement).play().catch(console.error);
      document.getElementById("drum-" + clip.keytrigger)?.focus();
      document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <>
       <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <h1>Drum Machine</h1>
          <div className='whole-drum'></div>
            {audioClips.map((clip) => (
              <Drum audioClip={clip} key={clip.keytrigger} ></Drum>
            ))}
          </div>

       <div id="display"></div>
    </>
  )
}

export default App
