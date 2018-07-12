import { x } from 'xatto'

import { default as jQuery } from 'jquery'

import 'jquery-sparkline'

import { parseJson } from './helpers'

export function Sparklines ({ xa, ...attrs }, children) {
  return (
    <div
      {...attrs}
      oncreate={onCreateFactory(attrs)}
    >
      {children}
    </div>
  )
}

function onCreateFactory (attrs) {
  return (element) => onCreate(element, attrs)
}

function onCreate (element, attrs) {
  const $element = jQuery(element)
  const data = parseJson(attrs.data) || 'html'
  const options = $element.data() || {}
  const type = attrs.type || 'bar'

  $element.sparkline(data, {
    type,
    ...options
  })
}
