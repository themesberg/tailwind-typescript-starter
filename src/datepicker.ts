import { Datepicker } from 'flowbite';
import type { DatepickerOptions, DatepickerInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the target element of the input field or div
const $datepickerEl: HTMLInputElement = document.getElementById('datepicker-custom') as HTMLInputElement;

// optional options with default values and callback functions
const options: DatepickerOptions = {
    defaultDatepickerId: null,
    autohide: false,
    format: 'mm/dd/yyyy',
    maxDate: null,
    minDate: null,
    orientation: 'bottom',
    buttons: false,
    autoSelectToday: 0,
    title: null,
    language: 'en',
    rangePicker: false,
    onShow: () => {},
    onHide: () => {},
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'datepicker-custom-example',
  override: true
};

if ($datepickerEl) {
    /*
    * $datepickerEl: required
    * options: optional
    * instanceOptions: optional
    */
    const datepicker: DatepickerInterface = new Datepicker(
        $datepickerEl,
        options,
        instanceOptions
    );
}