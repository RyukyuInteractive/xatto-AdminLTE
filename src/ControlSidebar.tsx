import { x } from 'xatto'

import { default as $ } from 'jquery'

import 'admin-lte'

export function ControlSidebar ({ xa, operation, ...attrs }, children) {
  return (
    <div oncreate={onCreateFactory(operation)} {...attrs}>
      {children}
    </div>
  )
}

function onCreateFactory (operation) {
  return (element) => {
    $(element).ConsrolSidebar(operation || 'collapse')
  }
}
