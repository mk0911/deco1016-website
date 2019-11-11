document.querySelector('form').addEventListener('submit', function(e) {
     const task = document.querySelector('#st', '#suburb', '#towm', '#postcode').value;

     let tasks;

     if(localStorage.getItem('#st', '#suburb', '#towm', '#postcode') == null) {
        // tasks = [];
     } else {
        const tasks = JSON.parse(localStorage.getItem('#st', '#suburb', '#towm', '#postcode'));

        tasks.forEach(function(task) {
           
        })
     }
     tasks.push(task);

     localStorage.setItem('#st', '#suburb', '#towm', '#postcode', JSON.stringify(tasks));
}) 
