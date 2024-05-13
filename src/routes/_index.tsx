import {Next} from "~/components/Next"
import {Previous} from "~/components/Previous"

const IndexRoute = () => {
    return (
        <main>
            <section id="developer">
                <a
                    href="https://kentcdodds.github.io/InfiniteWPM/#/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h1>Developer</h1>
                </a>

                <div className="two-cols">
                    <div>
                        <p>Web developer</p>
                        <p>Software engineer</p>
                    </div>

                    <a
                        href="https://atlassian.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/atlassian.png" alt="atlassian logo" />
                    </a>
                </div>

                <Next to="#companies" />
            </section>

            <section id="companies">
                <h1>Companies</h1>

                <div className="companies">
                    <a
                        href="https://microsoft.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/microsoft.png" alt="microsoft logo" />
                    </a>

                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/google.png" alt="google logo" />
                    </a>

                    <a
                        href="https://apple.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/apple.png" alt="apple logo" />
                    </a>
                </div>

                <Previous to="#developer" />
                <Next to="#education" />
            </section>

            <section id="education">
                <h1>Education</h1>

                <div className="two-cols">
                    <div className="education">
                        <p>College</p>
                        <p>4 years</p>
                        <p>Bootcamp</p>
                        <p>12-16 weeks</p>
                    </div>

                    <a
                        href="https://https://www.utexas.edu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/longhorns.png" alt="ut logo" />
                    </a>
                </div>

                <Previous to="#companies" />
                <Next to="#subjects" />
            </section>

            <section id="subjects">
                <h1>Subjects</h1>
                <p>Math & science</p>
                <p>Anything with logical or critical thinking</p>
                <Previous to="#education" />
                <Next to="#office" />
            </section>

            <section id="office">
                <h1>Office</h1>

                <div className="two-cols">
                    <div>
                        <p>Work from home</p>
                        <p>9AM - 4PM</p>
                        <p>On call</p>
                    </div>

                    <a href="/desk.jpg" target="_blank" rel="noreferrer">
                        <img
                            className="frame"
                            src="/desk.jpg"
                            alt="desk setup"
                        />
                    </a>
                </div>

                <Previous to="#subjects" />
                <Next to="#description" />
            </section>

            <section id="description">
                <h1>Daily work</h1>

                <div className="two-cols">
                    <div>
                        <p>Write and review code</p>
                        <p>Break down problems</p>
                        <p>Create design documents</p>
                        <p>Meetings</p>
                    </div>

                    <a href="/vscode.png" target="_blank" rel="noreferrer">
                        <img src="/vscode.png" alt="vscode setup" />
                    </a>
                </div>

                <Previous to="#office" />
                <Next to="#salary" />
            </section>

            <section id="salary">
                <h1>Salary</h1>

                <div className="salary">
                    <p>$100,000</p>
                    <div className="range" />
                    <p>$250,000</p>
                </div>

                <Previous to="#description" />
                <Next to="#interesting" />
            </section>

            <section id="interesting">
                <h1>Interesting</h1>

                <div className="interesting">
                    <a
                        href="https://compressed.fm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/compressed.png" alt="compressed.fm logo" />
                    </a>

                    <a
                        href="https://bradgarropy.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/bg.png" alt="bg logo" />
                    </a>

                    <a
                        href="https://youtube.com/bradgarropy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/youtube.png" alt="youtube logo" />
                    </a>
                </div>

                <Previous to="#salary" />
                <Next to="#demo" />
            </section>

            <section id="demo">
                <h1>Demonstration</h1>
                <p>Minecraft</p>
                <p>Website code</p>

                <a
                    href="https://monkeytype.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Typing test
                </a>

                <Previous to="#interesting" />
                <Next to="#minecraft" />
            </section>

            <section id="minecraft">
                <div className="minecraft">
                    <img src="/minecraft.png" alt="minecraft screenshot" />
                </div>

                <Previous to="#demo" />
                <Next to="#questions" />
            </section>

            <section id="questions">
                <div className="questions">
                    <h1>Questions</h1>
                    <img src="/bulldog.png" alt="highland park bulldog" />
                </div>

                <Previous to="#minecraft" />
            </section>

            {/* companies */}
        </main>
    )
}

export default IndexRoute
