document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[data-page]');
    const iframe = document.getElementById('viewer');
    let linkTagInjected = false;

    function handleResponsiveInjection() {
        const isSmallScreen = window.innerWidth <= 768;

        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (!iframeDoc) return;

            if (isSmallScreen && !linkTagInjected) {
                const linkTag = iframeDoc.createElement('link');
                linkTag.rel = 'stylesheet';
                linkTag.href = '../css/mobile.css';
                linkTag.id = 'mobile-css';
                iframeDoc.head.appendChild(linkTag);
                linkTagInjected = true;
                console.log("Injected mobile.css into iframe.");
            } else if (!isSmallScreen && linkTagInjected) {
                const existingTag = iframeDoc.getElementById('mobile-css');
                if (existingTag) existingTag.remove();
                linkTagInjected = false;
                console.log("Removed mobile.css from iframe.");
            }
        } catch (e) {
            console.error("Failed to inject/remove CSS:", e);
        }
    }

    // click handlers that load pages and re-apply css
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute('data-page');
            linkTagInjected = false; // Reset state when changing pages

            iframe.src = targetPage;

            // fresh `load` listener every time the page changes
            iframe.addEventListener('load', () => {
                handleResponsiveInjection();
                window.addEventListener('resize', handleResponsiveInjection);
            }, { once: true }); // fire once per load
        });
    });

    // the default iframe load on page load
    iframe.addEventListener('load', () => {
        handleResponsiveInjection();
        window.addEventListener('resize', handleResponsiveInjection);
    });
});
