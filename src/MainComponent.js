import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

function mapStateToProps(state) {
    return {myScore: state.score}
}

function scoredOneRun() {
    return {type: 'INCREASE_SCORE_BY_ONE'};
}
function scoredTwoRuns() {
    return {type: 'INCREASE_SCORE_BY_TWO'};
}
function scoredThreeRuns() {
    return {type: 'INCREASE_SCORE_BY_THREE'};
}
function scoredFour() {
    return {type: 'INCREASE_SCORE_BY_FOUR'};
}
function scoredSix() {
    return {type: 'INCREASE_SCORE_BY_SIX'};
}
 
const mapDispatchToProps = {
    oneRun: scoredOneRun,
    twoRuns: scoredTwoRuns,
    threeRuns: scoredThreeRuns,
    fourRuns: scoredFour,
    sixRuns: scoredSix,
}

class MainComponent extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="card">
                    <span className="score">{ this.props.myScore } / 01</span><br />
                    <span className="overs">Overs: 0.5</span>
                </div>
                <div className="points-wrap">
                    <button className="point" onClick={this.props.oneRun}>1</button>
                    <button className="point" onClick={this.props.twoRuns}>2</button>
                    <button className="point" onClick={this.props.threeRuns}>3</button>
                    <button className="point" onClick={this.props.fourRuns}>4</button>
                    <button className="point" onClick={this.props.sixRuns}>6</button>
                </div>
                <div className="match-actions-wrap">
                    <button className="match-actions " disabled="disabled">Wicket !</button>
                    <button className="match-actions " disabled="disabled">No Ball</button>
                    <button className="match-actions" disabled="disabled">Wide</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);