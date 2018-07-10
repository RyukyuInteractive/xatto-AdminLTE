import { x } from 'xatto'

import * as jqueryProxy from 'jquery'
const $ = jqueryProxy

import 'admin-lte'

export function Layout ({ xa, ...attrs }, children) {
  return (
    <div oncreate={onCreate} {...attrs}>
      <div class="wrapper">{children}</div>
    </div>
  )
}

function onCreate (element) {
  $(element).layout()
}
