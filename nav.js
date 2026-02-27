const sidebarHTML = `
<nav class="sidebar">
    <h3>BMS Topics</h3>
    
    <div class="sidebar-search">
        <input type="text" id="searchInput" placeholder="Search site...">
        <div id="searchResults" class="search-results"></div>
    </div>

    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="ahu.html">AHU</a></li>
        <li><a href="boilers.html">Boilers & DHWS</a></li>
        <li><a href="driver.html">drivers</a></li>
        <li><a href="enables.html">Enables</a></li>
        <li><a href="frost.html">Frost Protection</a></li>
        <li><a href="calculator.html">Power Calculator</a></li>
        <li><a href="pumps.html">Pump Sets</a></li>
        <li><a href="Runnig.html">Run or not?</a></li>
        <li><a href="sensors.html">Sensors</a></li>
        <li><a href="schedules.html">Time Schedules</a></li>
        <li><a href="valves.html">Valves</a></li>
        <li><a href="vds.html">VDS</a></li>
    </ul>
</nav>
`;

document.addEventListener("DOMContentLoaded", function() {
    // Inject the menu HTML
    document.getElementById("sidebar-container").innerHTML = sidebarHTML;

    // Highlight the active page
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '') currentPage = 'index.html'; 

    let links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

