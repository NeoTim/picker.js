import {$, $input, safeDispose, fromData, assertData, findPopper, assertNotFound, assertVisible, assertHidden, assertDatesEqual} from '../support'
import {Selector, ClassName} from '../../js/constants'
import moment from 'moment'

const FORMAT = 'DD-MM-YYYY'
describe('Datepicker', function () {

  it('should be able to jquery find element', () => {
    expect($input.length).to.equal(1)
  })

  describe('Methods', function () {

    let dp
    beforeEach(() => {
      assertData(true)
      $input.val('31-03-2011').datepicker({format: FORMAT})
      dp = assertData()
      //expect(dp.config.format, 'config format changed? in hook').to.equal(FORMAT)
    })

    afterEach(() => {
      safeDispose()
      dp = null
    })

    it('should be able to instantiate', () => {
      expect($input.length).to.equal(1)
      $input.datepicker()
    })

    it('should set the format', () => {
      $input.datepicker({format: FORMAT})
      let dp = assertData()
      expect(dp.config.format, 'config format test').to.equal(FORMAT)
    })

    it('should show and hide', () => {
      assertNotFound(Selector.POPPER)
      expect(dp.show()).to.equal(dp) // chainable
      assertVisible(Selector.POPPER)
      expect(dp.hide()).to.equal(dp) // chainable
      assertNotFound(Selector.POPPER)
    })

    //----------------------------------------
    // #update
    const assertUpdateDates = (dateString, dayOfMonth) => {
      expect($input.val()).to.equal(dateString) // html value
      expect(dp.getDateFormatted()).to.equal(dateString) // html value

      assertDatesEqual(dp.getDate(), moment(dateString, FORMAT))

      dp.show() // gotta show it, otherwise it isn't in the dom
      let $date = $(`${Selector.DAYS} td:contains(${dayOfMonth})`)
      expect($date, `Day ${dayOfMonth} to be active`).to.have.class(ClassName.ACTIVE)
    }

    it('should update with a string', () => {
      const dateString = '21-04-2012'
      expect(dp.update(dateString)).to.equal(dp) // chainable
      assertUpdateDates(dateString, '21')
    })

    it('should update with a moment', () => {
      const dateString = '21-04-2012'
      const mom = moment(dateString, FORMAT)
      expect(mom.isValid()).to.be.true
      expect(dp.update(mom)).to.equal(dp) // chainable
      assertUpdateDates(dateString, '21')
    })
  })
})
