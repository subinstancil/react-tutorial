import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
                        <p>-- {cmt.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(cmt.date)))} </p>
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
            <div className="container">
            <div className="row">     
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}    
            </div>
            </div>
        );
    }
}

export default DishDetail;