document.addEventListener('DOMContentLoaded', function () {
    const memoriesContainer = document.getElementById('memories-container');
    const memoryForm = document.getElementById('memory-form');

    // Sample memories data
    let memoriesData = [];

    // Function to add a memory
    window.addMemory = function () {
        const yearInput = document.getElementById('year');
        const eventInput = document.getElementById('event');
        const descriptionInput = document.getElementById('description');

        const newMemory = {
            year: yearInput.value,
            event: eventInput.value,
            description: descriptionInput.value,
        };

        // Add the new memory to the array
        memoriesData.push(newMemory);

        // Display memories
        displayMemories();

        // Clear form inputs
        yearInput.value = '';
        eventInput.value = '';
        descriptionInput.value = '';
    };

    // Function to display memories
    function displayMemories() {
        memoriesContainer.innerHTML = '';
        memoriesData.forEach(memory => {
            const memoryCard = document.createElement('div');
            memoryCard.classList.add('memory-card');
            memoryCard.innerHTML = `
                <h3>${memory.year}</h3>
                <p><strong>${memory.event}</strong></p>
                <p>${memory.description}</p>
            `;
            memoriesContainer.appendChild(memoryCard);
        });
    }

    // Display memories on page load
    displayMemories();
});


document.addEventListener('DOMContentLoaded', function () {
    const memoriesContainer = document.getElementById('memories-container');
    const memoryForm = document.getElementById('memory-form');

    // Sample memories data
    let memoriesData = [];

    // Function to add a memory
    window.addMemory = function () {
        const yearInput = document.getElementById('year');
        const eventInput = document.getElementById('event');
        const descriptionInput = document.getElementById('description');

        const newMemory = {
            year: yearInput.value,
            event: eventInput.value,
            description: descriptionInput.value,
        };

        // Add the new memory to the array
        memoriesData.push(newMemory);

        // Display memories
        displayMemories();

        // Clear form inputs
        yearInput.value = '';
        eventInput.value = '';
        descriptionInput.value = '';
    };

    // Function to delete a memory
    window.deleteMemory = function (index) {
        memoriesData.splice(index, 1);
        displayMemories();
    };

    // Function to display memories
    function displayMemories() {
        memoriesContainer.innerHTML = '';
        memoriesData.forEach((memory, index) => {
            const memoryCard = document.createElement('div');
            memoryCard.classList.add('memory-card');
            memoryCard.innerHTML = `
                <h3>${memory.year}</h3>
                <p><strong>${memory.event}</strong></p>
                <p>${memory.description}</p>
                <button class="delete-btn" onclick="deleteMemory(${index})">Delete</button>
            `;
            memoriesContainer.appendChild(memoryCard);
        });
    }

    // Function to sort memories by year
    window.sortMemories = function () {
        memoriesData.sort((a, b) => a.year - b.year);
        displayMemories();
    };

    // Display memories on page load
    displayMemories();
});


document.addEventListener('DOMContentLoaded', function () {
    const memoriesContainer = document.getElementById('memories-container');
    const memoryForm = document.getElementById('memory-form');

    // Sample memories data
    let memoriesData = [];
    let deletedMemories = [];

    // Function to add a memory
    window.addMemory = function () {
        const yearInput = document.getElementById('year');
        const eventInput = document.getElementById('event');
        const descriptionInput = document.getElementById('description');

        const newMemory = {
            year: yearInput.value,
            event: eventInput.value,
            description: descriptionInput.value,
        };

        // Add the new memory to the array
        memoriesData.push(newMemory);

        // Display memories
        displayMemories();

        // Clear form inputs
        yearInput.value = '';
        eventInput.value = '';
        descriptionInput.value = '';
    };

    // Function to delete a memory
    window.deleteMemory = function (index) {
        deletedMemories.push(memoriesData[index]);
        memoriesData.splice(index, 1);
        displayMemories();
    };

    // Function to restore deleted memories
    window.restoreMemories = function () {
        memoriesData = [...memoriesData, ...deletedMemories];
        deletedMemories = [];
        displayMemories();
    };

    // Function to display memories
    function displayMemories() {
        memoriesContainer.innerHTML = '';
        memoriesData.forEach((memory, index) => {
            const memoryCard = document.createElement('div');
            memoryCard.classList.add('memory-card');
            memoryCard.innerHTML = `
                <h3>${memory.year}</h3>
                <p><strong>${memory.event}</strong></p>
                <p>${memory.description}</p>
                <button class="delete-btn" onclick="deleteMemory(${index})">Delete</button>
            `;
            memoriesContainer.appendChild(memoryCard);
        });
    }

    // Function to sort memories by year
    window.sortMemories = function () {
        memoriesData.sort((a, b) => a.year - b.year);
        displayMemories();
    };

    // Display memories on page load
    displayMemories();
});
