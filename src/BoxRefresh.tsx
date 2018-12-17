import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function BoxRefresh ({ xa, ...props }, children) {
  return (
    <div
      {...props}

      oncreate={onCreate}
      tier={props}
    >
      {children}
    </div>
  )
}

const onCreate = currentOnly((context, detail, props, event) => {
  jQuery(event.target).boxRefresh()

  if (props.tier.oncreate) {
    props.tier.oncreate(context, detail, props, event)
  }
})
