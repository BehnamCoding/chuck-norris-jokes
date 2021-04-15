// imports
import handle from './handle';


// variables
const btn_create = document.querySelector('#btn-create');
const count_input = document.querySelector('#count');
const list_area = document.querySelector('#ul');

// loadAllEvents
loadAllEvents();

function loadAllEvents() {

    btn_create.addEventListener('click' , createFunc);

}

// functions

function createFunc() {
    // get inputs value
    let count = count_input.value;

    // fetch api
    handle.urlStructure(count);

    // reset jokes after new request
    list_area.innerHTML = '';
    count_input.value = 1;
}
