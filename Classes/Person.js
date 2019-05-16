Ext.define('Classes.Person', {
   /* singleton: true,*/
    alias: 'person',
    config: {
        name: 'Eugene',
        surname : 'Popov',
        gender: 'man'
    },
    constructor: function(name, surname, gender) {
        this.initConfig();
        if(name){
            this.setName(name);
        }
        if(surname){
            this.setSurname(surname);
        }
        if(gender){
            this.setGender(gender);
        }
    },
    getinfo: function(){
        alert("Полное имя : " + this.name + " " + this.surname + "  пол : " + this.gender);
    },
});