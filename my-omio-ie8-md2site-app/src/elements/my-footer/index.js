import { define, WeElement } from 'omi'

define('my-footer', class extends WeElement {
  static css = require('./_index.css')

  static use = [
    'position',
    'menu'
  ]

  render() {
    const [
      position,
      menus
    ] = this.using
    const pre = this.store.getPre()
    const next = this.store.getNext()
    // console.log(pre,next)
    return (
      <div class='ft'>
        {pre &&<a href={'#/' + pre.md + `?index=${pre.index}&subIndex=${pre.subIndex}`} class='pre'>← {pre.name}</a>}
        {next &&<a href={'#/' + next.md + `?index=${next.index}&subIndex=${next.subIndex}`} class='next'>{next.name} →</a>}
      </div>
    )
  }

})
