import React, { Component } from 'react'
import data from './users.json';

/*
interface Hobbies {
    name: string
    emoji: string
}
*/

let hobbies = "";
for(let i=0; i<data.users[0].hobbies.length; i++){
    hobbies = hobbies.concat("\n", data.users[0].hobbies[i].name + data.users[0].hobbies[i].emoji);
}
//let hobbies = data.users[0].hobbies[0].name;

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
            <h3> Hobbies </h3>
            <p> {hobbies} </p>
            </section>
        )
    }
}

export default About