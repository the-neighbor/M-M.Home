import StudentDirectory from "../components/studentDirectory";

export default function StudentsPage () {
    return (
        <div className="p-5">
            <div className="container mx-auto students-page plex-sans">
                <h1 className="text-center text-5xl">Student Directory</h1>
                <StudentDirectory />
            </div>
        </div>
        
    );
}