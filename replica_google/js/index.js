let microphone = document.getElementById("microphone");
let search_input_text = document.getElementById("search_input_text");
let cross = document.getElementById("cross");

document.addEventListener('keydown', (event) => {

    change();

});

document.addEventListener('keyup', (event) => {

    change();

});

document.addEventListener('keypress', (event) => {

    change();

});


function change(){

    if(search_input_text.value != ""){

        microphone.setAttribute('style', 'border-left: 1px solid var(--line-color);');
        cross.setAttribute('style', 'display:block;');

    }else{

        microphone.removeAttribute('style');
        cross.removeAttribute('style');

    }
    

}

function delete_input_data(){

    search_input_text.value = "";
    change();

}
