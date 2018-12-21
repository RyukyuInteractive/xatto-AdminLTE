import { x, currentOnly } from 'xatto'

import { default as jQuery } from 'jquery'

import 'jquery-sparkline'

import { parseJson } from './helpers'

export function Sparklines ({ xa, ...props }: any, children) {
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

function onCreate (context, detail, props, event) {
  onCreateMain(context, detail, props, event)

  if (props.tier.oncreate) {
    return props.tier.oncreate(context, detail, props, event)
  }
}

const onCreateMain = currentOnly((context, detail, props, event) => {
  const $element = jQuery(event.target)
  const data = parseJson(props.data) || 'html'
  const options = $element.data() || {}
  const type = props.type || 'bar'

  $element.sparkline(data, {
    type,
    ...options
  })
})
