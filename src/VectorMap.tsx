import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'jvectormap'

import { parseJson } from './helpers'

export function VectorMap ({ xa, ...props }: any, children) {
  return (
    <div
      {...props}

      oncreate={onCreate}
      onupdate={onUpdate}
      tier={props}
    />
  )
}

function onCreate (context, detail, props, event) {
  onCreateMain(context, detail, props, event)

  if (props.tier.oncreate) {
    return props.tier.oncreate(context, detail, props, event)
  }
}

const onCreateMain = currentOnly((context, detail, props, event) => {
  const $element = jQuery(event.target)
  const data = parseJson(props.data) || {}

  $element.vectorMap(data)
})

const settables = {
  backgroundColor: 1,
  focus: 1
}

function onUpdate (context, detail, props, event) {
  onUpdateMain(context, detail, props, event)

  if (props.tier.onupdate) {
    return props.tier.onupdate(context, detail, props, event)
  }
}

const onUpdateMain = currentOnly((context, detail, props, event) => {
  const $element = jQuery(event.target)
  const data = parseJson(props.data) || {}

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key]
      if (settables[key]) {
        $element.vectorMap('set', key, value)
      }
    }
  }
})
