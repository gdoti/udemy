import React from "react"
import { graphql , useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Kv from "../components/kv"
import BlogItem from "../components/blogItem"
import { Container, Row, Col } from "react-bootstrap"
import { Button } from "bootstrap"

const IndexPage = () => { 
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}){
        edges{
          node{
            fields{
              slug
            }
            frontmatter{
              title
              date
              thumnail{
                childImageSharp{
                  fluid{
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return(
    <Layout>
      <Kv />
      <Container>
        <Row>
          {
            data.allMarkdownRemark.edges.map((edge, index) => (
              <Col sm={4} key={index}>
                <BlogItem
                  title={edge.node.frontmatter.title}
                  date={edge.node.frontmatter.date}
                  src={edge.node.frontmatter.thumnail.childImageSharp.fluid.src}
                  link={`blog/${edge.node.fields.slug}`}/>
              </Col>
            ))
          }
          
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
