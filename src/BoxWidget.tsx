import { x } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function BoxWidget ({ xa, ...attrs }, children) {
  if (null == attrs.class) {
    attrs.class = ''
  }
  attrs.class += ' box'

  return (
    <div oncreate={onCreate} {...attrs}>
      {children}
    </div>
  )
}

function onCreate (element) {
  jQuery(element).boxWidget()
}
