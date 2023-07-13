import './stu.css';

// Example of a data array that
// you might receive from an API
const data = [
	{ name: "Anom", rollno:"727721EUIT116", gender: "Male" },
	{ name: "Megha", rollno:"727721EUIT125", gender: "Female" },
	{ name: "Subham", rollno:"727721EUIT132", gender: "Male" },
	{ name: "mikasa", rollno:"727721EUIT098", gender: "Female" },
	{ name: "Levi", rollno:"727721EUIT986", gender: "Male" },
	{ name: "kakashi", rollno:"727721EUIT676", gender: "Male" },
	{ name: "Rin", rollno:"727721EUIT087", gender: "Female" },
	{ name: "Gojo", rollno:"727721EUIT678", gender: "Male" },
	{ name: "Deku", rollno:"727721EUIT896", gender: "Male" },
	{ name: "Bakasta", rollno:"727721EUIT085", gender: "Male" },
	{ name: "Yami", rollno:"727721EUIT754", gender: "Male" },
	{ name: "Yuno", rollno:"727721EUIT876", gender: "Male" },
]

function StudentProfile() {
	return (
		<div className="App">
		<div className=''>
			<h1>STUDENT PROFILES</h1>
			</div>
			<table >
				<tr>
					<th>Name</th>
					<th>rollno</th>
					<th>Gender</th>
				</tr>
				<br></br>
				{data.map((val, key) => {
					return (
						
						<tr key={key}>
							<a href="#">
							<td>{val.name}</td>
						</a>
							<td>{val.rollno}</td>
							<td>{val.gender}</td>
						</tr>
					)
					
				})}
			</table>
		</div>
	);
}

export default StudentProfile;
