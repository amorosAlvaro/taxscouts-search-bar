import styled from 'styled-components';

const SearchContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  height: 6vh;
  background: grey;
  opacity: 0.3;
  border: 10rem;
  padding-right: 2rem;
  `;

const SearchContainerForm = styled.form`
  display: flex;
  align-items: center;
  z-index: 2;
  height: 2.5rem;
  width: 30rem;
  background-color: white;
  border-radius: 10rem;
  opacity: 1;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const SearchContainerFormInput = styled.input`
  border: none;
  height: 100%;
  width: 22rem;
  flex-grow: 1;
  outline: none;
  padding: 0.2rem 1.5rem 0;
  font-size: inherit;
`;

const SearchContainerFormDelete = styled.button`
  height: 80%;
  font-size: 1.8rem;
  background-color: transparent;
  border: none;
  border-right: 1px solid black;
  padding-right: 1.2rem;`;

const SearchContainerFormSubmit = styled.button`
  width: 4rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export {
  SearchContainer, SearchContainerForm, SearchContainerFormInput,
  SearchContainerFormDelete, SearchContainerFormSubmit
};
