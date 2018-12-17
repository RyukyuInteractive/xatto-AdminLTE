import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'bootstrap'

export function Modal ({ xa, ...props }, children) {
  return (
    <div
      role="dialog"
      tabindex="-1"

      {...props}

      class={props.class + ' modal fade'}
      oncreate={onCreate}
      onremove={onRemove}
      tier={props}
    >
      {children}
    </div>
  )
}

const eventsMap = {
  hidden: 'hidden.bs.modal',
  hide: 'hide.bs.modal',
  loaded: 'loaded.bs.modal',
  show: 'show.bs.modal',
  shown: 'shown.bs.modal'
}

const onCreate = currentOnly((context, detail, props, event) => {
  const $element = jQuery(event.target)
  $element.modal()

  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const value = props[key]
      if (eventsMap[key]) {
        $element.on(eventsMap[key], value)
      }
    }
  }

  if (props.tier.oncreate) {
    props.tier.oncreate(context, detail, props, event)
  }
})

const onRemove = currentOnly((context, detail, props, event) => {
  const $element = jQuery(event.target)
  $element.one('hidden.bs.modal', detail.done)
  $element.modal('hide')

  if (props.tier.onremove) {
    props.tier.onremove(context, detail, props, event)
  }
})
