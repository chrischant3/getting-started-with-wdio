import { expect } from 'chai'
const {defineSupportCode} = require('cucumber')
import * as HomePage from '../support/pages/homePage'


defineSupportCode(({Given, Then}) => {
  Given(
    /^I visit "([^"]*)?"$/, function (url) {
      HomePage.openPage(url)
    })

  Then(
    /^the page title "([^"]*)?" is present$/, function (title) {
      expect(HomePage.title()).to.equal(title)
    })
})