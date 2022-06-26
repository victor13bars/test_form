import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <form>
                <h1>Регистрация</h1>
                <input name='name' type="text" placeholder='Введите Имя и Фамилию'/>
                <input name='email' type="text" placeholder='Введите email'/>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}

export default App;
