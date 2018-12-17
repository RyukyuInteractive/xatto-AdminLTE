import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function Tree ({ xa, ...props }, children) {
  return (
    <ul
      {...props}

      oncreate={onCreate}
      tier={props}
    >
      {children}
    </ul>
  )
}

const onCreate = currentOnly((context, detail, props, event) => {
  jQuery(event.target).tree()

  if (props.tier.oncreate) {
    props.tier.oncreate(context, detail, props, event)
  }
})
