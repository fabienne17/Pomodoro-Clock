import React from 'react';
import ReactDOM from 'react-dom';

//import Timer from './Timer.jsx';
/*
class Timer extends React.Component {

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
        <div className="panel panel-default" style={panelStyle}>
          <div className='panel-header'><br/>
            <div className="btn-group">
              <button type="submit" className="btn btn-success"
                      onClick={this.startClock.bind(this)}>Start</button>
              <input type="number" className="btn" min="0" max="25"
                     value={this.props.minutes}
                     onChange={this.setMin.bind(this)} 
                     style={inputStyle}/>
              <input type="number" className="btn" min="0" max="59"
                     value={this.props.seconds}
                     onChange={this.setSec.bind(this)} 
                     style={inputStyle}/>                                
              <button type="reset" className="btn btn-success"
                      onClick={this.stopClock.bind(this)}>Stop</button>              
            </div>
          </div>
          <div className="panel-body" id="clockdiv"> 
            <div className="col-xs-6">
              <div className="panel panel-default">
                <div className="panel-body" id="minutes">
                  {("0" + this.props.minutes).slice(-2)}
                </div>
                              
                <div className="panel-footer">Minutes</div>
              </div>
            </div>   
            <div className="col-xs-6">
              <div className="panel panel-default">                                        
                <div className="panel-body" id="seconds">
                  {("0" + this.props.seconds).slice(-2)}
                </div>
                <div className="panel-footer">Seconds</div>
              </div>
            </div>   
          </div>
        </div>
      </div>
    );
  }
};
*/
class Timer extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    startClock(){
        var that = this;
        var deadline = new Date((new Date()).getTime() + this.props.minutes*60*1000 + this.props.seconds*1000);
        var total = Date.parse(deadline) - Date.parse(new Date());
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

        const clockdivStyle = {
            fontSize: "100px"
        };

        return (
            <div className="container-fluid text-center" >
                <h1>Countdown Clock</h1>
                <div className="panel panel-default" style={panelStyle}>
                    <div className='panel-header'><br/>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-success"
                                    onClick={this.startClock.bind(this)}>Start</button>
                            <input type="number" className="btn" min="0" max="25"
                                   value={this.props.minutes}
                                   onChange={this.setMin.bind(this)} 
                                   style={inputStyle}/>
                            <input type="number" className="btn" min="0" max="59"
                                   value={this.props.seconds}
                                   onChange={this.setSec.bind(this)} 
                                   style={inputStyle}/>                                
                            <button type="reset" className="btn btn-success"
                                    onClick={this.stopClock.bind(this)}>Stop</button>              
                        </div>
                    </div>
                    <div className="panel-body" id="clockdiv" style={clockdivStyle}>
                        <span id="minutes">
                            {("0" + this.props.minutes).slice(-2)}
                        </span>
                        <span>:</span>
                        <span id="seconds">
                            {("0" + this.props.seconds).slice(-2)}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};

// Set up the app
class App extends React.Component{
	constructor(){
        super();
        this.state = {
            minutes: 15,
            seconds: 15
        };
    }

	setMin(minutes) {
    	this.setState({minutes});
  	}

    setSec(seconds) {
        this.setState({seconds});
    }
    render() {   

        return (
            <div className="container">
                
                <Timer setMin={this.setMin.bind(this)}
                       setSec={this.setSec.bind(this)}
                       minutes={this.state.minutes}
                       seconds={this.state.seconds} />
                <hr/>

            </div>
        );
    }

};

// Render the Component
ReactDOM.render(<App />, document.getElementById('app'));
