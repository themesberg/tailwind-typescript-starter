# Tailwind CSS + TypeScript + Flowbite Starter

This is a starter repository that you can use to see examples and get started with working with the Tailwind CSS, Flowbite components, and TypeScript. Read this [guide on Flowbite to learn more](https://flowbite.com/docs/getting-started/typescript/) on how this repository works.

## Getting started

Make sure that you have Node.js installed on your project. Run the following command to install all dependencies:

```
npm install
```

Run this command to compile and watch for changes for Tailwind CSS:

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Run this command to compile and bundle the TypeScript code into `app-bundle.js`:

```
npx webpack --watch
```

Open up the `index.html` file locally and you can see a list of components that are initialised programatically via the TypeScript files that you can find inside the `src/` folder.

For example, this is the code that creates the modal component inside the `modal.ts` file:

```
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modalOptions: ModalOptions = {
    placement: 'top-right'
}

if ($modalElement) {
    const modal: ModalInterface = new Modal($modalElement, modalOptions);
    $buttonElement.addEventListener('click', () => modal.toggle());
    
    modal.show();
}
```

## License

This project is open-source under the MIT license.
