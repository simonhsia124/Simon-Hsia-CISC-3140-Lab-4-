
async function generateCarImage() {
    fetch("https://forza-api.tk/")
    .then(response => response.json())
    .then(data => document.getElementById("carImage").src = data.image);
    
}