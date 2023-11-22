import { Dial } from 'flowbite';
import type { DialOptions, DialInterface } from 'flowbite';

// parent element wrapping the speed dial
const $parentEl: HTMLElement = document.getElementById('dialParent')

// the trigger element that can be clicked or hovered
const $triggerEl: HTMLElement = document.getElementById('dialButton');

// the content wrapping element of menu items or buttons
const $targetEl: HTMLElement = document.getElementById('dialContent');

// options with default values
const options: DialOptions = {
  triggerType: 'hover',
  onHide: () => {
      console.log('speed dial is shown');
  },
  onShow: () => {
      console.log('speed dial is hidden');
  },
  onToggle: () => {
    console.log('speed dial is toggled')
  }
};

if ($parentEl) {
    /*
    * parentEl: required
    * targetEl: required
    * triggerEl: required
    * options: optional
    */
    const dial: DialInterface = new Dial($parentEl, $triggerEl, $targetEl, options);

    // show the speed dial
    dial.show();
}