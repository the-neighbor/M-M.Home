export default function FacilitiesPage() {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

    setFacilities([
        {
            id: 1,
            name: "Facility 1",
            description: "This is the first facility.",
        },
        {
            id: 2,
            name: "Facility 2",
            description: "This is the second facility.",
        },
        {
            id: 3,
            name: "Facility 3",
            description: "This is the third facility.",
        },
        ]);

//   useEffect(() => {
//     fetchFacilities()
//       .then((data) => {
//         setFacilities(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error) {
//     return <ErrorPage error={error} />;
//   }

  return (
    <div className="container">
      <h1>Facilities</h1>
      <div className="row">
        {facilities.map((facility) => (
          <div key={facility.id} className="col-md-4">
            <h2>{facility.name}</h2>
            <p>{facility.description}</p>
            </div>
        ))}
        </div>
    </div>
    );
}