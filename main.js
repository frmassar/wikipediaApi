window.onload=function(){
    function go(){
    const req = new XMLHttpRequest();
    var tt = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
    let textReq= document.getElementById("rech").value;
    req.open('GET',tt+textReq, false);
    req.send();
    let section=document.getElementsByTagName('section')[0];
    let row = document.createElement("div");
    row.className="row";
    section.appendChild(row);
    if(section.firstChild){
        section.removeChild(section.firstChild)}
        let containers = document.createElement("div");
        containers.className = "container-fluid";
        section.appendChild(containers);
    if(req.status===200){
        let wikipe = JSON.parse(req.response)
        // let container = [];
        console.log(wikipe);
        for(i=0;i<wikipe[1].length;i++){
            let semblable = document.createElement("h2");
            let description = document.createElement("p");
            let redirection = document.createElement("a");
            let contient = document.createElement('div');
            redirection.className="btn btn-primary"
            section.className=" allign col-xs-12 col-sm-12 col-md-12 col-xl-12 ";
            contient.className="contient";
            semblable.textContent = wikipe[1][i];
            description.textContent = wikipe[2][i];
            redirection.href = wikipe[3][i];
            redirection.textContent= "wikipedia"
            row.appendChild(containers);
            containers.appendChild(contient);
            contient.appendChild(semblable);
            contient.appendChild(description);
            contient.appendChild(redirection);
            
            

        }

    }
    else{
        console.log("status de la réponse:%d (%s)", req.status,req.statusText);
    }
}

document.getElementsByTagName('button')[0].addEventListener('click',go)

}