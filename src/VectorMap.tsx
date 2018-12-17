import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'jvectormap'

import { parseJson } from './helpers'

export function VectorMap ({ xa, ...props }, children) {
  return (
    <div
      {...props}

      oncreate={onCreate}
      onupdate={onUpdate}
      tier={props}
    />
  )
}

const onCreate = currentOnly((context, detail, props, event) => {
  const $element = jQuery(event.target)
  const data = parseJson(props.data) || {}

  $element.vectorMap(data)

  if (props.tier.oncreate) {
    props.tier.oncreate(context, detail, props, event)
  }
})

const settables = {
  backgroundColor: 1,
  focus: 1
}

const onUpdate = currentOnly((context, detail, props, event) => {
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

  if (props.tier.onupdate) {
    props.tier.onupdate(context, detail, props, event)
  }
})
