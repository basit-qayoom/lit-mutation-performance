import("../dist/shared.bundle.js");
const observedTags = new Set(); 


const observer = new MutationObserver(async (mutations) => {
    for (const { addedNodes } of mutations) {
        for (const node of addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const tagName = node.tagName.toLowerCase();
                if (!observedTags.has(tagName) && tagName.startsWith("pw-")) {
                    observedTags.add(tagName);
                    register(tagName);
                }
            }
        }
    }
});


/**
 * Registers an element by tag name.
*/
async function register(tagName) {
    // Remove the "pw-" prefix
    const tagWithoutPrefix = tagName.replace(/^pw-/i, "");
    // Load the element's bundle
    try {
        await import(`../dist/${tagWithoutPrefix}.bundle.js`);
        console.log(`Custom Element added successfully`);
    } catch (error) {
        console.error(`Unable to autoload <${tagName}>:`, error);
    }
}

// Listen for new undefined elements
observer.observe(document.documentElement, { subtree: true, childList: true });

// Initial discovery for existing elements
document.querySelectorAll(":not(:defined)").forEach((el) => {
    const tagName = el.tagName.toLowerCase();
    if (tagName.startsWith("pw-")) {
        observedTags.add(tagName);
        register(tagName);
    }
});


// Log Memory Usage
function logMemoryUsage() {
    const memoryInfo = window.performance.memory;
    const maxLimit = " Maximum Limit: " + memoryInfo.jsHeapSizeLimit/1048576 + " MB\n"
    const allocated = "Total Memory Allocated: " + memoryInfo.totalJSHeapSize/1048576 + " MB\n"
    const used = "Used Memory: " + memoryInfo.usedJSHeapSize/1048576 + " MB"
    console.log(maxLimit,allocated,used)
}

setInterval(()=>logMemoryUsage(), 5000)


