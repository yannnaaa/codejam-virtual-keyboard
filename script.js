let standardKeyboard = [
    [["`", "~","Backquote"], ["1", "!", "Digit1"], ["2", "@","Digit2"], ["3", "#","Digit3"], ["4", "$", "Digit4"], ["5", "%", "Digit5"], ["6", "^", "Digit6"], ["7", "&","Digit7"], ["8", "*","Digit8"], ["9", "(","Digit9"], ["0", ")","Digit0"], ["-", "_","Minus"], ["=", "+","Equal"], ["Bksp", "Bksp","Backspace"]],
    [["Tab", "Tab","Tab"], ["q", "Q","KeyQ"], ["w", "W","KeyW"], ["e", "E","KeyE"], ["r", "R","KeyR"], ["t", "T","KeyT"], ["y", "Y","KeyY"], ["u", "U","KeyU"], ["i", "I","KeyI"], ["o", "O","KeyO"], ["p", "P","KeyP"], ["[", "{","BracketLeft"], ["]", "}","BracketRight"],  ["\\", "|","Backslash"]],
    [["Caps", "Caps","CapsLock"], ["a", "A","KeyA"], ["s", "S", "KeyS"], ["d", "D", "KeyD"], ["f", "F","KeyF"], ["g", "G","KeyG"], ["h", "H","KeyH"], ["j", "J","KeyJ"], ["k", "K","KeyK"], ["l", "L","KeyL"], [";", ":","Semicolon"], ["'", "\"","Quote"],["Enter", "Enter","Enter"]],
    [["Shift", "Shift","ShiftLeft"], ["z", "Z","KeyZ"], ["x", "X","KeyX"], ["c", "C","KeyC"], ["v", "V","KeyV"], ["b", "B","KeyB"], ["n", "N","KeyN"], ["m", "M","KeyM"], [",", "<","Comma"], [".", ">","Period"], ["/", "?","Slash"],["\u2191", "\u2191","ArrowUp"], ["Shift", "Shift","ShiftRight"]],
    [["Ctrl", "Ctrl","ControlLeft"],["Win", "Win","OSLeft"],["Alt", "Alt","AltLeft"],[" ", " ","Space"],["Alt", "Alt","AltRight"],["Ctrl", "Ctrl","ControlRight"],["\u2190", "\u2190","ArrowLeft"],["\u2193", "\u2193","ArrowDown"],["\u2192", "\u2192","ArrowRight"]]
];
																											
let russianStandardKeyboard = [																																																									
    [["\u0451", "\u0401","Backquote"], ["1", "!","Digit1"], ["2", '"',"Digit2"], ["3", "\u2116","Digit3"], ["4", ";","Digit4"], ["5", "%","Digit5"], ["6", ":","Digit7"], ["7", "?","Digit7"], ["8", "*","Digit8"], ["9", "(","Digit9"], ["0", ")","Digit0"], ["-", "_","Minus"], ["=", "+","Equal"], ["Bksp", "Bksp","Backspace"]],
    [["Tab", "Tab","Tab"], ["\u0439", "\u0419","KeyQ"], ["\u0446", "\u0426","KeyW"], ["\u0443", "\u0423","KeyE"], ["\u043A", "\u041A","KeyR"], ["\u0435", "\u0415" ,"KeyT"], ["\u043D", "\u041D","KeyY"], ["\u0433", "\u0413","KeyU"], ["\u0448", "\u0428","KeyI"], ["\u0449", "\u0429","KeyO"], ["\u0437", "\u0417","KeyP"], ["\u0445", "\u0425","BracketLeft"], ["\u044A", "\u042A","BracketRight"],  ["\\", "/","Backslash"]],
    [["Caps", "Caps","CapsLock"], ["\u0444", "\u0424","KeyA"], ["\u044B", "\u042B", "KeyS"], ["\u0432", "\u0412", "KeyD"], ["\u0430", "\u0410","KeyF"], ["\u043F", "\u041F","KeyG"], ["\u0440", "\u0420","KeyH"], ["\u043E", "\u041E","KeyJ"], ["\u043B", "\u041B","KeyK"], ["\u0434", "\u0414","KeyL"], ["\u0436", "\u0416","Semicolon"], ["\u044D", "\u042D","Quote"],["Enter", "Enter","Enter"]],
    [["Shift", "Shift","ShiftLeft"], ["\u044F", "\u042F","KeyZ"], ["\u0447", "\u0427","KeyX"], ["\u0441", "\u0421","KeyC"], ["\u043C", "\u041C","KeyV"], ["\u0438", "\u0418","KeyB"], ["\u0442", "\u0422","KeyN"], ["\u044C", "\u042C","KeyM"], ["\u0431", "\u0411","Comma"], ["\u044E", "\u042E","Period"], [".", ",","Slash"],["\u2191", "\u2191","ArrowUp"],["Shift", "Shift","ShiftRight"]],
    [["Ctrl", "Ctrl","ControlLeft"],["Win", "Win","OSLeft"],["Alt", "Alt","AltLeft"],[" ", " ","Space"],["Alt", "Alt","AltRight"],["Ctrl", "Ctrl","ControlRight"],["\u2190", "\u2190","ArrowLeft"],["\u2193", "\u2193","ArrowDown"],["\u2192", "\u2192","ArrowRight"]]
];

function createCalc() {

	const en = 'abcdefghijklmnopqrstuvwxyz'
	  + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let bodyElement = document.getElementsByTagName('body')[0];
    let scriptElement = document.getElementsByTagName('script')[0];
    let textareaElement = document.createElement('textarea');
    let blockCalc = document.createElement('div');
    let keyboard = russianStandardKeyboard;
  	let flCaps = 0;
  	let flShiftAlt = 0;
	let pressed = new Set();
    let blockCalcRows;
 	let blockCalcRowBottoms;

    textareaElement.className = 'block-area';
    bodyElement.insertBefore(textareaElement,scriptElement);

    blockCalc.className = 'block-calc';
    bodyElement.insertBefore(blockCalc,scriptElement);

    for (let i = 0; i < 5; i++) {
        let blockCalcRow = document.createElement('div');
        blockCalcRow.className = 'block-calc__row-item';
        blockCalc.appendChild(blockCalcRow);
    }

    blockCalcRows = document.getElementsByClassName('block-calc__row-item');

	for (let i = 0; i < 2; i++) {
	    for (let j = 0; j < 14; j++) {
	        createBottom(i,j);
	    }
	}

	for (let i = 2; i < 4; i++) {
	    for (let j = 0; j < 13; j++) {
	        createBottom(i,j);
	    }
	}

	for (let j = 0; j < 9; j++) {
	    createBottom(4,j);
	}

    blockCalcRowBottoms = document.getElementsByClassName('block-calc__row-item__bottom');

    for (let i = 0; i < blockCalcRowBottoms.length; i++) {

        blockCalcRowBottoms[i].addEventListener('mousedown', function() {
            let content = this.getElementsByTagName('span')[0].textContent;

            if ( content !== 'Tab' && content !== 'Caps' && content !== 'Shift'
                && content !== 'Enter' && content !== 'Ctrl' && content !== 'Alt'
                && content !== 'Bksp' && content !== 'Win' && content !== 'Bksp'
                && content !== '\u2190' && content !== '\u2191' && content !== '\u2192'
                && content !== '\u2193') {

                textareaElement.value += content;
            }

			if ( content !== 'Caps' ) {
			    this.classList.add('active');
			}

            if ( content === 'Caps' && this.classList.contains('active')) {
                this.classList.remove('active');
                flCaps = 0;
                renameButtons(flCaps);

            } else if ( content === 'Caps' ) {
 	            this.classList.add('active');
 	            flCaps = 1;
 	            renameButtons(flCaps);
            }
        });

        blockCalcRowBottoms[i].addEventListener('mouseup', function() {
            if (this.getElementsByTagName('span')[0].textContent !== "Caps") {
            	setTimeout(blockCalcRowBottoms[i].classList.remove('active'), 1000);
            }
            textareaElement.focus();
        });
    };

 	document.addEventListener('keydown', function(event) {

	    if (event.code === 'CapsLock' && flCaps === 0) {
	    	document.getElementById(event.code).classList.add('active');
	    	flCaps = 1;
	    	renameButtons(flCaps);
	    } else  if (event.code === 'CapsLock') {
	            document.getElementById(event.code).classList.remove('active');
	            flCaps = 0;
	    		renameButtons(flCaps);
	        } else {

	            document.getElementById(event.code).classList.add('active');
	    }

	    if (event.code === 'ShiftLeft' || event.code === 'AltLeft') {
           	pressed.add(event.code);
        }

        if (pressed.has('ShiftLeft') && pressed.has('AltLeft')) {
            let letter = textareaElement.value.substr(-1,1);

           	if (en.includes(letter)) {
				keyboard = russianStandardKeyboard;
           	} else {
           		keyboard = standardKeyboard;
           	}

           	flCaps === 1 ? renameButtons(flCaps) : renameButtons(flCaps);
           	pressed.clear();
        }
	});

	setTimeout(document.addEventListener('keyup', function(event) {
	    if (event.code !== 'CapsLock') {
	    	document.getElementById(event.code).classList.remove('active');
	    	pressed.delete(event.code);
	    }

	    textareaElement.focus();
	}), 1000);

	function createBottom(i,j) {
        let blockCalcRowBottom = document.createElement('div');
        let blockCalcRowBottomTitle = document.createElement('span');

        blockCalcRowBottom.className = 'block-calc__row-item__bottom';
        blockCalcRowBottom.id = `${standardKeyboard[i][j][2]}`;
        blockCalcRows[i].appendChild(blockCalcRowBottom);
        blockCalcRowBottom.appendChild(blockCalcRowBottomTitle);
        blockCalcRowBottomTitle.innerHTML = keyboard[i][j][0];
    };

    function renameButtons(fl) {

        let rows = document.getElementsByClassName('block-calc__row-item');

        for ( let i = 0; i < rows.length; i++ ) {
          	let counts = rows[i].getElementsByClassName('block-calc__row-item__bottom');

            for ( let j = 0; j < counts.length; j++ ) {

            	if ( fl === 0 ) {
            		counts[j].getElementsByTagName('span')[0].innerHTML = keyboard[i][j][0];
            	} else {

            		counts[j].getElementsByTagName('span')[0].innerHTML = keyboard[i][j][1];
            	}
            }
        }
	};
};

createCalc();