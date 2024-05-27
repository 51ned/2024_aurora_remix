import { useEffect } from 'react'
import { useLocation } from '@remix-run/react'

import * as gTag from 'utils/gtm-handle'


export function GTM({ gtmId }: { gtmId: string | undefined }) {
  const location = useLocation()
  const scriptId = 'gtm'
  
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && gtmId?.length) {
      if (!document.getElementById(scriptId)) {
        const gtmScript = document.createElement('script')

        gtmScript.defer = true
        gtmScript.id = 'gtm'

        gtmScript.innerHTML = `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js'+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `

        document.head.appendChild(gtmScript)
        gtmScript.onload = () => gTag.pageview(location.pathname, gtmId)
      } else {
        gTag.pageview(location.pathname, gtmId)
      }
    }
  }, [location, gtmId])
  
  return process.env.NODE_ENV !== 'development' || gtmId?.length ? null : (
    <>
      <noscript>
        <iframe
          height='0'
          src={`https://www.googletagmanager.com/ns.html`}
          style={{ display: 'none', visibility: 'hidden' }}
          width='0'
        />
      </noscript>
    </>
  )
}
