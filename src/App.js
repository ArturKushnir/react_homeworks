import React from 'react';
import Simpson from "./components/simpson";
import Character from "./components/characters/characters";
import Characters from "./components/characters/characters";
//{id, name, status, species, gender, image}
const App = () => {
    return (
        <div>
          <Simpson name={'Bart'} surname={'Simpson'} age={10} photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
          <Simpson name={'Homer'} surname={'Simpson'} age={40} photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
          <Simpson name={'Marge'} surname={'Simpson'} age={38} photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
          <Simpson name={'Lisa'} surname={'Simpson'} age={9} photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
          <Simpson name={'Meggi'} surname={'Simpson'} age={1} photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>

            <Characters id={1} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} />
            <Characters id={2} name={'Morty Smit'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'} />
            <Characters id={3} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'} />
            <Characters id={4} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'} />
            <Characters id={5} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'} />
            <Characters id={6} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'} />
        </div>
    );
};

export default App;