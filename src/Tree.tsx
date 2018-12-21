import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function Tree ({ xa, ...props }: any, children) {
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

function onCreate (context, detail, props, event) {
  onCreateMain(context, detail, props, event)

  if (props.tier.oncreate) {
    return props.tier.oncreate(context, detail, props, event)
  }
}

const onCreateMain = currentOnly((context, detail, props, event) => {
  jQuery(event.target).tree()
})
