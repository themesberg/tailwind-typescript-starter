import { Collapse } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';

// set the target element that will be collapsed or expanded (eg. navbar menu)
const $targetEl: HTMLElement = document.getElementById('targetEl');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl: HTMLElement = document.getElementById('triggerEl');

// optional options with default values and callback functions
const options: CollapseOptions = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};

if ($targetEl) {
    /*
    * targetEl: required
    * options: optional
    */
    const collapse: CollapseInterface = new Collapse($targetEl, $triggerEl, options);

    // show the target element
    collapse.expand();
}