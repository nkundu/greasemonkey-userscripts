// ==UserScript==
// @name     Delete Gemini
// @version  1
// @grant    none
// @include  https://mail.google.com/mail/u*
// @run-at   document-idle
// ==/UserScript==


const config = { attributes: false, childList: true, subtree: true };
var observer = null;

function fix(){
  var elem = document.querySelectorAll('[class="Zmxtcf e5IPTd"]');
  if (elem.length > 0) {
    if (!observer) {
			observer = new MutationObserver(fix);
    	observer.observe(elem[0].parentElement, config);
    }
    elem[0].remove();
  } else {
    setTimeout(fix, 500);
  }
}


fix();
