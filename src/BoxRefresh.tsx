import { x } from 'xatto'

import * as jqueryProxy from 'jquery'
const $ = jqueryProxy

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
