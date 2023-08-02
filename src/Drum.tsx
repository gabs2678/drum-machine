import { AudioClip } from './type'
import './App.css'

interface DrumProps
{
    audioClip: AudioClip;
}

const Drum = ({audioClip}: DrumProps) => {

    const playSound = (clip: AudioClip) =>
    {
        (document.getElementById(clip.keytrigger) as HTMLAudioElement).play().catch(console.error)
        document.getElementById("display")!.innerText = clip.description;
        document.getElementById("drum-"+clip.keytrigger)?.focus();


    };

  return (
    <button className='drum-pad'
    id={`drum-${audioClip.keytrigger}`}
    onClick={()=> playSound(audioClip)}
    >
        <audio src={audioClip.url} id={audioClip.keytrigger} className='clip'></audio>
        {audioClip.keytrigger}
    </button>
  );
};

export default Drum
