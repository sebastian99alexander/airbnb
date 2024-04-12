import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Card from "../components/Card"
import cardData from "./data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cardElements = cardData.map(card =>{
        return <Card 
            key={card.id}
            item={card}
            //{...item}
            // img={card.coverImg} 
            // title={card.title} 
            // description={card.description} 
            // price={card.price} 
            // rating={card.stats.rating} 
            // reviewCount={card.stats.reviewCount} 
            // location={card.location} 
            // openSpots = {card.openSpots}
            />
    })
    return (
        <div>
            <Header />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}