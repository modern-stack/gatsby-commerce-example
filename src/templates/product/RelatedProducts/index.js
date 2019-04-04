import React from 'react'
import Img from 'gatsby-image'
import { RelatedProducts, Product } from './styled'

import Title from '../../../components/Title'
import Slider from '../../../components/Slider'

export default ({ relatedProducts }) => (
  <RelatedProducts>
    {console.log('>>>>', relatedProducts)}
    <Title title={'Related Products'} />

    <Slider>
      {relatedProducts.map($ => (
        <Product>
          {$.featuredImage && <Img fluid={$.featuredImage.fluid} />}
        </Product>
      ))}
    </Slider>
  </RelatedProducts>
)