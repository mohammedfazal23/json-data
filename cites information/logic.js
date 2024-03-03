document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const citiesDiv = document.getElementById('cities');
            if (!data || !data.cities || !Array.isArray(data.cities)) {
                throw new Error('Invalid data format');
            }
            data.cities.forEach(city => {
                const cityDiv = document.createElement('div');
                cityDiv.classList.add('city');
                cityDiv.innerHTML = `
                    <h2>${city.name}</h2>
                    <p>State: ${city.state}</p>
                    <p>District: ${city.district}</p>
                    <p>Population: ${city.population}</p>
                    <p>Coordinates: ${city.coordinates.latitude}, ${city.coordinates.longitude}</p>
                `;
                citiesDiv.appendChild(cityDiv);
            });
        })
        .catch(error => {
            const citiesDiv = document.getElementById('cities');
            citiesDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
            console.error('Error fetching data:', error);
        });
});