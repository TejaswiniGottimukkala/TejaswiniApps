import GetImageUrl from "./utilimg";



export default function Avatar({ person, size }) {

  return (

   <img

    className="avatar"

    src={GetImageUrl(person)}

    alt={person.name}

    width={size}

    height={size}

   />

  );

 }