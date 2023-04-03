import { useEffect } from 'react';
import comingsoon from '../common/Images/26690.jpg'
function ComingSoon() {

    useEffect(() => {
     
    
    document.body.style.backgroundImage = "url("+comingsoon+")"; 
    document.body.style. backgroundPosition = "top"; 
    document.body.style. backgroundRepeat = "no-repeat"; 

      }, []);
    

  return (
    <>
     
    </>
  );
}

export default ComingSoon;
