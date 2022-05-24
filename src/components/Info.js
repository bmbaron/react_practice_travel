import Photo from '../images/ben.jpeg';

export default function Info() {
  return (
    <div className='info-container'>
			<img src={Photo} alt='Ben Baron headshot'></img>
			<h1 className='info--name'> Ben Baron </h1>
			<h5 className='info--job'> software developer </h5>
			<a href='https://github.com/bmbaron'> https://github.com/bmbaron </a>
			<div className='buttons'>
				<button className='btn btn-light'> email </button>
				<button className='btn btn-primary'> LinkedIn </button>
			</div>
    </div>
  );
}
