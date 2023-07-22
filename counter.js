let addBtn = document.querySelector("#add");
        let counter = document.querySelector("#counter");
        let subBtn = document.querySelector("#sub");
        let state = 0;
        updateState();
        addBtn.addEventListener('click', function(e){
            state++;
            updateState();
        });
        subBtn.addEventListener('click', function(e){
            state--;
            updateState();
        });

        function updateState(){
            counter.textContent = state;
        }