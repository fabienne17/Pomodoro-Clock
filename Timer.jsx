import React from 'react';
export default class Timer extends React.Component {

  constructor(){
    super();
    this.state = {};
  }
  
  startClock(){
    var that = this;
    var deadline = new Date((new Date()).getTime() + this.props.minutes*60*1000 + this.props.seconds*1000);
    var total = Date.parse(deadline) - Date.parse(new Date());
    console.log(total); 
    this.setState({
      total: total,
      timeInterval: setInterval(function() {that.tick(that);}, 1000)
    }) 
  }

  stopClock(){
    this.setState({
      timeInterval: clearInterval(this.state.timeInterval)
    });
  }

  tick(current) {
    var total = current.state.total -= 1000;

    if(current.state.total > -1) {
      var seconds = Math.floor((total/1000) % 60);
      var minutes = Math.floor((total/1000) / 60);
      current.setState({
        total: total, 
        minutes: minutes,
        seconds: seconds
      });
      this.props.setMin(minutes);
      this.props.setSec(seconds);
    };
    console.log(current.state.total);
  }

  setMin(ev){
    var DOMminutes = ev.target.value;
    this.props.setMin(DOMminutes);
  }

  setSec(ev){
    var DOMseconds = ev.target.value;
    this.props.setSec(DOMseconds);
  }
  
  render() {

    const inputStyle = {
      background: "#b7fbe9",
      color: "#6f6161",
      width: "100px"
    };

    const panelStyle = {
      margin:"auto",
      width:"400px"
    };

    return (

      <div className="container-fluid text-center" >
        <h1>Countdown Clock</h1>
        <div className="panel panel-body" style={panelStyle}>
          <div className="btn-group">
            <button type="submit" className="btn btn-success"
                    onClick={this.startClock.bind(this)}>
              Start
            </button>
            <input type="number" className="btn" min="0" max="25"
                   value={("0" + this.props.minutes).slice(-2)}
                   onChange={this.setMin.bind(this)} 
                   style={inputStyle}/>
            <input type="number" className="btn" min="0" max="59"
                   value={("0" + this.props.seconds).slice(-2)}
                   onChange={this.setSec.bind(this)} 
                   style={inputStyle}/>                                
            <button type="reset" className="btn btn-success"
                    onClick={this.stopClock.bind(this)}>
              Stop
            </button>
          </div>
        </div>
      </div>
    );
  }
};
