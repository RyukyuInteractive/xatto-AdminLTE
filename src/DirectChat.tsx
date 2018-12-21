import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'admin-lte'

export function DirectChat ({ xa, ...attrs }: any, children) {
  return (
    <div oncreate={onCreate} {...attrs}>
      {children}
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
  jQuery(event.target).directChat()
})
