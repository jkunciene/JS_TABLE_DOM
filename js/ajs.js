const button = document.querySelector('button');
const eilute = document.getElementById('eilutes');
const stulpelis = document.getElementById('stulpeliai');


button.addEventListener('click', pieskLentele)

function pieskLentele() {

    //console.log(eilute.value);
    //console.log(stulpelis.value);
    let psk = "<table>";
    for (let i=0; i<eilute.value; i++){
        psk +="<tr>";
        for (let j=0; j<stulpelis.value; j++) {
            psk +="<td>"+j+"</td>";
        }
        psk+="</tr>";
    }
    psk+="</table>";
    document.getElementById("lentele").innerHTML=psk;
}