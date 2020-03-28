import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <div className="col-12 col-md-5 m-1" >
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
               </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    renderComments(dish) {
        if (dish != null){
            const c = dish.comments.map((cmt) => {
                return(
                    <div key={cmt.id}>
                       <li> 
                        <p>{cmt.comment}</p>
                        <p>-- {cmt.author}, {cmt.date}</p>
                        </li>
                    </div>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1" >
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <CardText>
                                <ul className="list-unstyled">
                                {c}
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
               </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){

        return(
            <div className="row">
                    
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}    
            </div>
        );
    }
}

export default DishDetail;