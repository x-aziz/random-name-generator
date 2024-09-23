document.getElementById('generate-name').addEventListener('click', async () => {
    const response = await fetch('/generate-name');
    const data = await response.json();
    document.getElementById('name-output').innerText = data.name;
});
