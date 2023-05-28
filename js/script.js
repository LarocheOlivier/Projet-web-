document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#addPWD').addEventListener('submit',function(e){
    //Fix me
    var pg = document.querySelector('#pg').checked;
    var ch = document.querySelector('#ch').checked;
    var ech = document.querySelector('#ech').checked;
    var selle = document.querySelector('#selle').checked;
    var perf = document.querySelector('#perf').checked;
    var susp = document.querySelector('#susp').checked;
    var acc = document.querySelector('#acc').checked;
    var rp = document.querySelector('#rp').checked;

    var nom = document.getElementById("Nom");
    var prenom = document.getElementById("Prenom");
    var adresse = document.getElementById("Adm");
    var tel = document.getElementById("tel");

    var marque = document.getElementById("marque");
    var mod = document.getElementById("mod");
    var annee = document.getElementById("annee");

    var budget = document.getElementById("budget");

/* && !ch && !ech && !selle && !perf && !susp && !acc && !rp A METTRE DEDANS */ 
    if ((!pg && !ch && !ech && !selle && !perf && !susp && !acc && !rp) || (nom.value == "") || (prenom.value == "") || (adresse.value == "") || (tel.value == "") || (marque.value == "--Veuillez choisir la marque--") || (mod.value == "") || (annee.value == "") || (budget.value == "")){
        alert("Veuillez remplir tous les champs !");
    }
    else{
        generer();
    }
    });
});


function generer(){
    
    var monformulaire = document.forms.ajoutPWD;
    var prix = 0;

    //Information personnelle :
    var nom = document.getElementById("Nom");
    var prenom = document.getElementById("Prenom");
    var adresse = document.getElementById("Adm");
    var tel = document.getElementById("tel");

    var info_pers = "Nom : " + nom.value + " Prénom : " + prenom.value + " Adresse-mail : " + adresse.value + " tél : " + tel.value;

    //Info vehicule :
    var marque = document.getElementById("marque");
    var mod = document.getElementById("mod");
    var annee = document.getElementById("annee");

    var info_supp = marque.value + " " + mod.value +" " + annee.value;

    //Info checked :
    var liste_cust = "";

    if (monformulaire.elements.pg.checked){
        liste_cust+="Peinture\n";
        prix += 400;
    }
    if (monformulaire.elements.ch.checked){
        liste_cust+="Carénage-";
        prix += 280;
    }
    if (monformulaire.elements.ech.checked){
        liste_cust+="Echappement-";
        prix += 450;
    }
    if (monformulaire.elements.selle.checked){
        liste_cust+="Revetement-";
        prix += 200;
    }
    if (monformulaire.elements.perf.checked){
        liste_cust+="Performance-";
        prix += 600;
    }
    if (monformulaire.elements.susp.checked){
        liste_cust+="Suspention-";
        prix += 300;
    }
    if (monformulaire.elements.acc.checked){
        liste_cust+="Accessoire-";
        prix += 400;
    }
    if (monformulaire.elements.rp.checked){
        liste_cust+="Roues-";
        prix += 749;
    }

    var budget = document.getElementById("budget");
    liste_cust += "Budget : " + budget.value;

    //Detail :
    var msg = document.getElementById("message");

    //Restant argent
    var arg_rest = budget.value - prix;

    //création d'une nouvelle ligne qui sera ajouté au tableau 
    var newline = document.createElement("tr");
    //création de 4 cellules
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");
    var col6 = document.createElement("td");

    col1.textContent = info_pers;
    col2.textContent = info_supp;
    col3.textContent = liste_cust;
    col4.textContent = msg.value;
    col5.textContent = prix;
    col6.textContent = arg_rest;

    if(arg_rest < 0){
        col6.style.color = "red";
    }else{
        col6.style.color = "green";
    }

    newline.append(col1,col2,col3,col4,col5,col6);

    var monTableau = document.getElementById("tab");
    monTableau.appendChild(newline);

    document.ajoutPWD.reset();

    alert("Merci pour votre confiance ! Une réponse vous sera envoyée d'ici 3 jours ! Un récapitulatif se trouve en bas de page.");
}

function supprimer(){
    if (confirm("Confirmez-vous la suppression des informations du formulaire ?"))
    {
    document.ajoutPWD.submit();
    //Fix Me

    const table = document.getElementById("tab");
    const ligne = table.rows.length;
    
    console.log(ligne);

    while(ligne >= 1){
        table.removeChild(table.lastChild);
    }

    } 
}