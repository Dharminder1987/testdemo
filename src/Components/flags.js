import { useState,useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function Flags(){
    const navigate = useNavigate()
     const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        console.log(response.data)
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleClick = (image,name) => {
    const data = {image , name}
    navigate("detail", { state: data });
  };

    return (
  <>
      <Container>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
       
       <Row>
          {filteredCountries.map((country) => (
             
            <Col md={3} sm={6} xs={12} lg={3}>
              <Link to="/detail" state={{ fromHome: { image :country.flags.png , name :  country.name.common,official : country.name.official } }}><div className='prod-con'>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                <h3> <a href="#">{country.name.common}</a> </h3>
                <a href="detailpage" className='btn'>{country.name.common}</a>
              </div></Link>
            </Col>
          ))}
          
        </Row>
 
      </Container>
    </>
    )
}