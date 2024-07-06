const today= new Date(); /* create current date */

/* Function to format date*/

function Dategen(){

 return(

  new Intl.DateTimeFormat(

    'en-US', {dateStyle:'long'}

  ).format(today)

 );

}

{ /* by using curly braces javscript inserted within the element*/}

export default function Catprofile(){

  return(

    <>

    <h1>Cat Looks on {Dategen(today)} </h1>

    <img src="https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png" alt="cat"

    width={500} height={300}></img>

    <hr/>

   { <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2023/11/black-cat-breeds-.jpg?resize=720%2C780" alt="nature"

    width={600} height={350}></img>}

    </>

  );

}