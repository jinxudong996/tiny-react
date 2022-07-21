import createDOMElement from './createDOMElement'

export default function mountNativeElement(virtualDom,container){
  let newElement = createDOMElement(virtualDom)
  

  container.appendChild(newElement)
}