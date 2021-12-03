let myQuestions = [
	{
		question: "In what city is Oakland University located?",
		answers: {
			a: 'Rochester Hills'+"<br>",
			b: 'Oakland'+"<br>",
			c: 'Bloomfield'+"<br>",
            d: 'Troy'
		},
		correctAnswer: 'a'
	},
	{
		question: "<br> What auto company is headquartered across the street on Squirrel Road?",
		answers: {
			a: 'General Motors'+"<br>",
			b: 'Ford'+"<br>",
			c: 'Stellantis'+"<br>",
            d: 'Tesla'
		},
		correctAnswer: 'c'
	},
    {
		question: "<br> Oakland University's sports teams are known as the:",
		answers: {
			a: 'Lions'+"<br>",
			b: 'Tigers'+"<br>",
			c: 'Grizzlies'+"<br>",
            d: 'Oh My'
		},
		correctAnswer: 'c'
	},
    {
		question: "<br> What class should students take to learn web development?",
		answers: {
			a: 'CSI-1990'+"<br>",
			b: 'CSI-2520'+"<br>",
			c: 'CSI-3370'+"<br>",
            d: 'CSI-2200'
		},
		correctAnswer: 'b'
	},
    {
		question: "<br> What year was Oakland University founded?",
		answers: {
			a: '1984'+"<br>",
			b: '1942'+"<br>",
			c: '1999'+"<br>",
            d: '1957'
		},
		correctAnswer: 'd'
	}
];
  
  let quizContainer = document.getElementById('quiz');
  let resultsContainer = document.getElementById('results');
  let submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
	function showQuestions(questions, quizContainer){
	  let output = [];
	  let answers;
  
	  for(let i=0; i<questions.length; i++){
		answers = [];
		for(letter in questions[i].answers){
		  answers.push(
			'<label>'
			  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
			  + letter + ': '
			  + questions[i].answers[letter]
			+ '</label>'
		  );
		}
  
		output.push(
		  '<div class="question">' + questions[i].question + '</div>'
		  + '<div class="answers">' + answers.join('') + '</div>'
		);
	  }

	  quizContainer.innerHTML = output.join('');
	}
  
  
	function showResults(questions, quizContainer, resultsContainer){
	  
	  let answerContainers = quizContainer.querySelectorAll('.answers');	  
	  let userAnswer = '';
	  let numCorrect = 0;
	  
	  for(let i=0; i<questions.length; i++){  
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;		
		// if correct color green
		if(userAnswer===questions[i].correctAnswer){
		  numCorrect++;
		  answerContainers[i].style.color = 'darkgreen';
		}
		// if wrong color red
		else{
		  answerContainers[i].style.color = 'red';
		}
	  }
  
	  // show total
	  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}
  
	showQuestions(questions, quizContainer);
	
	submitButton.onclick = function(){
	  showResults(questions, quizContainer, resultsContainer);
	}
  
  }