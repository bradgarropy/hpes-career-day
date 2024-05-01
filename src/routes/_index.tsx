import type {MetaFunction} from "@remix-run/node"

import {Next} from "~/components/Next"
import {Previous} from "~/components/Previous"

export const meta: MetaFunction = () => [
    {
        title: "remix starter | home",
    },
]

const IndexRoute = () => {
    return (
        <main>
            <section id="education">
                <h1>Education</h1>
                <p>College | 4 years</p>
                <p>Bootcamp | 12-16 weeks</p>
                <Next to="#day" />
            </section>

            <section id="day">
                <h1>Work Day</h1>
                <p>9AM - 4PM</p>
                <p>On call shifts</p>
                <Previous to="#education" />
                <Next to="#description" />
            </section>

            <section id="description">
                <h1>Daily Work</h1>
                <p>Write and review code</p>
                <p>Create design documents</p>
                <p>Break down problems</p>
                <p>Meet with stakeholders</p>
                <Previous to="#day" />
                <Next to="#subjects" />
            </section>

            <section id="subjects">
                <h1>Subjects</h1>
                <p>Math & Science</p>
                <p>Anything with logical or critical thinking</p>

                <Previous to="#description" />
                <Next to="#salary" />
            </section>

            <section id="salary">
                <h1>Salary</h1>
                <p>$100,000 - $250,000</p>
                <Previous to="#subjects" />
                <Next to="#interesting" />
            </section>

            <section id="interesting">
                <h1>Interesting</h1>
                <p>Can be shared on the internet</p>
                <p>YouTube</p>
                <p>Podcast</p>
                <Previous to="#salary" />
                <Next to="#demo" />
            </section>

            <section id="demo">
                <h1>Demonstration</h1>
                <p>Minecraft</p>
                <p>Website code</p>
                <p>Name / animal game</p>
                <Previous to="#interesting" />
                <Next to="#questions" />
            </section>

            <section id="questions">
                <h1>Questions</h1>
                <Previous to="#demo" />
            </section>

            {/* companies */}
            {/* applications */}
        </main>
    )
}

export default IndexRoute
