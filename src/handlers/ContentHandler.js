/**
 * ContentHandler handles fetching and rendering markdown content.
 */
export class ContentHandler {
    constructor() {
        this.container = document.getElementById('content-area');
        this.cache = new Map();
    }

    async loadPage(pageId) {
        if (!pageId) pageId = 'introduction';
        
        try {
            let content = '';
            if (this.cache.has(pageId)) {
                content = this.cache.get(pageId);
            } else {
                const response = await fetch(`./src/content/${pageId}.md`);
                if (!response.ok) throw new Error(`Failed to load ${pageId}`);
                content = await response.text();
                this.cache.set(pageId, content);
            }

            this.render(content);
            this.updateActiveLink(pageId);
        } catch (error) {
            console.error(error);
            this.container.innerHTML = `<h1>404</h1><p>Page not found: ${pageId}</p>`;
        }
    }

    render(markdown) {
        // We use 'marked' library which should be loaded in the main index.html
        if (typeof marked !== 'undefined') {
            this.container.innerHTML = marked.parse(markdown);
            
            // Add fade-in animation
            this.container.style.opacity = '0';
            this.container.style.transform = 'translateY(10px)';
            
            requestAnimationFrame(() => {
                this.container.style.transition = 'all 0.4s ease';
                this.container.style.opacity = '1';
                this.container.style.transform = 'translateY(0)';
            });
        } else {
            this.container.innerText = markdown;
        }
    }

    updateActiveLink(pageId) {
        document.querySelectorAll('.sidebar a, nav a').forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}
