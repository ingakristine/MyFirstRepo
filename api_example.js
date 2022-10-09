$.ajax ({
    url: "https://api.github.com/repos/ingakristine/MyFirstRepo",
    success: function(response) {
        console.log(response)
    }
})