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

function pick_pysc1(psy_array) {
let pysc1=[]
for (i of psychiatrist) {
    let name=i.name
    let description=i.description
     list_pysc1=(`Psychiatrist ${name}  and is ${description}`)
     pysc1.push(list_pysc1)
    } 
    return pysc1
 }
let slots = pick_pysc1(psychiatrist)
console.log(slots)

// ----------------

let psyData = [{
    name: 'Alan Pearl',
    bio: 'Bio: I have expertise and knowledge in Psychodynamic Psychotherapy and Psychopharmacology and specialize in treating Anxiety Disorders, Panic Disorder, Depression, Dysthymia and Personality Disorders.In addition I have training in Psychiatry and Law and am able to perform Forensic Psychiatric Evaluations.',
    issues: "Issues : Alcohol Use, Bipolar Disorder, Borderline Personality, Codependency,Coping Skills, Divorce, Dual Diagnosis, Emotional Disturbance, Grief, Life Transitions, Medication Management, Obesity",
    mental_health: 'Mental Health: Mood Disorders, Personality Disorders',
    patient_count: 'Patient Count:10',
    timming: 'Timming:2:30,3:30',
    slots_available: 'Slots Available:5',
    review1: "Review 1: I've been with the practice for a few months. My first time in therapy. I like the screening and matching approach. There of course is some randomness but all I can say is that I've made a lot of personal progress this year. Just saying that, even anonymously, isn't easy. There's lots of thoughtfulness in all aspects of their practice. It's a place where they take good care seriously.",
    review2: 'Review 2: Dr.Pearl is a gem. He is one of the few psychologists that I have encountered that truly goes out of their way to put patients first. He is genuine and approachable. With him, you will learn a lot about yourself and feel safe to move through some of your darkest moments. I recommend her without reservation',
},
{
    name: 'Alex Hall',
    bio: 'Bio: Dr. Alex Hall is American Board Certified in Psychiatry and Neurology as well as Board Certified in Child and Adolescent Psychiatry (Psychiatry and Neurology). Dr. Hall received his degree from the Albert Einstein College of Medicine of Yeshiva University..',
    issues: "Issues: ADHD, Anger Management,Behavioral Issues,Coping Skills,Divorce,Emotional Disturbance, Family Conflict,Grief,Life Coaching,Medication Management,Men's Issues,Obsessive-Compulsive (OCD)",
    mental_health: 'Mental Health: Mood Disorders, Thinking Disorders',
    patient_count:'Patient Count: 10',
    timming:'Timming: 2:30,3:30',
    slots_available:'Slots Available: 5',
    review1: "Review 1: I'm still working with Dr. Alex Hall, and he is both knowledgeable and personable. He is easily reached, stays in contact with other members of my team, and listens to my medication concerns.",
    review2: "Review 2: Alex, as he prefers to be called, is a highly intelligent and compassionate physician. He has helped me immensely!",
    review3: "Review 3: Dr. Hall has been an amazing psychiatrist and therapist who has helped me understand and change a number of patterns that had been interfering with my ability to live a more productive and enjoyable life. I am extremely grateful for his care.",
},
{
    name: 'Maurice Markewich',
    bio: 'Bio: I am a board-certified psychiatrist and former chief resident of the Columbia adult psychiatry program. I provide therapy and medication management for issues related to mood, anxiety, Obsessive-Compulsive Disorder, and ADHD. I also provide Eye Movement Desensitization and Reprocessing (EMDR) therapy for problems related to trauma.',
    issues: "Issues: ADHD,Anxiety,Borderline Personality, Chronic Illness, Depression, Divorce, Family Conflict, Grief, Medication Management, Narcissistic Personality, Obsessive-Compulsive (OCD),Racial Identity",
    mental_health: 'Mental Health: Mood Disorders,Personality Disorders',
    patient_count: "Patient Count: 40",
    timming:"Timming: 10:30,12:30,1:30,2:30",
    slots_available:"Slots Available: 6",
    review1:"Review 1: Excellent care with this Doctor. He has a great bed-side manner & takes the time to address all of your concerns. I have read horror stories about other doctors who just medicate you & rush you out the door but that is not the case with Dr. Markewich, he really cares about his patients.",
    review2: "Review 2: Must concur with the previous person's rating. I've been experiencing a living hell for over a year now where there is a great overlap between psychological issues complicated or caused by medical issues. It's a very frustrating process trying to figure out what is causing what. It's true so many Drs. just push pills on you and say see you next month. However, Dr. Markewich listens to everything you say.",
},
{
    name: 'Joshua Issac Dorsky',
    bio: 'Bio: He is certified by the American Board of Psychiatry and Neurology. He is a member of the American Psychiatric Association. Patients see Dr. Dorsky for a variety of reasons, including alcoholism, worry, depression, anxiety, and personality disorders',
    issues: "Issues:Addiction,Alcohol Use,Alzheimer's,Anger Management,Antisocial Personality,Anxiety, Autism,Behavioral Issues,Bipolar Disorder, Borderline Personality,Career Counseling,Chronic Illness",
    mental_health: 'Mental Health: Dissociative Disorders,Elderly Persons Disorders,Personality Disorders,Thinking Disorders',
    patient_count: "Patient Count: 20",
    timming:"Timming: 2:30,3:30",
    slots_available:"Slots Available: 5",
    review1:"Review 1: Excellent psychiatrist, he has been helping me with CBT for panic, I am now completely sane again, thanks doc. ",
    review2: "Review 2: I would highly recommend Dr Adam. He is reliable professional and extremely helpful.",
    review3: "Review 3:Consistent, humanistic, direct, compassionate and emotionally intelligent, Dr.Dorsky breeds trust and acts with integrity. While he is firm about boundaries and rules, it has only helped me. His kindness as well as his vibrant personality separate him from the often otherwise sterile nature of his industry. Thoughtful, he knows he stuff.",
},
{
    name: 'Patrick Nelson',
    bio: "Bio: He received his master's degree in family psychiatric and mental health nursing from Fairleigh Dickinson University. Mr. Nelson is certified by American Nurses Credentialing Center. He sees patients for a wide range of concerns and consultations like bipolar disorder, mental health consultation, sleep disorder, and stress.",
    issues: "Issues: ADHD, Anxiety, Behavioral Issues, Bipolar Disorder, Depression, Obsessive-Compulsive (OCD), Trauma and PTSD",
    mental_health: "Mental Health: Dissociative Disorders, Impulse Control Disorders, Mood Disorders, Psychosis, Thinking Disorders",
    patient_count: 'patient count: 10',
    timming: 'timming: 2:30,3:30',
    slots_available: 'slots available:5',
    review1: "Dr. Nelson is an exceptional listener, responsible communicator, and highly intelligent. He's been flexible, patient, and generous during Covid, and there's a much appreciated tone to our appointments. It is at once empathetic and professional.",
    review2:"Professional doctor and work. It was easy to get a appointment and I had a really good impression on my first meeting with him.",
    review3:"Professional doctor. We're having a great experience with him. He's respectful and patient. He has always answered all our questions as parents",
},
{
    name: 'Paul Hillsman',
    bio: "Bio: Dr. Hillsman received his medical degree at the National Medical University of Moscow and continued his medical education at the Mental Health Research Center where he received his residency training in clinical psychiatry with a specialty in child psychiatry. He also completed a fellowship program in child psychiatry at the Tufts Medical Center.",
    issues: "Issues: ADHD, Alcohol Use, Bipolar Disorder, Drug Abuse, Dual Diagnosis, Grief, Medication Management, Obsessive-Compulsive (OCD), Stress, Substance Use, Transgender, Trauma and PTSD",
    mental_health: "Mental Health: Mood Disorders",
    patient_count: "Patient count: 40",
    timming: "Timming: 10:30,12:30,1:30,2:30",
    slots_available:'Slots Available: 6',
    review1: "Review 1:Excellent doctor! I had bad experiences with other psychiatrists in the past, but I have finally found someone that is really helping me.",
    review2: "Review 2:Competent, reliable, kind. Totally recommended to anyone who need help dealing with their anxiety.",
    review3: "Review 3: I greatly appreciate his approach. I feel so much better since I'm going.",
},
{
    name: 'Cristian Erikson',
    bio: "Bio:I am a psychiatric advanced practice nurse with over 20 years of experience. I have degrees from Yale and Columbia Universities. I’ve crafted treatment for clients who have psychiatric disorders as well as substance abuse problems. I specialize in the care of adults and seniors.",
    issues: "Issues: ADHD, Adoption, Asperger's Syndrome, Autism, Behavioral Issues, Bipolar Disorder, Career Counseling, Chronic Illness, Coping Skills, Depression, Divorce, Emotional Disturbance",
    mental_health: "Mental Health: Mood Disorders, Psychosis, Thinking Disorders",
    patient_count: 'Patient Count: 20',
    timming: 'Timming: 2:30,3:30',
    slots_available: 'Slots Available: 5',
    review1: "Review 1:I can only say good things about this doctor who helped me wean off about a medication I was addicted to. He figured out another less addictive option that was right for me. He doesn’t throw medicine at you like my former doctor.",
    review2: "Review 2:I am very satisfied with the service I am receive from Dr. Erikson and his staff. Very helpful and knowledgeable.",
    review3: "Review 3:Fantastic psychiatrist and therapist! Especially during this period in my life.",
},
{
    name: 'Mario Kovacic',
    bio: "Bio:Dr. Kovacic is a board certified psychiatrist who integrates psychopharmacology, psychotherapy, marital, family, and spiritual factors in his treatment approach. He has practiced for more than 40 years and uses a wide variety of techniques tailored to the needs of the patient.Dr. Kovacic is a board certified psychiatrist who integrates psychopharmacology, psychotherapy, marital, family, and spiritual factors in his treatment approach. He has practiced for more than 40 years and uses a wide variety of techniques tailored to the needs of the patient.",
    issues: "Issues: ADHD, Depression, Grief, Sleep or Insomnia, Stress, Suicidal Ideation",
    mental_health: "Mental Health: Personality Disorders",
    patient_count: 'Patient Count: 40',
    timming: 'Timming: 10:30,12:30,1:30,2:30',
    slots_available: 'Slots Available: 6',
    review1: "Review 1: Excellent Doctor, very knowledgeable, quickly assesses the situation and provides solutions. Better than any other mental health professional I've used.",
    review2: "Review 2: What a wonderful doctor! This man has a warm, gentle soul.",
    review3: "Review 3: Dr. Kovacic is highly intelligent and extremely knowledgeable about his field. He is warm and compassionate and uses humor appropriately. He’s the best psychiatrist I’ve ever had.",
},
{
    name: 'Aron Ramsey',
    bio: "Bio:Dr. Aron Ramsey graduated from Harvard College with a B.A. in Biology, focusing his research on translational neuroscience and teaching review courses at the Harvard Bureau of Study Council. He obtained his M.D. from the University of Michigan Medical School, where he was awarded for his professionalism and humanism.",
    issues: "Issues:Alcohol Use, Anxiety, Behavioral Issues, Borderline Personality, Child, Depression, Drug Abuse, Medication Management, Obsessive-Compulsive (OCD), Substance Use, Suicidal Ideation",
    mental_health: "Mental Health: Dissociative Disorders, Mood Disorders, Psychosis",
    patient_count: "Patient count:20",
    timming: "Timming: 2:30,3:30",
    slots_available: "Slots Available: 5",
    review1: "Review: Great psychiatrist with a grounded and down-to-earth manner and approach. He is disarming, accessible and willing to consider different options / alternatives and perspectives. Highly recommend.",
    review2: "Review: Short term therapy. no time wasting with long history and blaming my mother. he got at the problem and told me how to solve it. very impressive!",
},
];

function displayPsyProfile(psyName) {
    let getSelectedProfile = {};
    for(i=0; i<psyData.length; i++){
        if(psyData[i].name === psyName) {
            getSelectedProfile = psyData[i];
            break
        }
    }
    console.log(getSelectedProfile)
    localStorage.setItem('psyProfile', JSON.stringify(getSelectedProfile));
    location.href = "psy-profile.html"
}
