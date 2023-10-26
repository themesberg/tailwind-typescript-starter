import { Modal } from 'flowbite-2.0'
import type { ModalOptions, ModalInterface } from 'flowbite-2.0'

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modalOptions: ModalOptions = {
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
}

if ($modalElement) {
    const modal: ModalInterface = new Modal($modalElement, modalOptions);
    $buttonElement.addEventListener('click', () => modal.toggle());
    
    modal.show();
}
