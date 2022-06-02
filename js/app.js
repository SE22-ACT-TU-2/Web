//server = 'https://reedsailing.xyz/api/';
//server = 'http://127.0.0.1:8000/api/';
// server = 'https://114.116.194.3:8000/api/';
server = 'https://acttu2.2022martu1.cn/api/';
function insert_option(form, select, value, content) {
    var option = document.createElement('option');
    option.innerText = content;
    $(option).attr('value', value);
    select.append(option);
}

function time_check(start, end) {
    return Date.parse(start) <= Date.parse(end);
}
