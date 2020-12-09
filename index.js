import * as Sentry from '@sentry/node'
import pkg from '@sentry/tracing'
const { Span } = pkg

Span.fromTraceparent('string')

