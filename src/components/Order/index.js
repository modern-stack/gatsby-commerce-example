import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Img from 'gatsby-image'

import { useStateValue } from '../../Context'
import Title from '../Title'
import { Primary } from '../Button'
import {
  Order,
  Sku,
  ImageContainer,
  SectionTitle,
  Total,
  Price,
  OrderContainer,
} from './styled'

export default ({ onComplete }) => {
  const [{ order }, dispatch] = useStateValue()

  const APOLLO_QUERY = gql`
    {
      allContentfulSku(filter: { contentful_id: { in: [${order.items.map(
        $ => `"${$.id}"`
      )}] } }) {
        edges {
          node {
            id: contentful_id
            name
            price
            product{
              name
            }
            featuredImage {
              id
              fluid(quality: 100, maxWidth: 450, maxHeight: 450) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  `

  return (
    <OrderContainer>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading pupper...</p>

          if (!data) return <div>No Data found!</div>

          const { allContentfulSku } = data

          if (
            !allContentfulSku ||
            !allContentfulSku.edges ||
            !allContentfulSku.edges.length
          )
            return <div>No products Found!</div>

          const { edges } = data.allContentfulSku

          return (
            <Order>
              <Title title={'Your Order'} />

              <SectionTitle>Summary</SectionTitle>
              {edges.map($ => (
                <Sku>
                  <ImageContainer>
                    <Img fluid={$.node.featuredImage.fluid} />
                  </ImageContainer>
                  <div>
                    {$.node.product.name} {$.node.name}
                  </div>
                  <div>£{$.node.price}</div>
                </Sku>
              ))}
              <Total>
                <div>Total</div>
                <Price>
                  £
                  {edges.reduce((total, $) => {
                    return total + parseFloat($.node.price)
                  }, 0)}
                </Price>
              </Total>

              <Primary onClick={() => onComplete()}>
                Proceeed to Payment
              </Primary>
            </Order>
          )
        }}
      </Query>
    </OrderContainer>
  )
}
