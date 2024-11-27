const addBtn = document.querySelector('.add-btn');

const jobsList = document.querySelector('.jobs-list');


function showInformation(e) {
    e.preventDefault();
    const myInfo = getInformation();
    console.log(myInfo);
    form.add(myInfo);
    
    // Clear the existing list first
    jobsList.innerHTML = '';
    
    // Use forEach to recreate the list
    const myList = form.lists;
    myList.forEach((item) => {
        const jobItem = document.createElement('div');
        jobItem.className ='job-item';

        const jobInfo = document.createElement('div');
        jobInfo.className ='job-info';

        const h3 = document.createElement('h3');
        h3.textContent = item.name;

        const p = document.createElement('p');
        p.textContent = item.job;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        const trashIcon = document.createElement('i');
        trashIcon.className = 'fas fa-trash';
        deleteBtn.appendChild(trashIcon);

        jobInfo.appendChild(h3);
        jobInfo.appendChild(p);
        jobItem.appendChild(jobInfo);
        jobItem.appendChild(deleteBtn);
        jobsList.appendChild(jobItem);

        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const index = form.lists.indexOf(item);
            form.remove(index);
            jobsList.removeChild(jobItem);
        })

    })
}

function getInformation() {
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    return new Inforamation(name,job);
}

addBtn.addEventListener('click', showInformation)