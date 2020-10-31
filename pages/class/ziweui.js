class ZIWEUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {api: this.props.source, ret: undefined,
      y:'1976',m:'4',d:'19',h:'酉',sex:'M'};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleClick(event) {
    var mylink=`${this.state.api}?year=${this.state.y}&month=${this.state.m}&day=${this.state.d}&hour=${this.state.h}&sex=${this.state.sex}` 
    this.serverRequest = $.get(mylink, function (result) {
      var myobj=JSON.parse(result) 
      this.setState({
        ret: myobj
      });
    }.bind(this));
  }

  render() {
    var infoStyle = {
      height: 100,
      width: 1200,
      backgroundColor: '#F5FCFF',
    };    
    var myStyle = {
      borderStyle:'solid',
      borderWidth:2,
      color:'#FF0000',
      backgroundColor: '#F5FC00',
    };

console.log(this.state.ret)
var inp=
<div>  <h4>生辰輸入:</h4>
年<input type="number" name='y' value={this.state.y} onChange={this.handleChange} /> 
月<input type="number" name='m' value={this.state.m} onChange={this.handleChange}  />
日<input type="number" name='d' value={this.state.d} onChange={this.handleChange} />
時<input type="text" name='h' value={this.state.h} onChange={this.handleChange}  />
性別:<select name='sex' value={this.state.sex} onChange={this.handleChange}>
            <option value="M">男</option>
            <option value="F">女</option>
          </select>
<button onClick={this.handleClick}>送出</button>
</div>

var INFO=<div></div>
if (this.state.ret != undefined){
  INFO=<div style={infoStyle}>
  <p>{this.state.ret.title[0]}<br />
  {this.state.ret.title[1]}<br />
  {this.state.ret.title[2]}<br />
  {this.state.ret.title[3]}<br />
  {this.state.ret.title[4]}<br />
  </p>
  </div> 
} 
  
var lists=[]
var newStyle = $.extend(true, {}, myStyle);
newStyle.borderWidth=0

if (this.state.ret != undefined){  
  var tmp=this.state.ret.palace
  var orders=[5,6,7,8,4,12,12,9,3,12,12,10,2,1,0,11]
  for(let i=0;i<tmp.length+4;i++){

    if (orders[i]==12) {
      lists.push(<div className="col-3" style={newStyle}>
      </div>)
    } else {
      lists.push(<div className="col-3" style={myStyle}>
      <p>{tmp[orders[i]].gan} {tmp[orders[i]].chi} {tmp[orders[i]].name} {tmp[orders[i]].body}</p>
      <p>{tmp[orders[i]].star} </p>
      <p>{tmp[orders[i]].big} </p> 
      <p>{tmp[orders[i]].tiny} </p> 
      </div>)
    }

  }
}

  return  <div> 
{inp} {INFO} <div className="row">{lists}</div>
  </div>

  }  
}