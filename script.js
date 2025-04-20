document.addEventListener('DOMContentLoaded', function() {
    fetch('http://127.0.0.1:8000/api/events/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('events-container');
            data.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');

                eventDiv.innerHTML = `
                    <h2>${event.title}</h2>
                    <p>${event.description}</p>
                    <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
                    <p>Location: ${event.location}</p>
                    <img src="${event.image_url}" alt="${event.title}" style="width: 300px; height: auto;">
                `;

                container.appendChild(eventDiv);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}); 