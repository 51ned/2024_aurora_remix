import { useEffect, useId } from 'react'
import { useLocation } from '@remix-run/react'

import * as gtag from 'utils/gtm-handle'


export function GTM({ gtmId }: { gtmId: string | undefined }) {
  const location = useLocation()
  const scriptId = useId()
  let gtmScript: HTMLScriptElement

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' || gtmId?.length) {
      if (!document.getElementById(scriptId)) {
        gtmScript = document.createElement('script')

        gtmScript.defer = true
        gtmScript.id = scriptId
        gtmScript.innerHTML = `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `

        document.head.appendChild(gtmScript)
      }

      return () => {
        document.head.removeChild(gtmScript)
      }
    }
  }, [location, gtmId])
  
  // useEffect(() => {
  //   if (gtmId?.length) {
  //     gtag.pageview(location.pathname, gtmId)
  //   }
  // }, [location, gtmId])

  return process.env.NODE_ENV === 'development' || !gtmId ? null : (
    <>
      <noscript>
        <iframe
          height='0'
          src={`https://www.googletagmanager.com/ns.html?id=`}
          style={{ display: 'none', visibility: 'hidden' }}
          width='0'
        />
      </noscript>
    </>
  )
}
