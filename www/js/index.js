document.addEventListener('deviceready', rechercherContacts);

function rechercherContacts(){
    const options = new ContactFindOptions();
    options.filter  =  'resp'; // a enlever du code
    options.multiple = true;
    options.hasPhoneNumber = true; // enlever contact sans numner

    let fields = ['name'];

    navigator.contacts.find(fields, afficherContacts, gererErreur, options);

}

function afficherContacts(contacts){
    //console.log('Nombre de contacts trouvés : ${contacts.length}');
    //console.log('contacts');

    let code = '';
    for (Let i = 0; i < contacts.length; i++){
        code +=
        <li>
            <a href="#">
                <img src =" ${contacts[i].photos ? contacts[i].photos[0].value : 'img/'}"></img>
                <h1> ${contacts[i].displayName}</h1>
                <p> ${contacts[i].phoneNumbers[0]}</p>
            </a>
        </li>
    }
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = code;
    $(contactList).listview('refresh');
}
function gererErreur(error){
    console.log(" Erreur : ");
    console.log(error);
}