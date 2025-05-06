Module.register("MMM-PiStatus", {
    defaults: {
      updateInterval: 5000,
      url: "http://100.99.11.113:5000/"
    },
  
    start: function () {
      this.status = "Loading Pi status...";
      this.getStats();
      setInterval(() => {
        this.getStats();
      }, this.config.updateInterval);
    },
  
    getDom: function () {
      const wrapper = document.createElement("div");
      wrapper.className = "MMM-PiStatus";
      wrapper.innerHTML = `<pre>${this.status}</pre>`;
      return wrapper;
    },
  
    // getStyles: function () {
    //   return ["MMM-PiStatus.css"];
    // },

    getStats: function () {
      fetch(this.config.url)
        .then(res => res.text())
        .then(data => {
          this.status = data;
          this.updateDom();
        })
        .catch(err => {
          this.status = "Error fetching data";
          this.updateDom();
          console.error(err);
        });
    }
  });
  