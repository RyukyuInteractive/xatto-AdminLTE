import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function BoxWidget ({ xa, ...props }, children) {
  return (
    <div
      {...props}

      class={[props.class, 'box'].filter(Boolean).join(' ')}
      oncreate={onCreate}
      tier={props}
    >
      {children}
    </div>
  )
}

const onCreate = currentOnly((context, detail, props, event) => {
  jQuery(event.target).boxWidget()

  if (props.tier.oncreate) {
    props.tier.oncreate(context, detail, props, event)
  }
})
