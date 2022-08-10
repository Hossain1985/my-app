

function Card(props){
  const {contact,adress,DES,} = props;
 
  return    <div className='card'>
             <h2 className='fstake'>{contact}</h2>
             <h2 className='fstake'>{adress}</h2>
             <h2 className='fstake'>{DES}</h2>

            </div>
            

 
  
}


export default Card; 