import { Fragment } from "react";
import ProfileCard from "../component/ProfileCard";

export default function Profile() {

  const data = [
    {
      name: 'Mochammad Pratama Wibawa',
      nim: '21120119130062',
    },
    {
      name: 'Hana Adilah',
      nim: '21120119120024',
    },
    {
      name: 'Erandri Mekel Ilyasa',
      nim: '21120119130108',
    },
    {
      name: 'Amezry Azmi Hanif Shidqi',
      nim: '21120119130044',
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{color: 'white'}}>Profile</h1>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <ProfileCard
            name={item.name}
            nim={item.nim}
          />
        </Fragment>
      ))}
    </div>
  );
}
