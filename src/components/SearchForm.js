import React, { useState, useEffect } from "react";
import axios from 'axios';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import CharacterList from './CharacterList';


const SearchBar = styled.div`
padding: 5px;
margin: 5px;
width: 40%;
height: 45%;
`;

const SearchButton = styled.button`
padding: 5px 10px;
background: #000;
color: #81f645;
border: none;
font-weight: 600;
:hover{
  transform: scale(1.1);
}
`;

const SearchForm = ({errors, touched, values, status}) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(()=> {
    if(status){
      setProfiles([profiles])
    }
  }, [profiles])
 
  return (
    <section className="search-form">
      <Form>
        <SearchBar>
          Who Ya Lookin' For, Kid? <Field type='text' name='nameSearch'/>
          {touched.nameSearch && errors.nameSearch && (<p className='error'>{errors.nameSearch}</p>)}
        </SearchBar>
        <SearchButton>Search</SearchButton>
      </Form>

      {profiles.map(profile=> (
        <div>
          <p>Looky Here:</p>
          <CharacterList profile={profile.id}/>
        </div>
      ))}

    </section>
  );
};

const FormikSearchForm = withFormik({
  mapPropsToValues({nameSearch}){
    return{
      nameSearch: nameSearch || ''
    };
  },

  validateSchema: Yup.object().shape({
    nameSearch: Yup.string().required,
  }),

  handleSubmit(values, {setstatus}){
    axios.post('https://reqres.in/api/users', values).then(res=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err.res);
    })
  }
})(SearchForm);


export default FormikSearchForm;