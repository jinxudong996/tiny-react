import diff from './diff'

export default function render(virtualDom,container,oldDOM){
  diff(virtualDom,container,oldDOM)
}