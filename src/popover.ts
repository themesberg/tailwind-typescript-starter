import { Popover } from "flowbite-2.0";
import type { PopoverOptions, PopoverInterface } from "flowbite-2.0";

// set the popover content element
const $targetEl: HTMLElement = document.getElementById('popoverContent');

// set the element that trigger the popover using hover or click
const $triggerEl: HTMLElement = document.getElementById('popoverButton');

// options with default values
const options: PopoverOptions = {
  placement: 'top',
  triggerType: 'hover',
  offset: 10,
  onHide: () => {
      console.log('popover is shown');
  },
  onShow: () => {
      console.log('popover is hidden');
  }
};

if ($targetEl) {
    /*
    * targetEl: required
    * triggerEl: required
    * options: optional
    */
    const popover: PopoverInterface = new Popover($targetEl, $triggerEl, options);

    popover.show();
}