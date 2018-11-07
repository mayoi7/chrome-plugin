console.log("inject.js run");

// if aim html haven't link jquery file, the statement below cannot run
// $('body').css('background', '#000');

// send message to 'content-script.js'
window.postMessage({'inject_msg_test': 'this is inject.js'}, '*');
