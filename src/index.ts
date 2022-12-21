import { Modal } from 'flowbite-ts-test'

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modal = new Modal($modalElement);
$buttonElement.addEventListener('click', () => modal.toggle());