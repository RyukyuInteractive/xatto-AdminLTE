import { x } from 'xatto'

import { default as $ } from 'jquery'

import 'admin-lte'

export function BoxRefresh ({ xa, ...attrs }, children) {
  return (
    <div oncreate={onCreate} {...attrs}>
      {children}
    </div>
  )
}

function onCreate (element) {
  $(element).boxRefresh()
}
