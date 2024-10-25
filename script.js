// Handling category tab click
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.dataset.category;

        // Remove 'active' class from all tabs
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        // Add 'active' class to the clicked tab
        this.classList.add('active');

        // Show/hide books based on category
        document.querySelectorAll('.book-card').forEach(book => {
            if (category === 'all' || book.dataset.category === category) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });
});

// Search Functionality
document.getElementById('search').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    document.querySelectorAll('.book-card').forEach(book => {
        const title = book.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchText)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

// Borrowing History Modal
const modal = document.getElementById('historyModal');
const historyBtn = document.getElementById('viewHistory');
const closeModal = document.querySelector('.close');

// Open the modal
historyBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close the modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});




