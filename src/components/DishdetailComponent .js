import React, { Component } from 'react'
import { Card, CardImg, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'

class DishDetail  extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selecteddish: null
        }
    }

    renderComments(comments) {
        if (comments != null) {
            comments.map((c) => {
                return(
                    <ListGroup key={c.id}>
                        <ListGroupItem> <p>{c.comment}</p> </ListGroupItem>
                        <ListGroupItem> <p> -- {c.author}, {c.date} </p></ListGroupItem>
                        <ListGroupItem></ListGroupItem> {/* Empty P to separate comments instead of bottom margin because im lazy, sorry */}
                    </ListGroup>
                )
            })
        } else {
            return(
                <div></div>
                )
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={dish.image} alt={dish.name} />
                                <CardTitle> {dish.name} </CardTitle>
                                <CardText> {dish.description} </CardText>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            )
        } else  {
            return (
                <div></div>
            )
        }
    }
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.selecteddish)}
                </div>
            </div>
        )
    }
}
export default DishDetail
