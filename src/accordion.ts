import { Accordion } from 'flowbite';
import type { AccordionOptions, AccordionItem, AccordionInterface } from 'flowbite';

const accordionElement = document.getElementById('accordion-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems: AccordionItem[] = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1'),
        targetEl: document.querySelector('#accordion-example-body-1'),
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2'),
        targetEl: document.querySelector('#accordion-example-body-2'),
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3'),
        targetEl: document.querySelector('#accordion-example-body-3'),
        active: false
    }
];

// options with default values
const options: AccordionOptions = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

if (document.querySelector('#accordion-example-heading-1')) {
    /*
    * accordionItems: array of accordion item objects
    * options: optional
    */
    const accordion: AccordionInterface = new Accordion(accordionElement, accordionItems, options);

    // open accordion item based on id
    accordion.open('accordion-example-heading-2');
}

