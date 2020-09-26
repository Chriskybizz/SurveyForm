function UpdateSelects() {
    var select_div,
        select_data,
        check_box,
        br,
        label;
    select_data = {
        "Front-End": "Front-end Projects",
        "Back-end Projects": "Back-end Projects",
        "Data Visualization": "Data Visualization",
        "Challenges": "Challenges",
        "Open Source Community": "Open Source Community",
        "Gitter help rooms": "Gitter help rooms",
        "Videos": "Videos",
        "City Meetups": "City Meetups",
        "Wiki": "Wiki",
        "Forum": "Forum",
        "Additional Courses": "Additional Courses"
    }
    for (const key in select_data) {
        check_box = document.createElement("INPUT");
        check_box.type = 'checkbox';
        check_box.id = key;
        check_box.value = key;

        label = document.createElement('label')
        label.htmlFor = key;
        label.appendChild(document.createTextNode(select_data[key]));

        br = document.createElement('br');

        select_div = document.getElementById('select-list');
        select_div.appendChild(check_box);
        select_div.appendChild(label);
        select_div.appendChild(br);
    }
}

UpdateSelects();


