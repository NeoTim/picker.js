/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
export const NAME = 'datepicker'
export const DATA_KEY = `.${NAME}`
export const EVENT_KEY = `.${DATA_KEY}`
export const DATA_API_KEY = '.data-api'
export const JQUERY_NAME = NAME // `bmd${NAME.charAt(0).toUpperCase() + NAME.slice(1)}`

export const Event = {

  DATE_CLEAR: `date.clear${EVENT_KEY}`,
  DATE_CHANGE: `date.change${EVENT_KEY}`,

  MONTH_CHANGE: `month.change${EVENT_KEY}`,
  YEAR_CHANGE: `year.change${EVENT_KEY}`,
  DECADE_CHANGE: `decade.change${EVENT_KEY}`,
  CENTURY_CHANGE: `century.change${EVENT_KEY}`,


    SHOW           : `show${EVENT_KEY}`,
  //  SHOWN          : `shown${EVENT_KEY}`,
    HIDE           : `hide${EVENT_KEY}`,
  //  HIDDEN         : `hidden${EVENT_KEY}`,
  CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`
}

export const ClassPrefix = {
  ORIENT: `${NAME}-orient`
}

// `${NAME}-`
export const ClassName = {
  NAME: NAME,
  PREV: 'prev',
  NEXT: 'next',
  DOW: `dow`,
  TITLE: `${NAME}-title`,
  SWITCH: `${NAME}-switch`,
  TODAY: `today`,
  CLEAR: `clear`,
  SELECTED: `selected`,
  HIGHLIGHTED: `highlighted`,
  DISABLED: `disabled`,
  ACTIVE: `active`,
  FOCUSED: `focused`,
  NEW: `new`,
  OLD: `old`,

  DAY: 'day',
  MONTH: 'month',

  DAYS: `${NAME}-days`,
  MONTHS: `${NAME}-months`,
  YEARS: `${NAME}-years`,
  DECADES: `${NAME}-decades`,
  CENTURIES: `${NAME}-centuries`,

  // range
  RANGE: 'range',
  RANGE_START: 'range-start',
  RANGE_END: 'range-end',

  // orientation
  TOP: `${ClassPrefix.ORIENT}-top`,
  BOTTOM: `${ClassPrefix.ORIENT}-bottom`,
  RIGHT: `${ClassPrefix.ORIENT}-right`,
  LEFT: `${ClassPrefix.ORIENT}-left`

}

export const Selector = {
  DATA_PROVIDE: '[data-provide="datepicker"]',
  PREV: `.${ClassName.PREV}`,
  NEXT: `.${ClassName.NEXT}`,
  TITLE: `.${ClassName.TITLE}`,
  SWITCH: `.${ClassName.SWITCH}`,

  DAYS: `.${ClassName.DAYS}`,
  MONTHS: `.${ClassName.MONTHS}`,
  YEARS: `.${ClassName.YEARS}`,
  DECADES: `.${ClassName.DECADES}`,
  CENTURIES: `.${ClassName.CENTURIES}`
}


export const Visibility = {
  HIDDEN: {visibility: 'hidden'},
  VISIBLE: {visibility: 'visible'}
}