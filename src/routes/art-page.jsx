export default function ArtPage () {
    return (
        <div className="p-5">
            <div className="container mx-auto art-page">
                <h1 className="text-4xl plex-serif">M-M</h1>
                <h1 className="text-4xl plex-serif">Institute</h1>
                <h1 className="text-4xl plex-serif">of</h1>
                <h1 className="text-4xl plex-serif">the</h1>
                <h1 className="text-4xl plex-serif">Arts</h1>
                <section className="container text-md p-5 about plex-serif" id="about">
                    <p>
                        The M-M Institute of the Arts currently focuses on education and training in the fields of Visual Arts, Graphic Design, and Illustration.
                    </p>
                </section>
                <section className="container text-xs md:text-md p-5 about plex-serif " id="programs">
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
                                <td>ART-101</td>
                                <td>Introduction to Visual Arts</td>
                                <td>Introduction to the basic principles of visual arts.</td>
                                <td>Capella</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>ART-102</td>
                                <td>Introduction to Graphic Design</td>
                                <td>Introduction to the basic principles of graphic design.</td>
                                <td>Maxime</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>ART-103</td>
                                <td>Drawing Fundamentals</td>
                                <td>A course for beginners to learn the basics of drawing from life and visual reference.</td>
                                <td>Oleg</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>ART-104</td>
                                <td>Painting Fundamentals</td>
                                <td>A course where students can expand upon their sketches using the foundations of acrylic, oil, and watercolor painting.</td>
                                <td>Capella</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>ART-105</td>
                                <td>Composition and Illustration: How Pictures Work</td>
                                <td>This course teaches students the principles of how layout and composition of shapes can be used in order to communicate emotion, atmosphere, and feeling</td>
                                <td>Maxime</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>ART-106</td>
                                <td>Illustration using Digital Mediums</td>
                                <td>A course for students to take their existing art skills and learn how they translate to and are assisted by digital mediums and the techniques they provide.</td>
                                <td>Maxime</td>
                            </tr>
                            <tr>
                                <td>Current</td>
                                <td>ART-107</td>
                                <td>Figure Drawing</td>
                                <td>A course for students to learn how to draw the human figure from life. Students will learn how to capture the pose, movement, and anatomy of the human body.</td>
                                <td>Oleg</td>
                            </tr>
                            <tr>
                                <td>Upcoming</td>
                                <td>ART-201</td>
                                <td>Introduction to Photography</td>
                                <td>Introduction to the basic principles of photography.</td>
                                <td>Regina</td>
                            </tr>
                            <tr>
                                <td>Upcoming</td>
                                <td>ART-202</td>
                                <td>Introduction to Animation</td>
                                <td>Introduction to the basic principles of animation primarily using 2D mediums.</td>
                                <td>Klaus</td>
                            </tr>
                            <tr>
                                <td>Upcoming</td>
                                <td>ART-203</td>
                                <td>Art History</td>
                                <td>A course for students to learn about the history of art and how it has evolved over time.</td>
                                <td>Regina</td>
                            </tr>
                            <tr>
                                <td>Upcoming</td>
                                <td>ART-204</td>
                                <td>Introduction to Video Production</td>
                                <td>How to apply photography fundamentals and concepts to video production, direction, and editing.</td>
                                <td>Regina</td>
                            </tr>
                            <tr>
                                <td>Upcoming</td>
                                <td>ART-205</td>
                                <td>Introduction to 3D Modeling</td>
                                <td>Introduction to the basic principles of 3D modeling in Blender and how it can be used in the visual arts.</td>
                                <td>Klaus</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </section>
            </div>
        </div>
        );
}