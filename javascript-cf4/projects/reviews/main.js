// App State
const reviews = [
    {id:0, personaName: "Anna B.", job: "Web Designer", img: "https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg", descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit aliquid quia provident accusamus molestiae debitis totam nihil earum magni, praesentium nisi officiis eaque explicabo ipsa ut minus nulla nobis!'}, 
    {id:1, personaName: "Chris R.", job: "Java Junior Developer", img: "https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg", descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit aliquid quia provident accusamus molestiae debitis totam nihil earum magni, praesentium nisi officiis eaque explicabo ipsa ut minus nulla nobis!'}, 
    {id:2, personaName: "Olga C.", job: "Senior Project manager", img: "https://img.freepik.com/free-photo/positive-human-reactions-feelings-emotions-charming-elegant-middle-aged-sixty-year-old-female-with-short-gray-hair-with-pleased-smile-her-eyes-full-happiness-joy_343059-2855.jpg", descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit aliquid quia provident accusamus molestiae debitis totam nihil earum magni, praesentium nisi officiis eaque explicabo ipsa ut minus nulla nobis!'}, 
]

let personaId = Math.floor(Math.random() * reviews.length)

window.addEventListener('DOMContentLoaded', function() {
    showPersonaById(personaId)

    document.querySelector('#prevBtn').addEventListener('click', function() {
        onPrevBtnClicked()
    })

    document.querySelector('#nextBtn').addEventListener('click', function() {
        onNextBtnClicked()
    })
})

function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)
    const { personaName, job, img: image, descr } = persona
    document.querySelector('#personaImg').src = image
    document.querySelector('#personaName').innerHTML = personaName
    document.querySelector('#personaJob').innerHTML = job
    document.querySelector('#personaDescr').innerHTML = descr
}

/**
 * Actions taken after prev button clicked.
 * Actions include show previous persona.
 */
function onPrevBtnClicked() {
    showPrevPersona()
}

/**
 * Actions taken after next button clicked.
 * Actions include show next persona.
 */
function onNextBtnClicked() {
    showNextPersona()
}

/**
 * Circulary finds the previous persona id and shows the persona.
 */
function showPrevPersona() {
    personaId = (personaId < 0) ? reviews.length - 1 : --personaId
    showPersonaById(personaId)
}

/**
 * Circulary finds the next persona id and shows the persona.
 */
function showNextPersona() {
    personaId = (++personaId % reviews.length)
    showPersonaById(personaId)
}