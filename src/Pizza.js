import React, {useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios';
import './Pizza.css'

const schema = yup.object().shape({
    name: yup.string().required('username is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().required('size is required'),
    sauce: yup.string().required('sauce is required'),
    substitute: yup.boolean(),
    instructions: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.string(),
    canadianBacon: yup.string(),
    spicyItalianSausage: yup.string(),
    grilledChicken: yup.string(),
    onions: yup.string(),
    greenPeppers:  yup.string(),
    dicedTomatoes: yup.string(),
    blackOlives: yup.string(),
    roastedGarlic: yup.string(),
    artichokeHearts: yup.string(),
    threeCheese: yup.string(),
    pineapple: yup.string(),
    extraCheese: yup.string(),
})

export default function Pizza () {
    const [formValues, setFormValues] = useState({name: '', size: '', sauce: '', substitute: false, instructions: ''})
    const [errors, setErrors] = useState({name: ''})
    const [disabled, setDisabled] = useState(true)
    const [orders, setOrders] = useState([])
    const apiURL = 'https://reqres.in/api/orders'

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, name: ''}))
        .catch(err => setErrors ({...errors, [name]: err.errors[0]}))
    }

    const onChange = event => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(event.target.name, event.target.value)
        setFormValues({...formValues, [name]: valueToUse})   
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post(apiURL, {formValues})
        .then(res => {
            setOrders([...orders, formValues])
        })
        .catch(err => {
            console.log(err)
        })
        console.log(formValues)
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return(
        <div className="App">
            <form className="pizzaForm" id="pizza-form" onSubmit={onSubmit}>
                <header>
                    <h4>Build Your Own Pizza!</h4>
                    <img alt="pizza-banner" width="100%" height="auto" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"></img>
                </header>
                <h3>Build Your Own Pizza</h3>
                <div className = "error-container" style={{color:'red'}}>
                    <div>{errors.name}</div>
                </div>
                <section>
                    <h4>Name</h4>
                    <div id="username" className="choice">
                        <input id="user-name" type="text" name="name" onChange={onChange} />
                    </div>
                </section>
                <section>
                    <h4>Choice of Size</h4>
                    <p>Required</p>
                    <div id="size-choice" className="choice">
                        <select id="size-dropdown" name="size" onChange={onChange} value={formValues.size}>
                            <option value="" disabled>Size...</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Family">Family</option>
                        </select>
                    </div>
                </section>
                <section>
                    <h4>Choice of Sauce</h4>
                    <p>Required</p>
                    <div id="sauce-choice" className="choice">
                        <span>
                            <input type="radio" id="original-red" value="Original Red" name="sauce" onChange={onChange} />
                            <label htmlFor="original-red">Original Red</label>
                        </span>
                        <span>
                            <input type="radio" id="garlic-ranch" value="Garlic Ranch" name="sauce" onChange={onChange} />
                            <label htmlFor="garlic-ranch">Garlic Ranch</label>
                        </span>
                        <span>
                            <input type="radio" id="bbq-sauce" value="BBQ Sauce" name="sauce" onChange={onChange} />
                            <label htmlFor="bbq-sauce">BBQ Sauce Red</label>
                        </span>
                        <span>
                            <input type="radio" id="spinach-alfredo" value="Spinach Alfredo" name="sauce" onChange={onChange} />
                            <label htmlFor="spinach-alfredo">Spinach Alfredo</label>
                        </span>
                    </div>
                </section>
                <section>
                    <h4>Add Toppings</h4>
                    <p>Choose up to 10</p>
                    <div id="toppings-choice" className="choice">
                        <span>
                            <input type="checkbox" id="pepperoni" value="Pepperoni" name="pepperoni" onChange={onChange} />
                            <label htmlFor="pepperoni">Pepperoni</label>
                        </span>

                        <span>
                            <input type="checkbox" id="sausage" value="Sausage" name="sausage" onChange={onChange} />
                            <label htmlFor="sausage">Sausage</label>
                        </span>

                        <span>
                            <input type="checkbox" id="canadian-bacon" value="Canadian Bacon" name="canadianBacon" onChange={onChange} />
                            <label htmlFor="canadian-bacon">Canadian bacon</label>
                        </span>

                        <span>
                            <input type="checkbox" id="spicy-italian-sausage" value="Spicy Italian Sausage" name="spicyItalianSausage" onChange={onChange} />
                            <label htmlFor="spicy-italian-sausage">Spicy Italian Sausage</label>
                        </span>

                        <span>
                            <input type="checkbox" id="grilled-chicken" value="Grilled Chicken" name="grilledChicken" onChange={onChange} />
                            <label htmlFor="grilled-chicken">Grilled Chicken</label>
                        </span>

                        <span>
                            <input type="checkbox" id="onions" value="Onions" name="onions" onChange={onChange} />
                            <label htmlFor="onions">Onions</label>
                        </span>

                        <span>
                            <input type="checkbox" id="green-peppers" value="Green Peppers" name="greenPeppers" onChange={onChange} />
                            <label htmlFor="green-peppers">Green Peppers</label>
                        </span>

                        <span>
                            <input type="checkbox" id="diced-tomatoes" value="Diced Tomatoes" name="dicedTomatoes" onChange={onChange} />
                            <label htmlFor="diced-tomatoes">Diced Tomatoes</label>
                        </span>

                        <span>
                            <input type="checkbox" id="black-olives" value="Black Olives" name="blackOlives" onChange={onChange} />
                            <label htmlFor="black-olives">Black Olives</label>
                        </span>

                        <span>
                            <input type="checkbox" id="roasted-garlic" value="Roasted Garlic" name="roastedGarlic" onChange={onChange} />
                            <label htmlFor="roasted-garlic">Roasted Garlic</label>
                        </span>
                        <span>
                            <input type="checkbox" id="artichoke-hearts" value="Artichoke Hearts" name="artichokeHearts" onChange={onChange} />
                            <label htmlFor="artichoke-hearts">Artichoke Hearts</label>
                        </span>

                        <span>
                            <input type="checkbox" id="three-cheese" value="Three Cheese" name="threeCheese" onChange={onChange} />
                            <label htmlFor="three-cheese">Three Cheese</label>
                        </span>

                        <span>
                            <input type="checkbox" id="pineapple" value="Pineapple" name="pineapple" onChange={onChange} />
                            <label htmlFor="pineapple">Pineapple</label>
                        </span>

                        <span>
                            <input type="checkbox" id="extra-cheese" value="Extra Cheese" name="extraCheese" onChange={onChange} />
                            <label htmlFor="extra-cheese">Extra Cheese</label>
                        </span>
                    </div>
                </section>
                <section>
                    <h4>Choice of Substitute</h4>
                    <p>Choose up to 1</p>
                    <div id="substitute-choice" className="choice">
                        <label className="switch">
                            <input type="checkbox" name="substitute" value={formValues.substitute} onChange={onChange}/>
                            <span className="slider"></span>
                        </label>
                    </div>
                </section>
                <section>
                    <h4>Special Instructions</h4>
                    <div id="special-instructions" className="choice">
                        <input id="special-text" type="text" name="instructions" onChange={onChange} />
                    </div>
                </section>
                <section>
                    <div>
                        <button id="order-button" disabled={disabled}>Add to Order</button>
                    </div>
                </section>
            </form>
        </div>
    )
}