document.getElementById("SendReq").addEventListener("click", async () => {
    const url = document.getElementById("route").value;
    const method = document.getElementById("HTTPtype").value.toUpperCase();
    const payloadInput = document.getElementById("payload");
    const responseDisplay = document.getElementById("response");

    let payload = payloadInput ? payloadInput.value.trim() : "";

    const http = new coreHTTP();

    let result = await http.processRequest(method, url, payload ? payload : 0);

    // Clear old response
    responseDisplay.innerHTML = "";

    // Handle error object
    if (result.error) {
        responseDisplay.textContent = result.error;
        return;
    }

    // Display array of users
    if (Array.isArray(result)) {
        responseDisplay.innerHTML = result.map(user => {
            return `<div>User ${user.id} - ${user.name}</div>`;
        }).join("");
    }
    // Display single user
    else if (typeof result === "object") {
        let id = result.id ? `User ${result.id}` : "User unidentified";
        let name = result.name || "No name";
        responseDisplay.innerHTML = `<div>${id} - ${name}</div>`;
    }
    // Display plain text
    else {
        responseDisplay.textContent = result;
    }
});

