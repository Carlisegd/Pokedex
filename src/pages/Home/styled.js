import styled from 'styled-components'

export const PageHome = styled.div`
display: flex;
flex-direction: column;

width: 100%;

`

export const Div = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-content: space-around;
  justify-items: center;
  column-gap: 20px;
  row-gap: 20px;



`

export const Button = styled.div `
    display: flex;
    border-radius: 10em;
    width: 80px;
    border: none;
    border: 1px solid transparent;
    background-color: #FFCC03;
    transition: 0.2s ease;
    align-self: center; 
    align-items: center ;
    font-size: 0.8em;
    margin-left: 1.0em;
    padding: 0.5em;
    font-size:1em;
    font-weight: bold;
    text-align: center;
    color: #386ABB;
    justify-content: space-around;
    cursor: pointer;
    transition: transform 0.5s;
        :hover{
        background-color: #386ABB;
        color:white;
        transform: scale(1.2);
      }
      :active{
        background-color: transparent;
      
      }
`

export const FotoPokemon = styled.img `
  width: 100px;


`

export const DivPokemon = styled.div `
 display: flex;
 flex-direction: column;
 align-items: center;
 border: 1px solid #386ABB;
  height: 350px;
  width:350px;
  border-radius: 20px;
  justify-content: space-around;
  box-shadow:  2px 2px 2px grey;
  

  .nome{
    font-size:20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  

`
export const DivButton = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  .iconHome{
    color: #FFCC03;
    font-size: 50px;
    
  }


`
export const DivButtonPokemon = styled.div`
  display: flex;
`
export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
    
`

export const ButtonPagina = styled.div`
 position: relative;
  border: none;
  right: 50px;
  background-color: transparent;
  color: #386ABB;
  border-radius: 50px;
  transition: 0.2s ease;
  align-self: center; 
  font-size: 0.8em;
  margin-left: 5em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.9s;
    :hover{
      background-color: transparent;
      box-shadow: 0 0 4px 0 #386ABB inset, 0 0 4px 2px #386ABB;
      height: 50px;
    }
`