import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

function mapStateToProps(state) {
  return {
    score: state.runs,
    wickets: state.wicket,
    balls: state.balls
  };
}

function scoredZeroRun() {
  return { type: "INCREASE_SCORE_BY_ZERO" };
}
function scoredOneRun() {
  return { type: "INCREASE_SCORE_BY_ONE" };
}
function scoredTwoRuns() {
  return { type: "INCREASE_SCORE_BY_TWO" };
}
function scoredThreeRuns() {
  return { type: "INCREASE_SCORE_BY_THREE" };
}
function scoredFour() {
  return { type: "INCREASE_SCORE_BY_FOUR" };
}
function scoredSix() {
  return { type: "INCREASE_SCORE_BY_SIX" };
}
function wicketLost() {
  return { type: "INCREASE_WICKET_LOST" };
}
function noBall() {
  return { type: "INCREASE_NO_BALL_SCORE" };
}
function wideBall() {
  return { type: "INCREASE_WIDE_BALL_SCORE" };
}

const mapDispatchToProps = {
  addZeroRun: scoredZeroRun,
  addOneRun: scoredOneRun,
  addTwoRuns: scoredTwoRuns,
  addThreeRuns: scoredThreeRuns,
  addFourRuns: scoredFour,
  addSixRuns: scoredSix,
  addWicketLost: wicketLost,
  addNoBall: noBall,
  addWideBall: wideBall
};

const BALLS_IN_AN_OVER = 6;

class MainComponent extends Component {
  calculateOver = () => {
    let overs = 0;
    let completedOvers = 0;
    let remainingBallsInOver = 0;

    overs = this.props.balls / BALLS_IN_AN_OVER;
    if (overs >= 1) {
      completedOvers = Math.floor(overs);
      remainingBallsInOver = this.props.balls % BALLS_IN_AN_OVER;
    } else {
      remainingBallsInOver = this.props.balls;
    }
    return `${completedOvers}.${remainingBallsInOver}`;
  };

  render() {
    return (
      <div className="container text-center">
        <div className="card">
          <div className="score">
            {this.props.score} / {this.props.wickets}
          </div>
          <br />
          <div className="overs">Overs: {this.calculateOver()}</div>
        </div>
        <div className="points-wrap">
          <button className="point" onClick={this.props.addZeroRun}>
            0
          </button>
          <button className="point" onClick={this.props.addOneRun}>
            1
          </button>
          <button className="point" onClick={this.props.addTwoRuns}>
            2
          </button>
          <button className="point" onClick={this.props.addThreeRuns}>
            3
          </button>
          <button className="point" onClick={this.props.addFourRuns}>
            4
          </button>
          <button className="point" onClick={this.props.addSixRuns}>
            6
          </button>
        </div>
        <div className="match-actions-wrap">
          <button
            className="match-actions wicket"
            onClick={this.props.addWicketLost}
          >
            Wicket !
          </button>
          <button
            className="match-actions no-ball"
            onClick={this.props.addNoBall}
          >
            No Ball
          </button>
          <button
            className="match-actions wide-ball"
            onClick={this.props.addWideBall}
          >
            Wide
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
