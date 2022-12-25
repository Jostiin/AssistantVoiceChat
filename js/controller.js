import {API_OPENAI} from './API.js'

function clickMic(){
    const MicBtn = document.getElementById('MBtn');
    MicBtn.addEventListener('click',speechRecognition);


}

async function speechRecognition(){
    
    let sr = new webkitSpeechRecognition();
    sr.onresult = resultado => {
        let iUe = resultado.results.length - 1;
        let tListen = resultado.results[iUe][0].transcript;
        
        API_OPENAI(tListen);
    };
    sr.start();
   
  }
  export { clickMic, speechRecognition };