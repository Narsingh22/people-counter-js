let countEl = document.getElementById("count");
let entryRecord = document.getElementById("entry-record");
let totalRecord = document.getElementById("total-entry");

let count = 0;
let total = 0;

countEl.textContent = count;

function addPeople() {
    count += 1;
    countEl.textContent = count;
}

function saveCount() {
    if (count > 0) {
        entryRecord.textContent += `${count} - `;
        total += count;
    }
    totalRecord.textContent = "Total Entry - " + total;
    console.log(typeof totalRecord);
    count = 0;
    countEl.textContent = 0;
}

function clear(){
    totalRecord.textContent += "";
}