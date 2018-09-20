export const openPage = (url) => {
  browser.url(url)
}

export const title = () => {
  return browser.getTitle()
}