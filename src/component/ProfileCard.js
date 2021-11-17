import Tilt from 'react-parallax-tilt';
import { GrGithub, GrInstagram } from 'react-icons/gr';

export default function Profilecard({ name, nim, image, github, instagram }) {
	return (
		<>
			<Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
				<div className="container">
					<div className="profile-wrapper">
						<img src={image} alt="profile" />
						<div className="profile-detail">
							<h2>{name}</h2>
							<p>{nim}</p>
						</div>
					</div>
					<div className="socmed">
						<a href={github} target="_blank" rel="noreferrer">
							<GrGithub color="#fff" size={28} className="icon" />
						</a>
						<a href={instagram} target="_blank" rel="noreferrer">
							<GrInstagram color="#fff" size={28} className="icon" />
						</a>
					</div>
				</div>
			</Tilt>
			<style jsx>{`
				.container {
					background-color: rgb(65, 65, 233);
					display: flex;
					justify-content: start;
					align-items: start;
					flex-direction: column;
					gap: 2rem;
					margin-bottom: 2rem;
					padding: 2rem;
					width: 36rem;
					height: 12rem;
					border-radius: 1.25rem;
					box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
					transition: all 0.2s cubic-bezier(0.6, -0.05, 0.01, 0.99);
				}
				.container:hover {
					transform: scale(1.05);
				}
				.profile-wrapper {
					width: 100%;
					display: flex;
					gap: 2.5rem;
				}
				.profile-detail {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: start;
				}
				.socmed {
					width: 100%;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
				}
				.icon {
					cursor: pointer;
				}
				h2,
				p {
					color: white;
					padding: 0;
					margin: 0;
				}
				img {
					height: 7.5rem;
					width: 7.5rem;
					border-radius: 999px;
					object-fit: cover;
				}
			`}</style>
		</>
	);
}
