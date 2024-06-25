function togglePrivacy(element) {
    const nameElement = element.previousElementSibling;
    if (nameElement.style.filter === "blur(5px)") {
        nameElement.style.filter = "none";
        element.textContent = "Blur Name";
    } else {
        nameElement.style.filter = "blur(5px)";
        element.textContent = "Unblur Name";
    }
}

function adminAction(action, element) {
    const username = element.dataset.username;
    alert(`${action} action performed on ${username}`);
    // Additional logic for admin actions such as blur or ban.
}
