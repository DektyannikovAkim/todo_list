
export function getCurrentDateAPI () {
    return fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")
    .then((response) => {
      if (response.ok) {
        return response.json()
        .then((data) => {
            if (data) {
                let date = new Date(data.utc_datetime);
                return date;
            }
        })
      }
      throw new Error("Bad request");
    })
    
    .catch((err) => {
      console.error(err);
    });
}