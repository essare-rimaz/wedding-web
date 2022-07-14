const { DateTime, Duration, Settings, Interval } = require('luxon')

// Setting default timezone
Settings.defaultLocale = 'cs-CZ'
Settings.defaultZone = 'Europe/Prague'

// Base class containing human date data
class HumanDateItem {
  constructor (data, index) {
    [this.count, this.label] = data
    this.id = index
  }
}

class HumanDate {
  constructor (duration) {
    let parsedDate = duration.toHuman({ maximumFractionDigits: 0 }).split(', ')
    parsedDate = parsedDate.map((x, index) => new HumanDateItem(x.split(' '), index))

    this.duration = duration
    this.formatted = parsedDate
  }
}

export { DateTime, Duration, Settings, HumanDate, Interval }
