document.addEventListener('DOMContentLoaded', () => {
    // Reflect button UI on load
    chrome.storage.sync.get('isEnabled', ({ isEnabled = true }) => {
        updateToggleUI(isEnabled)
    })

    // Add event listener to update storage on toggle change
    const toggle = getToggle()
    toggle.addEventListener('change', () => {
        chrome.storage.sync.set({isEnabled: toggle.checked})
        reloadCurrentTab()
    })
})

function getToggle() {
    return document.getElementById('feature-toggle')
}

function updateToggleUI(isOn) {
    const toggle = getToggle()
    toggle.checked = isOn
}

function reloadCurrentTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.reload(tabs[0].id);
        }
    });
}