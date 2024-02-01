async function displayTableData(){
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    let fetchData = '';
    data.users.forEach(function(dataCollect){
        fetchData += `<tr>
        <td>${dataCollect.firstName}</td>
        <td>${dataCollect.lastName}</td>
        <td>${dataCollect.maidenName}</td>
        <td>${dataCollect.age}</td>
        <td>${dataCollect.email}</td>
        <td>${dataCollect.gender}</td>
        </tr>`
    })

    document.getElementById("tBody").innerHTML = fetchData;
}

