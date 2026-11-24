import { useEffect } from 'react'
import { JUDGEME } from '../config'

declare global {
  interface Window {
    jdgm?: Record<string, unknown>
    jdgmCacheServer?: { reloadAll: () => void }
  }
}

const SCRIPT_ID = 'judgeme-preloader'

// Judge.me's loader scans the page once when it loads. This site switches
// pages without a full reload, so on later visits we ask it to rescan.
function useJudgeMe() {
  useEffect(() => {
    if (window.jdgmCacheServer) {
      window.jdgmCacheServer.reloadAll()
      return
    }
    if (document.getElementById(SCRIPT_ID)) return

    window.jdgm = {
      ...window.jdgm,
      SHOP_DOMAIN: JUDGEME.shopDomain,
      PLATFORM: 'shopify',
      PUBLIC_TOKEN: JUDGEME.publicToken,
    }
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.dataset.cfasync = 'false'
    script.src = 'https://cdnwidget.judge.me/widget_preloader.js'
    document.head.appendChild(script)
  }, [])
}

// Star rating summary; Judge.me fills the empty div.
export function StarBadge() {
  return <div className="jdgm-widget jdgm-preview-badge" data-id={JUDGEME.productId} />
}

// Full review list with Judge.me's "Write a review" form.
export function ReviewWidget({ productTitle }: { productTitle: string }) {
  useJudgeMe()
  return (
    <div
      className="jdgm-widget jdgm-review-widget jdgm-outside-widget"
      data-id={JUDGEME.productId}
      data-product-title={productTitle}
    />
  )
}
