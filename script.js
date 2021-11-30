let inputfield = document.getElementById("inputfield")
let todocontainer = document.getElementById("todocontainer")
let button = document.getElementById("addbutton")

button.addEventListener('click', function(){
    let p = document.createElement('p');
    let B1 = document.createElement('button')
    let B2 = document.createElement('button')
    p.classList.add('pstyle');
    p.innerHTML = inputfield.value;
    todocontainer.appendChild(p);
    inputfield.value = "";
    
    B1.setAttribute('id','b1');
    B1.innerHTML = 'Edit';
    B1.classList.add('b1style')
    todocontainer.appendChild(B1);

    B2.setAttribute('id', 'b2');
    B2.innerHTML = 'Delete';
    B2.classList.add('b2style')
    todocontainer.appendChild(B2);

    B2.addEventListener('click', function(){
        todocontainer.removeChild(p);
        todocontainer.removeChild(B1);
        todocontainer.removeChild(B2);
    })
    B1.addEventListener('click', function(){
        inputfield.value = p.innerText;
        todocontainer.removeChild(p)
        todocontainer.removeChild(B1)
        todocontainer.removeChild(B2)
    })
})

