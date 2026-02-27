// 1. This variable holds the exact HTML for your sidebar
const sidebarHTML = `
<nav class="sidebar">
    <h3>BMS Topics</h3>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="enables.html">Enables</a></li>
        <li><a href="vds.html">VDS</a></li>
        <li><a href="valves.html">Valves</a></li>
        <li><a href="sensors.html">Sensors</a></li>
        <li><a href="boilers.html">Boilers & DHWS</a></li>
        <li><a href="pumps.html">Pump Sets</a></li>
        <li><a href="schedules.html">Time Schedules</a></li>
        <li><a href="ahu.html">AHU</a></li>
        <li><a href="frost.html">Frost Protection</a></li>
        <li><a href="calculator.html">Power Calculator</a></li>
		
	
    </ul>
</nav>
`;

// 2. When the page loads, run this function
document.addEventListener("DOMContentLoaded", function() {
    
    // Find the placeholder container and inject the menu HTML
    document.getElementById("sidebar-container").innerHTML = sidebarHTML;

    // Get the current file name (e.g., "boilers.html")
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '') currentPage = 'index.html'; // Default to home

    // Find all the links in the newly injected sidebar
    let links = document.querySelectorAll('.sidebar a');
    
    // Loop through them. If the link matches the current page, make it 'active'
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});