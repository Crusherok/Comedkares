document.getElementById('lens').addEventListener('click', function() {
    document.getElementById('input-box').focus(); 
});

document.getElementById('input-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let searchQuery = document.getElementById('input-box').value.toLowerCase();
        searchAndNavigate(searchQuery);
    }
});

function searchAndNavigate(query) {
    const destinations = {
        'chaturmukha basadi': 'chaturmukha-basadi',
        'st lawrence church': 'st-lawrence-church',
        'church': 'st-lawrence-church',
        'beach': 'beach'
    };

    const destinationId = destinations[query];
    if (destinationId) {
        const element = document.getElementById(destinationId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Destination found but element not in DOM');
        }
    } else {
        alert('Destination not found. Please try another search term.');
    }
}
