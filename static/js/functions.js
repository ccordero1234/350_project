export function redirectTo(page, route) {
    // Send a GET request to the router on the server
    fetch(route + "/" + page)
        .then(response => {
            // Check if the response status is OK (200)
            if (response.ok) {
                // Redirect to the page
                window.location.href = route + "/" + page;
            } else {
                // Handle errors if any
                try {
                    window.location.href = page;
                } catch {
                    console.error('Failed to fetch ', response.status);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching ', error);
        });
}
