import { ApiCountries } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../globalConstants.ts';
import CountriesList from '../../components/CountriesList/CountiesList.tsx';
import CountryInfo from '../../components/CountryInfo/CountryInfo.tsx';




const Countries = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<ApiCountries[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const countriesResponse = await axios<ApiCountries[]>(BASE_URL);
    setCountries(countriesResponse.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData().catch(e => console.error(e));
  }, [fetchData]);

  return (
    <div className="d-flex justify-content-between mx-3 my-3">
      {loading ?
        <div className='text-center p-5' style={{width: '350px'}}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <CountriesList countries={countries} onClickCountry={(alphaCode) => setSelectedCountryCode(alphaCode)}/>}
      {selectedCountryCode ? <CountryInfo alpha3Code={selectedCountryCode}/> :
        <p className="me-auto mt-3 ps-3 pt-3">Выберите страну из списка</p>}
    </div>
  );
};

export default Countries;