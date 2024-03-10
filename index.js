const listContainer = document.getElementById('list-container')
function generateList(array) {
    let html = "<ul>";
    array.forEach(item => {
        if (Array.isArray(item)) {
            html += '<li>';
            html += generateList(item);
            html += '</li>';
        } else {
            html += 'li>' + item + '</li>';
        }
    });
    html += "</ul>";
    return html;
}

let array = [1, 2, [1.1, 1.2, 1.3], 3];
let html_list = generateList(array);
listContainer.innerHTML = html_list
