import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';
export function Detailed(){
  const navigate = useNavigate()
  const [name,setName] = useState("Loading...")
  const [image, setImage] = useState("Loading...")
  const [officialname , setOfficialName] = useState("Loading..")
  const locate = useLocation();
  console.log(locate.state)
  useEffect(()=>{
setName(locate.state?.fromHome.name);
setImage(locate.state?.fromHome.image);
setOfficialName(locate.state?.fromHome.official)
  },[])
return (
    <>
     <Container>
        <div className='prod-detail'>
          <button onClick={()=>navigate("/")}>Back</button>
          <h2>Detail </h2>
          <div className='countryname'>
            {name}</div>
            <img src={`${image}`} alt="ImageLogo"/>
            <p>{officialname}</p>
        </div>
  </Container>
    </>
) 
}