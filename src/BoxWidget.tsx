import { x } from 'xatto'

import * as jqueryProxy from 'jquery'
const $ = jqueryProxy

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
  $(element).boxWidget()
}
