import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function Layout ({ xa, ...props }, children) {
  return (
    <div
      {...props}

      oncreate={onCreate}
      tier={props}
    >
      <div class="wrapper">{children}</div>
    </div>
  )
}

const onCreate = currentOnly((context, detail, props, event) => {
  jQuery(event.target).layout()

  if (props.tier.oncreate) {
    props.tier.oncreate(context, detail, props, event)
  }
})
