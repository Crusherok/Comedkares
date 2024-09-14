document.getElementById('lens').addEventListener('click', function() {
    document.getElementById('input-box').focus(); 
});
document.getElementById('input-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the default action
        let searchQuery = document.getElementById('input-box').value;
        if (searchQuery) {
            // Simulating a search action with an alert
            alert('You searched for: ' + searchQuery);
        } else {
            alert('Please enter a search term');
        }
    }
});
