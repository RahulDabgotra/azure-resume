window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCounter();
})

const functionApi = '';

const getVisitCounter = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API")
        count = reponse.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}

