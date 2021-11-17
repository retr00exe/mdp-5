import { Fragment } from 'react';
import ProfileCard from '../component/ProfileCard';

export default function Profile() {
	const data = [
		{
			name: 'Mochammad Pratama Wibawa',
			nim: '21120119130062',
			image: 'https://regonline.undip.ac.id/data/foto_ktm/21120119130062.jpg',
			github: 'https://github.com/PratamaWibi',
			instagram: 'https://www.instagram.com/pratwib',
		},
		{
			name: 'Hana Adilah',
			nim: '21120119120024',
			image: 'https://regonline.undip.ac.id/data/foto_ktm/21120119120024.jpg',
			github: 'https://github.com/haanzzeell',
			instagram: 'https://www.instagram.com/hanaadilah',
		},
		{
			name: 'Erandri Mekel Ilyasa',
			nim: '21120119130108',
			image: 'https://regonline.undip.ac.id/data/foto_ktm/21120119130108.jpg',
			github: 'https://github.com/retr00exe',
			instagram: 'https://www.instagram.com/mekelilyasa',
		},
		{
			name: 'Amezry Azmi Hanif Shidqi',
			nim: '21120119130044',
			image: 'https://regonline.undip.ac.id/data/foto_ktm/21120119130044.jpg',
			github: 'https://github.com/AmezryAzmi',
			instagram: 'https://www.instagram.com/amezryazmi',
		},
	];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1 style={{ color: 'white' }}>Anggota Kelompok</h1>
			{data.map((item, index) => (
				<Fragment key={item.id}>
					<ProfileCard
						name={item.name}
						nim={item.nim}
						image={item.image}
						github={item.github}
						instagram={item.instagram}
					/>
				</Fragment>
			))}
		</div>
	);
}
