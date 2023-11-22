import { Drawer } from 'flowbite';
import type { DrawerOptions, DrawerInterface } from 'flowbite';

// set the drawer menu element
const $targetEl: HTMLElement = document.getElementById('drawer-js-example');

// options with default values
const options: DrawerOptions = {
  placement: 'right',
  backdrop: true,
  bodyScrolling: false,
  edge: false,
  edgeOffset: '',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
  onHide: () => {
      console.log('drawer is hidden');
  },
  onShow: () => {
      console.log('drawer is shown');
  },
  onToggle: () => {
      console.log('drawer has been toggled');
  }
};

if ($targetEl) {
    /*
    * targetEl: required
    * options: optional
    */
    const drawer: DrawerInterface = new Drawer($targetEl, options);

    // show the drawer
    drawer.show();
}