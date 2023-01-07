export default function TechnologyPage () {
    return (
        <div className="p-5">
            <div className="container mx-auto technology-page">
                <h1 className="text-4xl plex-mono italic">//M-M</h1>
                <h1 className="text-4xl plex-mono italic">//Institute</h1>
                <h1 className="text-4xl plex-mono italic">//of</h1>
                <h1 className="text-4xl plex-mono italic">//Technology</h1>
                <section className="container text-md p-5 about plex-mono italic" id="about">
                    <p>
                        The M-M Institute of Technology currently provides comprehensive education and training in the fields of Computer Science, Networking and Software Engineering.
                    </p>
                </section>
                <section className="container text-md p-5 about plex-mono " id="programs">
                    <h2 className="text-3xl text-center m-5">Programs</h2>
                    <div className="w-full overflow-x-scroll">
                    <table className="table-auto text-xs md:text-md" id="programs-table">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Leader</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Current</td>
                                <td>TECH-050</td>
                                <td>Introduction to Computer Science</td>
                                <td>Introduction to the basic principles of computer science. Students are introduced to the foundations of programming, computer memory, and operating systems using Bash and the C programming language.</td>
                                <td>Maxime</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>TECH-058</td>
                                <td>Introduction to Networking</td>
                                <td>An introductory course that covers the basics of using, structuring, and configuring computer networks, and various protocols that computers use in order to communicate across them.</td>
                                <td>Xavier</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>TECH-150</td>
                                <td>Software Engineering I</td>
                                <td>A course that expands upon the computing principles of TECH-050 with and employs them in the development of desktop applications using C and C++. Students will be introduced to Object Oriented Programming.</td>
                                <td>Maxime</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>TECH-158</td>
                                <td>Web Development I</td>
                                <td>A course that introduces students to the basics of web development, and the technologies that are used to create modern web applications. Students will be introduced to HTML, CSS, and JavaScript, and will learn how to use them to create broser applications that communicate with servers using protocols like HTTP.</td>
                                <td>Xavier</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
                </section>
            </div>
        </div>
        );
}