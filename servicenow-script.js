document.addEventListener("DOMContentLoaded", function() {
    fetchRequests();
});

function fetchRequests() {
    var requestsList = document.getElementById("requests-list");

    // Mock Data (Replace with actual ServiceNow API call)
    var requests = [
        { number: "REQ00123", short_description: "Laptop issue", state: "new" },
        { number: "REQ00124", short_description: "VPN not working", state: "in_progress" },
        { number: "REQ00125", short_description: "Email access issue", state: "closed" }
    ];

    requests.forEach(request => {
        var listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${request.number}</strong> - ${request.short_description} 
                              <span class="status ${request.state}">${request.state.replace("_", " ")}</span>`;
        requestsList.appendChild(listItem);
    });
}
