import { x } from 'xatto'

import * as jqueryProxy from 'jquery'
const $ = jqueryProxy

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
