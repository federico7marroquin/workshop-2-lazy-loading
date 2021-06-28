import { registerImage } from './lazy'

/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/



const baseUrl ='https://randomfox.ca/images/'
const appNode = document.querySelector('#images')
 const loadFoxyImage = () => {

    const container = document.createElement('div')
    container.className = 'p-4'

    const image = document.createElement('img')
    image.dataset.src = `${baseUrl}${Math.floor(Math.random()*121 + 1)}.jpg`
    image.className = 'mx-auto'
    image.width = '320'
    image.alt = 'foxie'


    container.append(image)
           
    appNode.append(container)
    registerImage(container)
 }

 const cleanFoxyImages = () => {
   [ ...appNode.childNodes].forEach(foxyImage => foxyImage.remove())
 }

 const button = document.createElement('button')
 button.onclick = () => loadFoxyImage() 
 button.innerHTML = 'Carga un zorrito'
 button.className = 'mt-5 p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto'
 
 const cleanButton = document.createElement('button')
 cleanButton.onclick = () => cleanFoxyImages() 
 cleanButton.innerHTML = 'Borrar zorritos'
 cleanButton.className = 'mt-5 p-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block mx-auto'
 
 const buttonsDiv = document.createElement('div')
 buttonsDiv.append(button, cleanButton)
 
 appNode.insertAdjacentElement( 'beforebegin', buttonsDiv)




