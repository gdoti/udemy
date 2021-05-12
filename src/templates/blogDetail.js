import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import {Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export const query = graphql`
    query($slug: String! ){
        markdownRemark (
            fields:{
                slug:{
                    eq: $slug
                }
            }
        ) {
            frontmatter{
                title
                date
            }
        html
        }
    }
`

function BlogDetail(props) {
    return (
        <Layout>
            <Container style={{maxWidth:640}} className="pt-4">
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </Container>

    {/** * <Container className="text-center">
        *    <Button href="/" variant="outline info">一覧へ戻る</Button>
        *  </Container> */}

        </Layout>
    )
}

export default BlogDetail
