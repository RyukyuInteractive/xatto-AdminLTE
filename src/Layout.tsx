import { x } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function Layout ({ xa, ...attrs }, children) {
  return (
    <div oncreate={onCreate} {...attrs}>
      <div class="wrapper">{children}</div>
    </div>
  )
}

function onCreate (element) {
  jQuery(element).layout()
}
