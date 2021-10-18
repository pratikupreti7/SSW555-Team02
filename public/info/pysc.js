let  psychiatrist  = [
    {
        name: 'Alan Pearl, MD ',
        patient_count: 10,
        timming:["2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false,
        description: "Hello I am "
    },
    {
        name: 'Maurice Markewich, MD',
        patient_count: 40,
        timming:["10:30","12:30","1:30","2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false,
        description: ""
    },
    {
        name: 'Joshua Issac Dorsky, MD',
        patient_count: 20,
        timming:["2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false,
        description: ""

    },
    {
        name: 'Patrick Nelson, MD ',
        patient_count: 10,
        timming:["2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false
    },
    {
        name: 'Paul Hillsman, MD',
        patient_count: 40,
        timming:["10:30","12:30","1:30","2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false
    },
    {
        name: 'Cristian Erikson, MD',
        patient_count: 20,
        timming:["2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false

    },
     {
        name: 'ALex Hall, MD ',
        patient_count: 10,
        timming:["2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false,
        description: ""
    },
    {
        name: 'Mario Kovacic, MD',
        patient_count: 40,
        timming:["10:30","12:30","1:30","2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false
    },
    {
        name: 'Aron Ramsey, MD',
        patient_count: 20,
        timming:["2:30","3:30","4:30","5"],
        slots_available:10,
        is_available:false

    }

]; 

function pick_pysc(psy_array) {
let pysc=[]
for (i of psychiatrist) {
    let name=i.name
    let description=i.description
     list_pysc=(`Psychiatrist ${name}  and is ${description}`)
     pysc.push(list_pysc)
    } 
    return pysc
 }
let slots = pick_pysc(psychiatrist)
console.log(slots)







