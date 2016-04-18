var App = function() {

    var debug = true;
    var self = this;

    /**
     * Initializing app on document ready
     * or device ready in case of PhoneGap
     *
     * @returns {App}
     */
    this.init = function() {
        self.settings();
        self.events();

        return this;
    };

    /**
     * Setting various variables and making
     * some DOM changes
     */
    this.settings = function() {

    };

    /**
     * Binding events
     */
    this.events = function() {

    };

    return this;
};