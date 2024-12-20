function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

document.addEventListener('DOMContentLoaded', async () => {
        const button = document.querySelector('div.gb_Jc[role="button"]')

        if (button) {
            await sleep(2000)
            button.click()
        }
    }
)