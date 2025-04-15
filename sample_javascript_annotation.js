Qualtrics.SurveyEngine.addOnload(function() {
    // Retrieve Question ID
	const questionID = this.questionId;
	
	// Updated instruction text with new header and details
    const instructionText = 
        "Reflection on clues used to evaluate accent similarity:\n" +
        "- Please carefully highlight only the specific parts of the sentence that helped you decide how similar one recording's accent is to another.\n" +
        "- Avoid selecting the entire sentence. Instead, try to be as precise as possible. For example, if the \"tt\" sound in \"bottle\" influenced your decision, highlight just \"tt.\"\n" +
        "- Click and drag to select or deselect parts of the text. If you make a mistake, you can click again to undo your selection.\n" +
        "- Use the \"Clear All Highlights\" button below to remove all highlights if you wish to start over.";
    const sentence = "Please call Stella.";

    // Create a new container div for the instructions and interactive elements
    const interactionContainer = document.createElement('div');
    interactionContainer.id = 'sentenceContainer';
    interactionContainer.style.padding = '10px';
    interactionContainer.style.border = '1px solid #ccc';
    interactionContainer.style.display = 'block';

    // Insert the instruction text, ensuring line breaks for clarity
    const instructionElement = document.createElement('p');
    instructionElement.innerText = instructionText;
    instructionElement.style.whiteSpace = 'pre-line'; // Ensures new lines in text
    instructionElement.style.marginBottom = '20px';
    interactionContainer.appendChild(instructionElement);

    // Create the characters as span elements with larger font size and custom font style
    let charactersHTML = '';
    for (let index = 0; index < sentence.length; index++) {
        const char = sentence.charAt(index);
        const displayChar = char === ' ' ? '&nbsp;' : char;
        const spanString = '<span data-index="' + index + '" style="cursor: pointer; display: inline-block; font-size: 2.5em; font-family: Arial, sans-serif;">' + displayChar + '</span>';
        charactersHTML += spanString;
    }

    // Insert the generated sentence HTML into the interaction container
    interactionContainer.innerHTML += charactersHTML;
    
    // Add a line break after the sentence
    interactionContainer.innerHTML += '<br>';

    // Create and add a button for clearing highlights
    const clearButton = document.createElement('button');
    clearButton.id = "clearButton";
    clearButton.innerText = "Clear All Highlights";
    clearButton.style.marginTop = '10px';
    clearButton.onclick = function() {
        selectedIndices.clear();
        updateHighlight();
    };

    // Append the clear button to the interaction container
    interactionContainer.appendChild(clearButton);

    // Append the interaction container to the main question container
    if (this.questionContainer) {
        this.questionContainer.appendChild(interactionContainer);
    } else {
        console.error('Question container not found.');
    }

    // Set of selected indices to manage highlights
    const selectedIndices = new Set();

    // Function to visually update highlighted characters
    function updateHighlight() {
        const spans = interactionContainer.querySelectorAll('span');
        spans.forEach((span) => {
            const index = parseInt(span.getAttribute('data-index'), 10);
            span.style.backgroundColor = selectedIndices.has(index) ? 'yellow' : '';
        });
        saveHighlight();
    }
    
    // Function to save changes to the highlighted characters
    function saveHighlight() {
		var selectedIndexString = [...selectedIndices].join(',');
		var spanRecords = Qualtrics.SurveyEngine.getEmbeddedData('spanRecords');
		spanRecords = spanRecords + '|' + questionID + ':' + selectedIndexString;
		Qualtrics.SurveyEngine.setEmbeddedData('spanRecords', spanRecords);
		console.log(Qualtrics.SurveyEngine.getEmbeddedData('spanRecords'))
    }

    // Add event listeners to handle character selection
    interactionContainer.addEventListener('mousedown', (event) => {
        if (event.target.tagName === 'SPAN') {
            let startIdx = parseInt(event.target.getAttribute('data-index'), 10);
            let endIdx = startIdx;
            const initialState = selectedIndices.has(startIdx);

            const toggleSelection = (rangeStart, rangeEnd) => {
                for (let i = rangeStart; i <= rangeEnd; i++) {
                    if (initialState) {
                        selectedIndices.delete(i);
                    } else {
                        selectedIndices.add(i);
                    }
                }
                updateHighlight();
            };

            // Initially toggle selection on mousedown
            toggleSelection(startIdx, startIdx);

            const moveHandler = (moveEvent) => {
                if (moveEvent.target.tagName === 'SPAN') {
                    endIdx = parseInt(moveEvent.target.getAttribute('data-index'), 10);
                    if (startIdx > endIdx) [startIdx, endIdx] = [endIdx, startIdx];
                    toggleSelection(startIdx, endIdx);
                }
            };

            const upHandler = () => {
                document.removeEventListener('mousemove', moveHandler);
                document.removeEventListener('mouseup', upHandler);
            };

            document.addEventListener('mousemove', moveHandler);
            document.addEventListener('mouseup', upHandler);
        }
    });
});

Qualtrics.SurveyEngine.addOnReady(function()
{
        /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
        /*Place your JavaScript here to run when the page is unloaded*/

});