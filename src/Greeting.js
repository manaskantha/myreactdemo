import "./styles.css";
import React, { useState } from 'react';

export default function Greeting() {
      const [name, setName] = React.useState('')
      return (
        <div>
          <form>
            <label htmlFor="name">Your Name: </label>
            <input onChange={() => setName(window.event.target.value)} id="name" />
          </form>
          {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
      )
    }
 