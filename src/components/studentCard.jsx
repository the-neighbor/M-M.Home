export default function StudentCard(props) {
    return (
        <div className="card w-60 max-w-sm rounded border border-white">
            <div className="card-body">
                <img className="card-img-top" src={props.image ? props.image : "/assets/img/profile.png"} alt="Card image cap" />
                <h5 className="card-title text-2xl text-center">{props.name}</h5>
                <div class="px-6 pt-4 pb-2">
                    {props.subjects.map((subject)=><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{subject}</span> )}
                </div>
            </div>
        </div>
    );
}