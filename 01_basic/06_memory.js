//=================================================================
//stack Memory - Used by primitive datatype (it sent a copy of the data)
//heap memory - used by Non-primitive datatype (it changes the actual data)

let name1 = "Nishant"
let name2 = name1
console.table([name1, name2]);
name2 = "Saurabh"
console.table([name1, name2])

let emp1={
    name : "Nishant",
    cont: 9625785175
}

let emp2 = emp1
console.table([emp1, emp2])


emp2.cont = 7870130309
console.table([emp1, emp2])
