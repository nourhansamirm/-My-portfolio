```javascript
// Simple scroll effect

document.querySelectorAll('nav a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute('href')
        );

        section.scrollIntoView({
            behavior: 'smooth'
        });

    });

});
```
