function updateClock ( )
 	{
 	  var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );
  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    if(timeOfDay == "AM"){
      $("#greeting").html("Good morning, Devin ");
    } else if(timeOfDay == "PM"){
        $("#greeting").html("Good evening, Devin ");
      }
  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
   	$("#clock").html(currentTimeString);
 }

$(document).ready(function()
{
   setInterval('updateClock()', 1000);
   if( $(window).width() < 1000) {
     $("#clock").hide();
     $("#column1").hide();
     $("#column3").hide();
     $("#column2").removeClass("col-sm-4").addClass("col-sm-12");
     $("#header").removeClass("col-lg-12").addClass("col-sm-12");
   } else {
     $("#column1").addClass("col-sm-4");
     $("#column2").addClass("col-sm-4");
     $("#column2").addClass("col-sm-4");
   }
   document.getElementById("copyButtonHome").addEventListener("click", function() {
       copyToClipboard(document.getElementById("copyTargetHome"));
   });
   document.getElementById("copyButtonCS2830").addEventListener("click", function() {
       copyToClipboard(document.getElementById("copyTargetCS2830"));
   });
   document.getElementById("copyButtonCS3380").addEventListener("click", function() {
       copyToClipboard(document.getElementById("copyTargetCS3380"));
   });
   document.getElementById("copyButtonTCI").addEventListener("click", function() {
       copyToClipboard(document.getElementById("copyTargetTCI"));
   });
   document.getElementById("copyButtonHenryWebsite").addEventListener("click", function() {
       copyToClipboard(document.getElementById("copyTargetHenryWebsite"));
   });
});



function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}
