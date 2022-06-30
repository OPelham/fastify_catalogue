'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('example is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/docs'
  })
  t.equal(res.payload, 'swagger doc will show here')
})