import { createServer } from 'http'
import { listen } from 'listhen'
import { createApp } from 'h3'

import { handler } from './dist/server/entry.mjs';

const app = createApp()
app.use(handler)

listen(app, {
    port: process.env.PORT || 3210,
    open: true
})