import { CopyClipboard } from 'flowbite';
import type { CopyClipboardOptions, CopyClipboardInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the trigger element which will be clicked (ie. a button or text)
const $triggerEl: HTMLElement = document.getElementById('copy-clipboard-button') as HTMLElement;

// set the target element where the text will be copied from (ie. input field, code block)
const $targetEl: HTMLInputElement = document.getElementById('copy-text') as HTMLInputElement;

// optional options with default values and callback functions
const options: CopyClipboardOptions = {
    contentType: 'input',
    htmlEntities: false, // infinite
    onCopy: () => {
        console.log('text copied successfully!');
    }
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'copy-clipboard-example',
  override: true
};

if ($triggerEl && $targetEl) {
    /*
    * $triggerEl: required
    * $targetEl: required
    * options: optional
    * instanceOptions: optional
    */
    const clipboard: CopyClipboardInterface = new CopyClipboard(
        $triggerEl,
        $targetEl,
        options,
        instanceOptions
    );

    // copy the value of the target element
    clipboard.copy();
}
