import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function DirectChat ({ xa, ...attrs }, children) {
  return (
    <div oncreate={onCreate} {...attrs}>
      {children}
    </div>
  )
}

const onCreate = currentOnly((context, detail, props, event) => {
  jQuery(event.target).directChat()

  if (props.tier.oncreate) {
    props.tier.oncreate(context, detail, props, event)
  }
})
