type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer


const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

const pageview = (url: string) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url
  })
}


export { GTM_ID, pageview}