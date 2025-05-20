class coreHTTP {
    //One function, no variables in class - not ideal. Potentially change url to class variable?
    async processRequest(inMethod, url, content = 0) {
        //content should only ever have a string value, so a default value of 0 makes it easy to check whether it needs to be passed.
        if (content === 0) {
            try {
                let result = await fetch(url, {
                    method: inMethod
                })
                 //If it works, just return the text.
                if (result.ok){
                    return result.text();
                }
                //Error handling
                else {
                    return inMethod + " Error: " + result.status + ": " + result.statusText;
                }
            }
            //Handles fetch failure
            catch(err) {
                return err.message;
            }
        }
    //Handles functions that send content to server
        else {
            try {
                let result = await fetch(url, {
                    method: inMethod,
                    body: content
                })
                //Again, error checking
                if (result.ok){
                    return result.text();
                }
                //Again, error handling
                else {
                    return inMethod + " Error: " + result.status + ": " + result.statusText;
                }
            }
            //Handles fetch failure
            catch(err) {
                return err.message;
            }
            }
    }
}
//Test functions
let web = new coreHTTP();
//Await probably not necessary in actual code - done this way here due to quirks of debug console
//Patch probably needs some extra work on CSS/HTML end - [ID] : [string] input maybe?
//For clarity, apropriate input would be something like this: "PATCH", "https://jsonplaceholder.typicode.com/users" + [ID], [string]
let test = await web.processRequest("DELETE", "https://jsonplaceholder.typicode.com/users/2")
console.log(test);