let  psychiatrist  = [
    {
        name: 'Alan Pearl, MD ',
        patient_count: 10,
        timming:["2:30 pm","3:30 pm","4:30 pm","5:30 pm","6:30 pm"],
        slots_available:10,
        is_available:false,
        description: ""
    },
    {
        name: 'Maurice Markewich, MD',
        patient_count: 40,
        timming:["2:30 pm","3:30 pm","4:30 pm","5:30 pm","6:30 pm"],
        slots_available:10,
        is_available:false,
        description: ""
    },
    {
        name: 'Joshua Issac Dorsky, MD',
        patient_count: 20,
        timming:["2:30 pm","3:30 pm","4:30 pm","5:30 pm","6:30 pm"],
        slots_available:10,
        is_available:false,
        description: ""

    },
    {
        name: 'Patrick Nelson, MD ',
        patient_count: 10,
        timming:["2:30 pm","3:30 pm","4:30 pm","5:30 pm","6:30 pm"],
        slots_available:10,
        is_available:false
    },
    {
        name: 'Paul Hillsman, MD',
        patient_count: 40,
        timming:["2:30 pm","3:30 pm","4:30 pm","5:30 pm","6:30 pm"],
        slots_available:10,
        is_available:false
    },
    {
        name: 'Cristian Erikson, MD',
        patient_count: 20,
        timming:["2:30 pm","3:30 pm","4:30 pm","5:30 pm","6:30 pm"],
        slots_available:10,
        is_available:false

    },
     {
        name: 'ALex Hall, MD ',
        patient_count: 10,
        timming:["2:30 pm",":30 pm","4:30 pm","5:30 pm","6:30 pm"],
        slots_available:10,
        is_available:false,
        description: ""
    },
    {
        name: 'Mario Kovacic, MD',
        patient_count: 40,
        timming:["1:30 pm","4:30 pm","8:30 pm"],
        slots_available:10,
        is_available:false
    },
    {
        name: 'Aron Ramsey, MD',
        patient_count: 20,
        timming:[" 2:30 pm "," 3:30 pm "," 6:30 pm "],
        slots_available:10,
        is_available:false

    }

]; 

function pick_date(psy_array) {
let slots=[]
for (i of psychiatrist) {
    let name=i.name
    let timming=i.timming
     item=(`Psychiatrist ${name} is available for the following timings ${timming}`)
     slots.push(item)
    } 
    return slots
 }
let slots = pick_date(psychiatrist)
console.log(slots)




function pick_psy(psy_array) {
    let psy_list = Math.floor(Math.random() * psy_array.length);
    return psy_array[psy_list];
    
}

let psy = pick_psy(psychiatrist);
// console.log(psy) prints psychiatrist details

let assign_to_user=psy.name
console.log(assign_to_user); // prints name

function date_button() {
    

    document.getElementById("date_id").innerHTML =list_slots;
}

function psyc_button() {
    document.getElementById("psyc_id").innerHTML = assign_to_user;
    
}

function psyc_name() {
    document.getElementById("psyc_name").innerHTML = assign_to_user;
}

function test()
{
let array;
for(let i=0;i<psychiatrist.length;i++)
{
    for(let key in psychiatrist[i])
    {
        if(psychiatrist[i].name=assign_to_user)
        {
             array=psychiatrist[i].timming
        }
    }
}
return array; 
}
list_slots=test(assign_to_user)
console.log(test(assign_to_user))



