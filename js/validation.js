function validateView1() {
    const groups = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
    let valid = true;
    groups.forEach(group => {
        const radios = document.getElementsByName(group);
        if (![...radios].some(radio => radio.checked)) valid = false;
    });
    return valid;
}

function validateView2() {
    const groups = ['p7', 'p8', 'p9', 'p10', 'p11', 'p12'];
    let valid = true;
    groups.forEach(group => {
        const radios = document.getElementsByName(group);
        if (![...radios].some(radio => radio.checked)) valid = false;
    });
    return valid;
}