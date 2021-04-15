// imports
import ui from './ui';

const handleFunc = (function () {

  class Handle {
    constructor() {

    }

    urlStructure(count) {
      let url = `http://api.icndb.com/jokes/random/${count}`;

      // create http request
      let xhr = new XMLHttpRequest();

      xhr.open('GET' , url , true);

      xhr.onload = function() {
        if(this.status === 200 ) {
          let response = JSON.parse(xhr.responseText).value;
          let resArray = Array.from(response);

          resArray.forEach(item => {
            // get joke property
            const joke = item.joke;

            // add joke to list text
            ui.showJokes(joke);
          })
        }
      }

      xhr.send();

    }

  }

  // instance
  let handle = new Handle();

  // return methods
  return { // object to return methods in this class.
    urlStructure: function(count) {
      return handle.urlStructure(count);
    }
  }

})()

export default handleFunc; // export main function to use return object.