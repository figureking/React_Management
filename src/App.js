import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Customer from './Components/Customer'

const customers =[
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '홍길동',
    'birthday' : ' 20200622',
    'gender' : '남',
    'job' : '영업부'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : ' 20200622',
    'gender' : '남',
    'job' : '영업부'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/3',
      'name' : '홍길동',
      'birthday' : ' 20200622',
      'gender' : '남',
      'job' : '영업부'
      }
]

class App extends Component {
  render() {
    return (
      <div>
        { 
          customers.map(c => {
            return(
              <Customer
                key={c.id} /* map key값 에러*/
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />

            )
          })
        }
      </div>
      
    );
  }
}

export default App;
