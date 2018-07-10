import { x } from 'xatto'

import { default as $ } from 'jquery'

import 'admin-lte'

export function Tree ({ xa, ...attrs }, children) {
  return (
    <ul oncreate={onCreate} {...attrs}>
      {children}
    </ul>
  )
}

function onCreate (element) {
  $(element).tree()
}
