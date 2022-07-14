export default function createElement(type,props,...childred){
  return {
    type,
    props,
    childred
  }
}