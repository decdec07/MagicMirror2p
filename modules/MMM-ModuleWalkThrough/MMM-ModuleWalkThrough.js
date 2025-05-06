//helloworld.js:

Module.register("MMM-ModuleWalkThrough", {
    // Default module config.
    defaults: {
      text: "Hello World!",
    },
  
    // Override dom generator.
    getDom: function () {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = this.config.text;
      return wrapper;
    },
    getHeader: function [ ] {
        return " MMM-ModuleWalkThrough";
    }
});
  