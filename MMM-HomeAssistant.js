/* Magic Mirror
 * Moduł: MMM-HomeAssistant
 * Wersja 1.0 (Oryginalna, prosta ramka iframe)
 *
 */

Module.register("MMM-HomeAssistant", {
    defaults: {
        url: "http://localhost:8123", // Adres pulpitu HA
        width: "1120px",  // Domyślna szerokość
        height: "720px", // Domyślna wysokość
        scrolling: "no"   // Czy pokazywać paski przewijania
    },

    start: function() {
        Log.info("Uruchamianie modułu: " + this.name);
        this.data.width = this.config.width;
        this.data.height = this.config.height;
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.style.width = this.config.width;
        wrapper.style.height = this.config.height;

        var iframe = document.createElement("iframe");
        
        iframe.src = this.config.url;         // Źródło (pulpit HA)
        iframe.width = this.config.width;     // Szerokość
        iframe.height = this.config.height;   // Wysokość
        iframe.scrolling = this.config.scrolling; // Paski przewijania
        iframe.style.border = "none";         // Usuwamy ramkę

        wrapper.appendChild(iframe);

        return wrapper;
    },
    
    getScripts: function() {
        return [];
    },

    getStyles: function() {
        return ["MMM-HomeAssistant.css"]; 
    }
});
