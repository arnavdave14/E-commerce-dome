import React from 'react'
import { NewsLetterbody , NewsLetterbtn , NewsLetterForm } from "./NewsLetterstyle.js"


const NewsLetter = () => {
  return (
    <NewsLetterbody>
        <h1>Get Exclusive Offer On Your Email </h1>
        <p>Suscribe to our letter and stay update</p>
        <NewsLetterForm>
            <input type='email' placeholder='Your Email id ' />
            <NewsLetterbtn>Suscribe</NewsLetterbtn>
        </NewsLetterForm>
    </NewsLetterbody>
  )
}

export default NewsLetter