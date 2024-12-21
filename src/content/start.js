function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function injectCSS(css) {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}

window.onload = async () => {
    chrome.storage.sync.get('isEnabled', async ({isEnabled = true}) => {
        if (isEnabled) {
            // Hide Top Bar
            injectCSS(HIDE_TOP_BAR_CSS)

            // Hide Left Sidebar
            let attempts = 0
            const maxAttempts = 10
            do {
                await sleep(1_000)

                const button = document.querySelector('div.gb_Jc[role="button"]')
                if (button) {
                    button.click()
                    return
                }
            } while (attempts++ < maxAttempts)
        }
    })
}

const HIDE_TOP_BAR_CSS = `
    .gb_kd.gb_od {
        visibility: hidden !important;
        height: 30px;
    }
    
    div[role="navigation"][aria-label="Sidebar"] {
        display: none !important;
    }
`