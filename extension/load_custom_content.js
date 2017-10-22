function load_custom_page() {
    chrome.storage.sync.get({
        customCSS: custom_css_default,
        customContent: custom_content_default,
        showIcons: true
    }, function(items) {
        if (!items.showIcons) {
            document.getElementById('toolbar').style.display = 'none';
        }
        document.getElementById('css_main').innerHTML = items.customCSS;
        document.getElementById('custom_content').innerHTML = items.customContent;
    });
}


function open_options() {
    document.getElementById('icon_settings').blur();
    // New way to open options pages, supported by Chrome 42+
    chrome.runtime.openOptionsPage();
}

function open_info() {
    document.getElementById('icon_info').blur();
}

document.getElementById('icon_settings').addEventListener('click', open_options);
//document.getElementById('icon_info').addEventListener('click', open_info);
document.addEventListener('DOMContentLoaded', load_custom_page);
