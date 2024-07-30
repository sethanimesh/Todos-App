const person = {
    name: "Animesh Seth",
    address: {
        city: "Delhi",
        state: "Tamil Nadu"
    },
    profiles: ["Twitter", "Facebook", "Instagram"],

    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}

export default function LearningJavascript(){
    return (
        <>
            <h1>JavaScript</h1>
            <div>{person.name}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}


