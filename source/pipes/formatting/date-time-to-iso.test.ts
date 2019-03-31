import { DateTime } from 'luxon'
import { DateTimeToIsoPipe } from './date-time-to-iso'

describe('DateTimeToIsoPipe', () => {
  const pipe = new DateTimeToIsoPipe()

  describe('#transform', () => {
    it('transforms a DateTime into an ISO 8601 string', () => {
      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00')))
        .toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}[+-]\d{2}:\d{2}$/)
    })
  })
})
