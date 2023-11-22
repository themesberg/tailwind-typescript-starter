import { InputCounter } from 'flowbite';
import type { InputCounterOptions, InputCounterInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the target element of the input field
const $targetEl: HTMLInputElement = document.getElementById('counter-input-example') as HTMLInputElement;

// optionally set the increment and decrement elements
const $incrementEl: HTMLElement = document.getElementById('increment-button');

const $decrementEl: HTMLElement = document.getElementById('decrement-button');

// optional options with default values and callback functions
const options: InputCounterOptions = {
    minValue: 0,
    maxValue: null, // infinite
    onIncrement: () => {
        console.log('input field value has been incremented');
    },
    onDecrement: () => {
        console.log('input field value has been decremented');
    }
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'counter-input-example',
  override: true
};

if ($targetEl) {
    /*
    * $targetEl: required
    * $incrementEl: optional
    * $decrementEl: optional
    * options: optional
    * instanceOptions: optional
    */
    const counterInput: InputCounterInterface = new InputCounter(
        $targetEl,
        $incrementEl,
        $decrementEl,
        options,
        instanceOptions
    );
}