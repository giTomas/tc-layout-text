function show_modal(modal, src){
  'use strict';
  const tl = new TimelineLite();
  const profile = document.getElementById('js-profile');  //OUT
  const close = document.getElementById('js-modal-close');
  src.classList.add('member-is-clicked');

  tl.to(modal, 0.1, {display: 'block'})
    .to(modal, 0.5, {backgroundColor: 'rgba(128, 128, 128, 0.9)'} )
    //.to(document.getElementById('js-profile'), 0.6, { left: '50%', autoAlpha: 1, force3D: true, ease: Power1.easeOut});
    .to(profile, 0.5, { left: '50%', force3D: true, ease: Power1.easeOut}, '-=0.1')
    .to(profile, 0.5, { autoAlpha: 1, ease: Power1.easeOut}, '-=0.4');
    // .to(profile, 0.6, { autoAlpha: 1, force3D: true, ease: Power1.easeOut});

  // document.getElementById('js-modal-close').addEventListener('click', function() {
  //elistener tu nema co robit
  const closeHandler = function(){
    tl.to(profile, 0.5, { left: '56%', force3D: true, ease: Power1.easeIn})
      .to(profile, 0.4, { autoAlpha: 0, ease: Power1.easeIn}, '-=0.5')
      .to(modal, 0.5, {backgroundColor: 'rgba(0, 0, 0, 0)'}, '-=0.1')
      .to(modal, 0, {clearProps: 'all'});

  setTimeout(()=> src.classList.remove('member-is-clicked'), 900);
  return close.removeEventListener('click', closeHandler);
  };

  close.addEventListener('click', closeHandler, false);

    // tl.to(document.getElementById('js-profile'), 0.5, { left: '54%', autoAlpha: 0, force3D: true, ease: Power1.easeIn})




}
