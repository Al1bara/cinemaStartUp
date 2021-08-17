import React, { Component } from "react";
import { Button, Col, Row, Select } from "antd";
import { Card, Icon, Image } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import axios from "axios";
import logo from "./cinema.png";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/movies`).then((response) => {
      this.setState({
        movie: response.data,
      });
    });
  }

  render() {
    console.log();
    const movie = this.state.movie

    console.log(movie)
    return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <p>Find all now showing movies in your city in one place!</p>
        <div className="rapper">
          <div className="select-city">
            <p>Choose City</p>
            <Button>Riyadh</Button>
            <Button>Jeddah</Button>
            <Button>Dammam</Button>
            <Button>Qassim</Button>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Another city..."
            />
            <Button block className="find">Find Movies</Button>
          </div>
        </div>


        <div>

  { movie.map((mov) => 

    <Card>
       <Grid relaxed columns={4}>
    <Grid.Column>
      <Image src= {mov.poster}  
      style={{
      width: "260px",
    }}
      />
      </Grid.Column>
      </Grid>
      
        <Card.Content>
          
          <Card.Header>{mov.name}</Card.Header>
            <Card.Meta>{mov.classification}</Card.Meta>
                <Card.Description>

    </Card.Description>
        </Card.Content>
          <Card.Content extra>

      <a>
        <Icon name='user' />
        
       
        <Button onClick={this.onClick} href={"https://ksa.voxcinemas.com/" + mov.showtime}>ShowTimes</Button>

        
         
      </a>

      </Card.Content>
    </Card>  
 )}
        
      </div>

      </div>
    );
  }
}

export default Movie;
