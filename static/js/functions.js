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

// days to number
export function dayToNumber(day) {
    const days = {
        'Monday': 0,
        'Tuesday': 1,
        'Wednesday': 2,
        'Thursday': 3,
        'Friday': 4,
        'Saturday': 5,
        'Sunday': 6
    };
    return days[day] !== undefined ? days[day] : null;
}