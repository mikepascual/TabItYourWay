
function restore_defaults() {
    document.getElementById('custom_css_textarea').value = custom_css_default;
    document.getElementById('custom_content_textarea').value = custom_content_default;
    document.getElementById('remove_icons').checked = false;
}

function clear_all() {
    document.getElementById('custom_css_textarea').value = '';
    document.getElementById('custom_content_textarea').value = '';
    document.getElementById('remove_icons').checked = true;
}

// Saves options to chrome.storage.sync.
function save_options() {
    var customCSS = document.getElementById('custom_css_textarea').value;
    var customContent = document.getElementById('custom_content_textarea').value;
    var removeIcons = document.getElementById('remove_icons').checked;
    chrome.storage.sync.set({
        customCSS: customCSS,
        customContent: customContent,
        removeIcons: removeIcons
    }, function() {
        var el;
        if (chrome.runtime.lastError) {
            el = document.getElementById('failure_msg');
        } else {
            el = document.getElementById('success_msg');
        }
        el.style.display = ''; // display the message
        setTimeout(function() {
            el.style.display = 'none'; // hide the message again
        }, 1500); // show for 1.5 seconds
    });
}

// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        customCSS: custom_css_default,
        customContent: custom_content_default,
        removeIcons: true
    }, function(items) {
        document.getElementById('custom_css_textarea').value = items.customCSS;
        document.getElementById('custom_content_textarea').value = items.customContent;
        document.getElementById('remove_icons').checked = items.removeIcons;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('restore_defaults').addEventListener('click', restore_defaults);
document.getElementById('clear_all').addEventListener('click', clear_all);

