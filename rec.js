var i=0;
		

			function speechToTextConversion()
			{			
				var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

				var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

				var recognition = new SpeechRecognition();
			
				recognition.continuous = true;
				recognition.lang = 'en-IN';
				recognition.interimResults = true;
				recognition.maxAlternatives = 1;

				var diagnostic = document.getElementById('text');

				
                var i=0;
                var j=0;
				document.getElementById("playButton").onclick = function() {
				    if(i==0)
				    {
				        document.getElementById("playButton").src="record-button-thumb.png";
				        recognition.start();
				        i=1;
				    }
				    else
				    {
				         document.getElementById("playButton").src="mic.png";
				         recognition.stop();
				         i=0;
				    }
				}
				recognition.onresult = function(event) {
				  var last = event.results.length - 1;
				  var convertedText = event.results[last][0].transcript;
				  diagnostic.value = convertedText;
				  console.log('Confidence: ' + event.results[0][0].confidence);
				}
				
				recognition.onnomatch = function(event) {
				  diagnostic.value = 'I didnt recognise that.';
				}
				recognition.onerror = function(event) {
				  diagnostic.value = 'Error occurred in recognition: ' + event.error;
				}
			};
