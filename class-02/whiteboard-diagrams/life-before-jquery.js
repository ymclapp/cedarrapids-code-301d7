
var NS4 = (document.layers) ? 1 : 0;
var IE = (document.all) ? 1 : 0;
var DOM = 0;
if (parseInt(navigator.appVersion) >=5) {DOM=1};

var max_height = 640;
var max_width = 600;

if (parseInt(navigator.appVersion)>3) {
  max_height = window.innerHeight;
  max_width = window.innerWidth;

  if ( IE ) {
    max_height = parent.document.body.offsetHeight;
    max_width = parent.document.body.offsetWidth;
  }
}

function draw_iframe( fname ) {

  var height = max_height - 10;
  var width = max_width - 10;

}

function changeCont(tgt,header) {

  target=('T' +tgt);

  if (DOM) {

    // Hide the last one, and flip the tab color back.
    currShow.style.visibility='hidden';
    if ( lastHeader ) { lastHeader.style.background = '#e0e0e0'; lastHeader.style.fontWeight='normal'; }

    // Show this one, and make the tab silver
    var flipOn = document.getElementById(target);
    flipOn.style.visibility='visible';

    var thisTab = document.getElementById(header);
    thisTab.style.background = 'silver';
    thisTab.style.fontWeight = 'bold';

    // Save for next go'round
    currShow=document.getElementById(target);
    lastHeader = document.getElementById(header);

    return false;
  }

  else if (IE) {

    // Hide the last one, and flip the tab color back.
    currShow.style.visibility = 'hidden';
    if (lastHeader) { lastHeader.style.background = '#e0e0e0'; lastHeader.style.fontWeight='normal';}

    // Show this one, and make the tab silver
    document.all[target].style.visibility = 'visible';
    document.all[header].style.background = 'silver';
    document.all[header].style.fontWeight = 'bold';

    // Save for next go'round
    currShow=document.all[target];
    lastHeader=document.all[header];

    return false;
  }

  else if (NS4) {

    // Hide the last one, and flip the tab color back.
    currShow.visibility = 'hide';
    // if (lastHeader) { lastHeader.bgColor = '#e0e0e0'; }

    // Show this one, and make the tab silver
    document.layers[target].visibility = 'show';
    // document.layers[header].bgColor  = 'silver';

    // Save for next go'round
    currShow=document.layers[target];
    // lastHeader=document.layers[header];

    return false;
  }

  // && (version >=4)
  else {
    window.location=('#A' +target);
    return true;
  }


}
