import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'bootstrap'

export function Modal ({ xa, ...props }: any, children) {
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

function onCreate (context, detail, props, event) {
  onCreateMain(context, detail, props, event)

  if (props.tier.oncreate) {
    return props.tier.oncreate(context, detail, props, event)
  }
}

const onCreateMain = currentOnly((context, detail, props, event) => {
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
})

function onRemove (context, detail, props, event) {
  onRemoveMain(context, detail, props, event)

  if (props.tier.onremove) {
    return props.tier.onremove(context, detail, props, event)
  }
}

const onRemoveMain = currentOnly((context, detail, props, event) => {
  const $element = jQuery(event.target)
  $element.one('hidden.bs.modal', detail.done)
  $element.modal('hide')

  if (props.tier.onremove) {
    return props.tier.onremove(context, detail, props, event)
  }
})
