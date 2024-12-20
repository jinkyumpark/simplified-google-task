function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

window.onload = async () => {
    let attempts = 0
    const maxAttempts = 10

    do {
        await sleep(1000)

        const button = document.querySelector('div.gb_Jc[role="button"]')
        if (button) {
            button.click()
            return
        }
    } while (attempts++ < maxAttempts)
}