function togglePopUp() {
    if ( document.getElementById('popUp').style.display == "none") {
        document.getElementById('popUp').style.display = "inline-block";
    } else {
        document.getElementById('popUp').style.display = "none";
    }
    
  }

  function deleteArtist(i) {
    // var row = delB.parentNode.parentNode;
    // row.parentNode.removeChild(row);

    // var row =event.target.parentNode.parentNode;
    // row.parentNode.removeChild(row);

    document.getElementById('mainTable').deleteRow(i);
  }

function addArtist(nameArtist, aboutArtist, url){
    var tableRef = document.getElementById('mainTable');
    var newRow   = tableRef.insertRow();

    // Insert a cell in the row at index 0
    var imgCell  = newRow.insertCell(0);
    imgCell.className="imgTd";
    var infoCell  = newRow.insertCell(1);
    infoCell.className="infoTd"
    var delCell = newRow.insertCell(2);
    delCell.className="delTd";

    //img cell
    var img = document.createElement('img');   
    img.src=url;  
    img.width = "82"
    img.alt="Artist Picture"
    // img.setAttribute(height, "86");  
    img.height = "86"
    
    imgCell.appendChild(img);

    //info cell
    var divCon = document.createElement('div');
    divCon.className = "tdDiv";
    infoCell.appendChild(divCon);

    //h3 in divCon
    var nameH3 = document.createElement('h3');
    let nameText = document.createTextNode(nameArtist);
    nameH3.appendChild(nameText);
    divCon.appendChild(nameH3);

    //p in divCon
    var aboutP = document.createElement('p');
    let aboutText = document.createTextNode(aboutArtist);
    aboutP.appendChild(aboutText);
    divCon.appendChild(aboutP);

    //del button
    var delB = document.createElement('button');
    delB.type = "button";    
    delB.innerText="Delete";    
    delB.className="deleteBtn"
    // delB.onclick="deleteArtist(delB.parentNode.parentNode.rowIndex)";
    delCell.appendChild(delB);

    delB.addEventListener('click', function(e){

        deleteArtist(delB.parentNode.parentNode.rowIndex);
    
      });
    

   
}


