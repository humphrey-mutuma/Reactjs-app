import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }


    renderComments(comments){
        // console.log(comments)
        if (comments != null) {
            let list = comments.map((comments)=>{
                let date = comments.date
                return(
                    <li key={comments.id} >
                        <div>
                            <p>{comments.comment}</p>
                            <p>--{comments.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                            </p>
                        </div>
                    </li>
                )
            })
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
//  ----------------

    renderDish(selectedDish) {
        return (
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name}/>
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    render() {
        const selectedDish = this.props.selectedDish;
        if (selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                       {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
              <div></div>
            );
        };
    };

}

export default DishDetail;

