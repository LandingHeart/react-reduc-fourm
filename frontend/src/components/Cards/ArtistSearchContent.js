import React, { Component } from "react";
import Card from "../card/Card";
import "./ArtistSearchContent.css";
import Input from "../input/Input";
export default class ArtistSearchContent extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            completed: false,
            name: "",
            isLoading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.logState = this.logState.bind(this);
    }
    async fecthArtistData() {
        fetch(
            "https://itunes.apple.com/search?term=" +
                this.state.name +
                "&media=music&entity=album&attribute=artistTerm&limit=500"
        )
            .then((response) => {
                if (response.status !== 200) {
                    console.log(
                        "there was a problem. Status Code: " + response.status
                    );
                    return;
                }
                if (response.resultCount == 0) {
                    console.log("result 0");
                }
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        data: data.results,
                    });
                });
            })
            .catch((err) => console.log("err " + err));
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
        // console.log("name " + this.state.name);
    };

    handleOnClick() {
        this.fecthArtistData();
        this.setState({
            completed: true,
        });
    }
    logState() {
        console.log("name " + this.state.name);
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <Input
                    handleChange={this.handleChange}
                    handleOnClick={this.handleOnClick}
                />
                <div className="container">
                    {this.state.completed === true
                        ? data.map((ele) => {
                              return (
                                  <Card
                                      artwork={ele.artworkUrl100}
                                      artistName={ele.artistName}
                                      albumName={ele.collectionCensoredName}
                                      artistViewUrl={ele.artistViewUrl}
                                  />
                              );
                          })
                        : null}
                </div>
            </div>
        );
    }
}
