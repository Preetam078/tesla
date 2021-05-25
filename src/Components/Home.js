import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightbtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightbtnText="Existing Inventory"
            />
            <Section
               title="Model 3"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-3.jpg"
               leftBtnText="Custom order"
               rightbtnText="Existing Inventory"
            />
            <Section
              title="Model X"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-x.jpg"
              leftBtnText="Custom order"
              rightbtnText="Existing Inventory"
            />
            <Section
              title="Lowest Cost Solar Panels in America"
              description="Money-back guarentee"
              backgroundImg="solar-panel.jpg"
              leftBtnText="order now"
              rightbtnText="learn more"
            />

            <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="order now"
            rightbtnText="learn more"
            />
            <Section
              title="Accessories"
              description=""
              backgroundImg="accessories.jpg"
              leftBtnText="shop now"
            />
        </Container>
    )
}

export default Home
//style component help to write the CSS in the javascript itself
const Container= styled.div`
   height:100vh;           
`
