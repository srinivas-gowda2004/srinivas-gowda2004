// Access the camera and start the video stream
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        const video = document.getElementById('video');
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera: " + err);
    });

// Function to capture a photo from the video stream
function snapPhoto() {
    const canvas = document.getElementById('canvas');
    const video = document.getElementById('video');
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

// Function to handle file upload and display success message
function uploadPhoto() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        // Simulate file upload
        setTimeout(() => {
            document.getElementById('successMessage').textContent = 'Your photo was uploaded successfully';
        }, 1000);
    } else {
        alert('Please choose a file to upload');
    }
}

// Function to upload the snapped photo and display success message
function uploadSnappedPhoto() {
    const canvas = document.getElementById('canvas');
    // Simulate file upload
    setTimeout(() => {
        document.getElementById('successMessage').textContent = 'Your photo was uploaded successfully';
    }, 1000);
}
