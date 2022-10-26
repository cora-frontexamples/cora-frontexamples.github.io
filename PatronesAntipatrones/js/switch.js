// SWITCH
const set_mode = () => {
  document.body.className = sw.checked ? 'light' : 'dark';
}
const hide_other = () => {
  if (sw.checked) {
    la.hidden = true;
    lp.hidden = false;
    sa.hidden = true;
    sp.hidden = false;
  } else {
    la.hidden = false;
    lp.hidden = true;
    sp.hidden = true;
    sa.hidden = false;
  }
  set_mode();
};

const turnPA = () => {
  hide_other();
  sw.onclick = ( e )=>{
    hide_other();
  };
}

turnPA();