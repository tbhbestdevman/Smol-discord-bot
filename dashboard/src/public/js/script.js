// This is the main JavaScript file for the dashboard

document.addEventListener('DOMContentLoaded', (event) => {
    // DOM elements
    const configForm = document.getElementById('config-form');
    const saveButton = document.getElementById('save-button');

    // Event listeners
    saveButton.addEventListener('click', saveConfig);

    // Load current config
    loadConfig();
});

// Function to load current config
function loadConfig() {
    fetch('/api/config')
        .then(response => response.json())
        .then(data => {
            document.getElementById('bot-token').value = data.botToken;
            document.getElementById('prefix').value = data.prefix;
            document.getElementById('mongo-uri').value = data.mongoUri;
        });
}

// Function to save config
function saveConfig(event) {
    event.preventDefault();

    const botToken = document.getElementById('bot-token').value;
    const prefix = document.getElementById('prefix').value;
    const mongoUri = document.getElementById('mongo-uri').value;

    const config = {
        botToken,
        prefix,
        mongoUri
    };

    fetch('/api/config', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Configuration saved successfully!');
        } else {
            alert('Failed to save configuration!');
        }
    });
}