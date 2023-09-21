import("../dist/shared.bundle.js")
const observedTags = new Set();
const s = performance.now();

const observer = new MutationObserver(async (mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
        if (!observedTags.has(tagName) && tagName.startsWith("pw-")) {
          observedTags.add(tagName);
          await register(tagName); // Wait for registration to complete
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
  try {
    await import(`../dist/${tagWithoutPrefix}.bundle.js`);
    console.log(`Custom Element added successfully`);
    const e =performance.now()
    console.log('Time Taken ', e-s)
  } catch (error) {
    console.error(`Unable to autoload <${tagName}>:`, error);
  }
}

// Listen for new undefined elements
observer.observe(document.documentElement, { subtree: true, childList: true });

// Initial discovery for existing elements
(async () => {
  const undefinedElements = document.querySelectorAll(":not(:defined)");
  for (const el of undefinedElements) {
    const tagName = el.tagName.toLowerCase();
    if (tagName.startsWith("pw-")) {
      observedTags.add(tagName);
      await register(tagName); // Wait for registration to complete
    }
  }
})();
