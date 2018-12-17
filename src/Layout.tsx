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

function onCreate (context, detail, props, event) {
  onCreateMain(context, detail, props, event)

  if (props.tier.oncreate) {
    return props.tier.oncreate(context, detail, props, event)
  }
}

const onCreateMain = currentOnly((context, detail, props, event) => {
  jQuery(event.target).layout()
})
