// imports

const uiFunc = (function () {

    class Ui {
        constructor() {
            this.list_area = document.querySelector('#ul');
        }

        showJokes(joke) {
            // create li
            const li = document.createElement('li');
            li.textContent = joke;

            // append li to ul
            this.list_area.appendChild(li);
        }

    }

    // instance
    const ui = new Ui();

    // return methods
    return {
        showJokes: function (joke) {
            return ui.showJokes(joke);
        }
    }

})()

export default uiFunc; // export main function to use return object.