import { x } from 'xatto'

import ChartJS from 'chart.js'

import { default as $ } from 'jquery'

import { deepSet, flattenObject, parseJson } from './helpers'

export function Chart (attrs, children) {
  return (
    <canvas
      {...attrs}
      oncreate={onCreateFactory(attrs)}
      onupdate={onUpdateFactory(attrs)}
    >
      {children}
    </canvas>
  )
}

function onCreateFactory (attrs) {
  return (element) => onCreate(element, attrs)
}

function onCreate (element, attrs) {
  const ctx = element.getContext('2d')
  const $element = $(element)
  const options = $element.data() || {}
  const type = attrs.type || 'line'
  const data = parseJson(attrs.data) || {}

  // // chart.js v2 and newer
  // element.chart = new ChartJS(ctx, {
  //   type,
  //   data,
  //   options
  // })

  const method = type[0].toUpperCase() + type.slice(1)
  element.chart = new ChartJS(ctx)[method](data, options)
}

function onUpdateFactory (attrs) {
  return (element) => onUpdate(element, attrs)
}

function onUpdate (element, attrs) {
  const data = parseJson(attrs.data) || {}

  // // chart.js v2.6 and newer
  // element.chart.data = data

  Object.entries(flattenObject(data.datasets || {})).map(([key, value]) =>
    deepSet(element.chart.datasets, key, value)
  )

  element.chart.update()
}