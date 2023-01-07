import { useState, useEffect } from "react";
import StudentCard from "./studentCard";

export default function StudentDirectory() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getStudents() {
        try {
            const res = await fetch("/data/students.json");
            console.log(res);
            const json = await res.json();
            setStudents(json);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getStudents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex flex-wrap">
            {students.map((student) => (
                <div className="p-5" key={student.id}>
                    <StudentCard {...student} />
                </div>
            ))}
        </div>
    );
}