var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;


var textArray = document.getElementById("subscribe__renMess").dataset.mess.split(",");

var speedForward = 100, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 25; //Backspace Speed

//Run the loop
typeWriter("subscribe__renMess", textArray);

function typeWriter(id, ar) {
    var element = $("#" + id),
        aString = ar[a],
        eHeader = element.children(".subscribe__cursor"),
        eParagraph = element.children("p");
    if (!isBackspacing) {
        if (i < aString.length) {
            if (!isParagraph) {
                eHeader.text(eHeader.text() + aString.charAt(i));
            } else {
                eParagraph.text(eParagraph.text() + aString.charAt(i));
            }
            i++;
            setTimeout(function () { typeWriter(id, ar); }, speedForward);
        } else if (i == aString.length) {
            isBackspacing = true;
            setTimeout(function () { typeWriter(id, ar); }, speedWait);
        }
    } else {
        if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
            if (eParagraph.text().length > 0) {
                eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
            } else if (eHeader.text().length > 0) {
                eParagraph.removeClass("subscribe__cursor");
                eHeader.addClass("subscribe__cursor");
                eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
            }
            setTimeout(function () { typeWriter(id, ar); }, speedBackspace);
        } else {
            isBackspacing = false;
            i = 0;
            isParagraph = false;
            a = (a + 1) % ar.length;
            setTimeout(function () { typeWriter(id, ar); }, 50);

        }
    }
}