module.exports = graphql =>
  graphql(`
    {
      allContentfulSku {
        edges {
          node {
            id
            name
            colour
            price
            featuredImage {
              id
              fluid(quality: 100, maxWidth: 500, maxHeight: 500) {
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
            product {
              name
              productType {
                id
                name
              }
            }
            relatedProducts {
              id
              name
              price
              colour
              featuredImage {
                id
                fluid(quality: 50, maxWidth: 150, maxHeight: 150) {
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
              product {
                name
                productType {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  `).then($ => {
    const { allContentfulSku } = $.data
    let byProductType = []

    for (let $ = 0; $ < allContentfulSku.edges.length; $++) {
      const sku = allContentfulSku.edges[$].node
      if (sku.product) {
        if (!byProductType[sku.product.productType.name]) {
          byProductType[sku.product.productType.name] = []
        }
        byProductType[sku.product.productType.name].push(sku)
      }
    }

    return {
      allSkus: $.data.allContentfulSku,
      byProductType,
    }
  })
