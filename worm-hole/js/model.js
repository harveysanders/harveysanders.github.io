(function (window) {
    window.opspark = window.opspark || {};
    
    var load = window.opspark.load;
    
    window.opspark.model = {
        loadData: loadData
    };
    
    function loadData(url, callback) {
        var settings, values;
        
        load.json('data.json').then(function(data) {
            settings = data.settings;
            
            values = {};
            settings.forEach(function (setting) {
                values[setting.id] = setting.value;
            });
            
            callback({
                settings: settings,
                values: values
            });
        });
        
        
    }
    
}(window));