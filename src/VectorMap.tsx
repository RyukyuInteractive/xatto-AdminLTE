import { x } from 'xatto'

import * as jqueryProxy from 'jquery'
const $ = jqueryProxy

import 'jvectormap'

import { parseJson } from './helpers'

export function VectorMap (attrs, children) {
  return (
    <div
      {...attrs}
      oncreate={onCreateFactory(attrs)}
      onupdate={onUpdateFactory(attrs)}
    />
  )
}

function onCreateFactory (attrs) {
  return (element) => onCreate(element, attrs)
}

function onCreate (element, attrs) {
  const $element = $(element)
  const data = parseJson(attrs.data) || {}

  $element.vectorMap(data)
}

const settables = {
  backgroundColor: 1,
  focus: 1
}

function onUpdateFactory (attrs) {
  return (element) => onUpdate(element, attrs)
}

function onUpdate (element, attrs) {
  const $element = $(element)
  const data = parseJson(attrs.data) || {}

  Object.entries(data).map(([key, value]) => {
    if (settables[key]) {
      $element.vectorMap('set', key, value)
    }
  })
}
