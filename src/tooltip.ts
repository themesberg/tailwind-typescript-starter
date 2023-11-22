import { Tooltip } from 'flowbite';
import type { TooltipOptions, TooltipInterface } from 'flowbite';

// set the tooltip content element
const $targetEl: HTMLElement = document.getElementById('tooltipContent');

// set the element that trigger the tooltip using hover or click
const $triggerEl: HTMLElement = document.getElementById('tooltipButton');

// options with default values
const options: TooltipOptions = {
  placement: 'top',
  triggerType: 'hover',
  onHide: () => {
      console.log('tooltip is shown');
  },
  onShow: () => {
      console.log('tooltip is hidden');
  }
};

if ($targetEl) {
    /*
    * targetEl: required
    * triggerEl: required
    * options: optional
    */
    const tooltip: TooltipInterface = new Tooltip($targetEl, $triggerEl, options);

    // show the tooltip
    tooltip.show();
}