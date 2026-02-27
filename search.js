// Your search index (cheat sheet)
const searchIndex = [
    { title: "Enables", url: "enables.html", content: "enables run signal dps differential pressure switch flow meter current switch virtual metering overridden manually" },
    { title: "Variable Drive Speeds (VDS)", url: "vds.html", content: "vds variable drive speeds invertors hz volts 100% loss duct work air handling unit co2 ppm efficiency" },
    { title: "Valves", url: "valves.html", content: "valves open closed letting by 2 port 3 port percentages water flow heating cooling" },
    { title: "Sensors", url: "sensors.html", content: "sensors trend flat line 0 values k12 remote space temp fcu child parent units 0-10volt 4-20 ma failed reading" },
    { title: "Boilers & DHWS", url: "boilers.html", content: "boilers setpoint lead lag duty standby modulation burn strength dhws domestic hot water legionnaires disease calorifier shunt pump stratification direct fired heating" },
    { title: "Pump Sets", url: "pumps.html", content: "pump sets flowrate pressure control analogue output digital outputs" },
    { title: "Time Schedules & OSS", url: "schedules.html", content: "time schedules oss optimised start stop warmup cooldown oat space temp trend time zone master calendar" },
    { title: "Air Handling Units (AHU)", url: "ahu.html", content: "ahu packaged unit dampers end switches coils frost cooling heating wet electric gas thermal wheels rpm fans off-coil temperature" },
    { title: "Frost Protection", url: "frost.html", content: "frost protection freezing burst pipe oat space heating circulating pumps boiler capillary frost stat hard shutdown fresh air damper manual reset alarm" },
    { title: "Power Calculator", url: "calculator.html", content: "power calculator energy kw hz inverter loss bms control signal volts hours run per day fan closed loop pump plug draw" }
];

// Listen for typing anywhere on the document
document.addEventListener("input", function(e) {
    // If the thing being typed into is our search box...
    if (e.target && e.target.id === "searchInput") {
        const query = e.target.value.toLowerCase().trim();
        const searchResults = document.getElementById("searchResults");

        if (query.length > 1) { // Type at least 2 letters to search
            searchResults.style.display = "block";
            
            const matches = searchIndex.filter(page => 
                page.title.toLowerCase().includes(query) || 
                page.content.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                searchResults.innerHTML = "";
                matches.forEach(match => {
                    // Create tiny, clean links for the sidebar
                    searchResults.innerHTML += `
                        <div style="margin-bottom:8px; border-bottom:1px solid #eee; padding-bottom:5px;">
                            <a href="${match.url}" style="color:#3498db; text-decoration:none; font-weight:bold; font-size:0.9em; display:block; padding:0;">${match.title}</a>
                        </div>
                    `;
                });
            } else {
                searchResults.innerHTML = "<div style='font-size:0.85em; color:#666;'>No matches found.</div>";
            }
        } else {
            searchResults.style.display = "none";
        }
    }
});
