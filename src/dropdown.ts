import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';

// set the dropdown menu element
const $targetEl: HTMLElement = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl: HTMLElement = document.getElementById('dropdownButton');

// options with default values
const options: DropdownOptions = {
  placement: 'bottom',
  offsetSkidding: 0,
  offsetDistance: 10,
  onHide: () => {
      console.log('dropdown has been hidden');
  },
  onShow: () => {
      console.log('dropdown has been shown');
  }
};

if ($targetEl) {
    /*
    * targetEl: required
    * triggerEl: required
    * options: optional
    */
    const dropdown: DropdownInterface = new Dropdown($targetEl, $triggerEl, options);

    // show the dropdown
    dropdown.show();
}