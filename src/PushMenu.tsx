import { x } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function PushMenu ({ xa, ...attrs }, children) {
  return (
    <div oncreate={onCreate} {...attrs}>
      {children}
    </div>
  )
}

function onCreate (element) {
  jQuery(element).pushMenu()
}
