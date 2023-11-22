import { Dismiss } from 'flowbite';
import type { DismissOptions, DismissInterface } from 'flowbite';

// target element that will be dismissed
const $targetEl: HTMLElement = document.getElementById('targetElement');

// optional trigger element
const $triggerEl: HTMLElement = document.getElementById('triggerElement');

// options object
const options: DismissOptions = {
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out',

  // callback functions
  onHide: (context, targetEl) => {
    console.log('element has been dismissed')
    console.log(targetEl)
  }
};

if ($targetEl) {
    /*
    * targetEl: required
    * triggerEl: optional
    * options: optional
    */
    const dismiss: DismissInterface = new Dismiss($targetEl, $triggerEl, options);

    // programatically hide it
    // dismiss.hide();

}