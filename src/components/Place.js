export default function Place(props) {
  return (

		<div className="place">
			<div className="left">
				<img src={`${props.data.picUrl}`}/>
			</div>
			<div className="right">
				<div className="location">
					<h5 className="location-name">{props.data.location}</h5>
					<a href={`${props.data.mapUrl}`}> View on Google Maps </a>
				</div>
				<div className="about">
					<h1>{props.data.title}</h1>
					<h5 className="dates">Visit from {props.data.bestMonths.start} to {props.data.bestMonths.end}</h5>
					<h6>{props.data.description}</h6>
				</div>
			</div>
		</div>
  );
}