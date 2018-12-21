import { x, currentOnly } from 'xatto'

import * as Chart from 'chart.js'

import { default as jQuery } from 'jquery'

import { deepSet, flattenObject, parseJson } from './helpers'

export function ChartX ({ xa, ...props }: any, children) {
  return (
    <canvas
      {...props}

      oncreate={onCreate}
      onupdate={onUpdate}
      tier={props}
    >
      {children}
    </canvas>
  )
}

function onCreate (context, detail, props, event) {
  onCreateMain(context, detail, props, event)

  if (props.tier.oncreate) {
    return props.tier.oncreate(context, detail, props, event)
  }
}

const onCreateMain = currentOnly((context, detail, props, event) => {
  const element = event.target
  const ctx = element.getContext('2d')
  const $element = jQuery(element)
  const options = $element.data() || {}
  const type = props.type || 'line'
  const data = parseJson(props.data) || {}

  // // chart.js v2 and newer
  // element.chart = new ChartJS(ctx, {
  //   type,
  //   data,
  //   options
  // })

  const method = type[0].toUpperCase() + type.slice(1)
  element.chart = new Chart(ctx)[method](data, options)
})

function onUpdate (context, detail, props, event) {
  onUpdateMain(context, detail, props, event)

  if (props.tier.onupdate) {
    return props.tier.onupdate(context, detail, props, event)
  }
}

const onUpdateMain = currentOnly((context, detail, props, event) => {
  const element = event.target
  const data: any = parseJson(props.data) || {}

  // // chart.js v2.6 and newer
  // element.chart.data = data

  const datasets = flattenObject(data.datasets || {})

  for (const key in datasets) {
    if (datasets.hasOwnProperty(key)) {
      const value = datasets[key]
      deepSet(element.chart.datasets, key, value)
    }
  }

  element.chart.update()
})
