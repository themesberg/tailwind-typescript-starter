import { Modal } from 'flowbite-ts-test'
import type { ModalOptions, ModalInterface } from 'flowbite-ts-test'

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modalOptions: ModalOptions = {
    // placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
$buttonElement.addEventListener('click', () => modal.toggle());

modal.show();