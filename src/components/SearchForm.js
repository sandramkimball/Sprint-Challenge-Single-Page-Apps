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
font-weight: 700;
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
          Who Ya Lookin' For, Kid? <Field type='text' name='nameSearch' placeholder=' Name Only'/>
          {touched.nameSearch && errors.nameSearch && (<p className='error'>{errors.nameSearch}</p>)}
          <SearchButton>Search</SearchButton>
        </SearchBar>
      </Form>


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

  handleSubmit(nameSearch) {
    if(nameSearch == CharacterList.name){
      return `I found ${nameSearch}.`
    } else {
      return `They were eaten in this dimension.`
    }

}}) (SearchForm);



export default FormikSearchForm;

// CharacterList.filter(nameSearch=>{
//   if(nameSearch == item.name){
//       return item
//     }
// })

// {profiles.map(profile=> (
//   <div>
//     <p>Looky Here:</p>
//     <CharacterList profile={profile.id}/>
//   </div>
// ))}