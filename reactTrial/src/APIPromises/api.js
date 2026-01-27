/*

REST APIs

    HTTP -> hyper text transfer protocol
        0 > client - curl -> on the terminal, chrome browser
        1 > server

        // one-way communication. - client makes a request and server responds

    REQUEST 
        methods: GET, POST, PUT, PATCH, DELETE
        body: <Data>
        headers: [Special data]
        url: <link>

    RESPONSE 
        status: [100-599]
            100-199 -> information

            200-299 -> success
                201: Created POST
                204: No content (DELETED)

            300-399 -> redirection

            400-499 -> client errors
                404: page not found
                401: unauthorized

            500-599 -> server errors
        data: 


*/