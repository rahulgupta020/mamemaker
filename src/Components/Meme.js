import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import axios from 'axios';
import '../assets/css/style.css';

class Meme extends React.Component {
    constructor() {
        super()

        this.onChangeBtn = this.onChangeBtn.bind(this);

        this.state = {
            currentIndex: 0,
            search1: '',
            search2: '',
            fontvalue: '',
            colorvalue: '',
            file: [],
            imgfile: [],
            random: 'https://i.imgflip.com/4t0m5.jpg',
        }

    }

    componentDidMount() {
        axios.get(`https://api.imgflip.com/get_memes`).then(res => {
            this.setState({ file: res.data.data.memes })
            console.log(res.data.data.memes)
        })
    }

    onChangeBtn() {
        // const min = 1;
        // const max = 100;
        const rand = Math.floor(Math.random() * 101)
        const imgs = this.state.file[rand].url
        this.setState({ random: imgs }, () => { console.log(this.state.random); });
    }

    handleChange01 = (event) => {
        this.setState({ search1: event.target.value })
        // console.log(search1)
        // console.log(event.target.value)
    }

    handleChange02 = (event) => {
        this.setState({ search2: event.target.value })
        // console.log(search2)
        // console.log(event.target.value)
    }

    handleChange2 = (event) => {
        this.setState({ colorvalue: event.target.value })
        // console.log(event.target.value)
    }

    handleChange3 = (event) => {
        this.setState({ fontvalue: event.target.value })
        // console.log(event.target.value)
    }

    changeSize = (event) => {
        this.setState({ fontvalue: event.target.value })
        // console.log(event.target.value)
    }

    render() {

        const { fontvalue, colorvalue } = this.state;

        return (
            <>
                <div className="home">
                    <p className="heading1">
                        MemeMix: Instant Meme Maker
                    </p>
                    <div className="container">
                        <div class="input-block1">
                            <input type="text" class="form-control" name="search1" onChange={this.handleChange01} placeholder="Top Comment" />
                        </div>
                        <div class="input-block2">
                            <input type="text" class="form-control" name="search2" onChange={this.handleChange02} placeholder="Down Comment" />
                        </div><br />

                        <Row form>
                            <Col md={8}>
                                <FormGroup>
                                    <Label>Change your Font Size</Label>
                                    <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange3}>
                                        <option value="12" >12</option>
                                        <option value="16">16</option>
                                        <option value="20">20</option>
                                        <option value="24">24</option>
                                        <option value="28">28</option>
                                        <option value="36">36</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row form>
                            <Col md={6}>
                                <FormGroup tag="fieldset">
                                    <Label>Change your Font Color</Label>
                                    <div onChange={this.handleChange2}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="color" value="red" />{' '}
                                                Red
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="color" value="blue" />{' '}
                                                Blue
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="color" value="green" />{' '}
                                                Green
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>

                    </div>
                    <hr />
                    <div className="imagebutton">
                        <Button color="primary" onClick={this.onChangeBtn}>Change</Button><br />
                    </div>

                    {/* <div className="search__1">
                        <p style={{ fontSize: `${fontvalue}px`, color: `${colorvalue}` }}>{this.state.search1}</p>
                    </div>

                    <div className="search__2">
                        <p style={{ fontSize: `${fontvalue}px`, color: `${colorvalue}` }}>{this.state.search2}</p>
                    </div> */}
                    <div className="image-container">
                        <img src={this.state.random} width="450" height="290" alt="Meme" />
                        <div className="image-text image-text-top" style={{ fontSize: `${fontvalue}px`, color: colorvalue }}>
                            {this.state.search1}
                        </div>
                        <div className="image-text image-text-bottom" style={{ fontSize: `${fontvalue}px`, color: colorvalue }}>
                            {this.state.search2}
                        </div>
                    </div>


                </div>

            </>
        );
    }

}

export default Meme
