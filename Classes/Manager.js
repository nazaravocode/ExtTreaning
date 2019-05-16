Ext.define('Classes.Manager', {
    extend: 'Classes.Person',
    config: {
        department: 'sales'
    },
    constructor: function (name, surname, gender, department) {
        this.initConfig();
        if (department) {
            this.setDepartment(department);
        }
        this.callParent([name, surname, gender]);
    },
    getinfo: function () {
        this.callParent();
        alert("Департамент : " + this.department);
    }
});