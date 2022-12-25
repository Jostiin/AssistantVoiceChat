function API_OPENAI(text){
  var url = "https://api.openai.com/v1/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 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");

  var data = `{
    "model": "text-davinci-003",
    "prompt": "/n/nHuman:hola/nAI:hola en que puedo ayudarte?/n/nHuman:${text}/nAI:",
    "temperature": 0.9,
    "max_tokens": 150,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0.6,
    "stop": ["Human:","AI:"]
  }`;

  xhr.send(data);

  xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          
          let datos = JSON.parse(this.responseText);
          console.log(datos)
          let textIA = datos.choices[0].text;
          console.log(textIA)
          
          let utterance = new SpeechSynthesisUtterance(textIA);
          speechSynthesis.speak(utterance);
          
          textIA.replace('/n','<br>')
          document.getElementById('output').innerHTML += 'Bot: '+textIA + '<br>';
         
      }
  }
}

export { API_OPENAI };