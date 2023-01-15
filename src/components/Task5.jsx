import React, { useState } from 'react'

export default function UserData() {
        const [value1,setValue1] = useState(false)
        const [value2,setValue2] = useState(false)
        const [value3,setValue3] = useState('')
        const texts1 = ['Москва','Питер','Казань']
        const options = texts1.map((text, index) => {
            return <option key={index}>{text}</option>;
        });
        return(<div>
            <h2>Практические задачи 5</h2>
            <h3>1)Сделайте выпадающий список городов. Сделайте также абзац, в который будет выводиться выбор пользователя.</h3>
            <select value = {value1 }onChange={event =>  setValue1(event.target.value)}>
                <option value='Москва'>Москва</option>
                <option value='Питер'>Питер</option>
                <option value='Казань'>Казань</option>
            </select>
            <p>Ваш выбор {value1}</p>
            <h3>2)Пусть в массиве хранится список городов. Выведите с помощью цикла выпадающий список этих городов.</h3>
            <select value={value2} onChange={(event) => setValue2(event.target.value)}>
                {options}
            </select>
            <h3>3)С помощью выпадающего списка предложите пользователю выбрать к какой возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет.</h3>
            <select value = {value2 }onChange={event =>  setValue2(event.target.value)}>
                <option value='0-12'>0-12</option>
                <option value='13-17'>13-17</option>
                <option value='18-25'>18-25</option>
                <option value='25>'>25 и больше</option>
            </select>
            <h3>4)Даны 3 радиокнопочки. Дан абзац. Сделайте так, чтобы значение выбранной радиокнопочки выводилось в этот абзац.</h3>
                <input type="radio" name="radio" value = '1' checked = {value3 === '1'? true:false} onChange={event=>setValue3(event.target.event)}/>
                <input type="radio" name="radio" value = '2' checked = {value3 === '2'? true:false} onChange={event=>setValue3(event.target.event)}/>
                <input type="radio" name="radio" value = '3' checked = {value3 === '3'? true:false} onChange={event=>setValue3(event.target.event)}/>
        </div>
        )
            
}