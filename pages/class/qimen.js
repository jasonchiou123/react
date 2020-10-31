class Qimen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Hello Runoob!',myinfo: '123', mygeo: '你我它'};
    //this.serverRequest=this.serverRequest.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.source,
    });
   
    this.serverRequest = $.get(this.props.source, function (result) {
      var myobj=JSON.parse(result) 
      this.setState({
        myinfo: myobj.info,
        mygeo: myobj.geo
      });
    }.bind(this));
  }

  render() {
    var infoStyle = {
      height: 100,
      width: 1200,
      backgroundColor: '#F5FC00',
    };    
    var myStyle = {
      
      width: 300,
      backgroundColor: '#00FCFF',
    };
    var unit=String(this.state.myinfo[5]).substr(0,15)
    var bazi=String(this.state.myinfo[6]).substr(0,15)

    const reptiles= ['1','2','3']
console.log(this.state.myinfo)
console.log(this.state.mygeo)

var geo=this.state.mygeo
var lists=[]

for(let i=0;i<geo.length;i++){
  lists.push(<div style={myStyle,{ color: '#FF0000' , position: 'relative', left: 200  }}>
  <p>{geo[i].star} {geo[i].name}</p>
  <p>{geo[i].door} {geo[i].sky}</p>
  <p>{geo[i].god} {geo[i].gaia}</p> 
  <p>{geo[i].year} {geo[i].month}</p>
  <p>{geo[i].cate} </p>
  </div>)
}

  return  <div> 
    <div style={infoStyle}>
    <p>{this.state.myinfo[0]}<br />
    {this.state.myinfo[3]}<br />
    {this.state.myinfo[4]}<br />
    {unit}<br />  {bazi}<br />
    </p>
    </div>

    <div>
    {lists}
    </div>
  </div>
  }  
}