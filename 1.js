class Sirket{
    constructor(ad){
        this.ad = ad;
    }
    /**xüsusiyyət-property */
    isciler = [
        ["Alex", "Jon", "Emma" , "Maya"],
        ["Full Stack Developer", "Front end Developer", "Javascript Developer", "Back End Developer"],
        [ "5000", "3001", "2500","5001"]
    ];
    /**Metod */
    IscilerinSiyahisi(){
        let tbl =`
        <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Salary(USD) </th>
        <th>Annual Salary (USD) </th>
        </tr>
        `;

        for (let i=0; i<this.isciler[0].length; i++){
            tbl+=`
            <tr>
            <td>${this.isciler[0][i]}</td>
            <td>${this.isciler[1][i]}</td>
            <td>${this.isciler[2][i]}</td>
            <td>${Math.round(this.isciler[2][i]*12)}</td>
           
            </tr>
            `;
        
        }
        return tbl;
    }
}
let arr =[];

let btn = document.getElementsByTagName("button")[3];
btn.onclick = function(){

    let data = document.getElementsByTagName("input")[0];
    if(data.value != ""){
        arr.push(data.value);
        data.value ="";
       Goster();
    }
};
function Goster(){
    let tbl = yup.IscilerinSiyahisi();
    for(let i in arr) {
        tbl += `
        <tr> 
        <td> ${arr[i]}</td>

        </tr>`;
    }
document.getElementsByTagName("table")[0].innerHTML = tbl;
}

let yup = new Sirket("Workers list");
onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];
     let tbl = document.getElementsByTagName("table")[0];
    h1.innerHTML = yup.ad;
    tbl.innerHTML = yup.IscilerinSiyahisi();
   

}

