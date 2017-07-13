
// A search widget


function new_search (text) {
    console.log('The new search string is:', text);
}

function defineEventHandlers () {
    $('#cbSearchButton').on('click', function (event) {
        let text = $('#cbSearchText');
        if (text.hasClass('open')) {
            text.removeClass('open');
        } else {
            text.addClass('open');
        }
    });
    $('#cbSearchText').on('keypress', function (event) {
        if (event.key === 'Enter') {
            new_search(event.target.value);
        }
    });
}

function render () {
    let header = $("<span id='cbHeader' class='cb' />");
    header.append($("<input id='cbSearchButton' class='cb' type='image' " +
            "src='search-alt.png' width='24pix' />"));
    header.append($("<input id='cbSearchText' class='cb' type='text' />"));
    $('body').append(header);
}

$(document).ready(function () {
    render();
    defineEventHandlers ()
});
