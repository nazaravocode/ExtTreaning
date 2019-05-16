/*
Ext.require([
    'Ext.window.Window'
]);

Ext.onReady(function () {
    var window = Ext.create('Ext.window.Window', {
        title: "my first ext window",
        width: 250,
        height: 150,
        html: 'hello'
    });
    window.show();
});*/
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Приложение на Ext JS 4',
                    html : '<h3>Добро пожаловать в мир Ext JS 4!</h3>'
                }
            ]
        });
    }
});