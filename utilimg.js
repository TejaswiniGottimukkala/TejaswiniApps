export default function GetImageUrl(person, size = 's') {

  return (

   'https://i.imgur.com/' +

   person.imageId +

   size +

   '.jpg'

  );

 }

