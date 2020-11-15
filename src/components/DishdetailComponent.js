import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({selectedDish}) {

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


 

 function RenderComments({comments}){
        if (comments != null) {
            let list = comments.map((comments)=>{
                // let date = comments.date
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
// onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId});
//   }

   const DishDetail = (props) => {
        const selectedDish = props.selectedDish;
        if (selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={ props.selectedDish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                       <RenderComments comments={ props.selectedDish.comments} />
                    </div>
                </div>
            );
        } else {
            return (
              <div></div>
            );
        };
    };

export default DishDetail;

