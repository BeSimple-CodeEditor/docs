import { ContentHandler } from './handlers/ContentHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const handler = new ContentHandler();

    // Initial load
    const initialPage = window.location.hash.replace('#', '') || 'introduction';
    handler.loadPage(initialPage);

    // Hash change listener for routing
    window.addEventListener('hashchange', () => {
        const pageId = window.location.hash.replace('#', '') || 'introduction';
        handler.loadPage(pageId);
        window.scrollTo(0, 0);
    });
});
