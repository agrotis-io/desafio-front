export function get (name='') {
  let arr = JSON.parse(localStorage.getItem('agrotis_docs'))
  if (arr == null) {
    localStorage.setItem('agrotis_docs', JSON.stringify([]))
    return []
  }
  return arr.filter(
    el => { return el.name.includes(name) }
  )
}

export function post ( item ) {
  localStorage.setItem('agrotis_docs', JSON.stringify([ ...get(), item ]))
}