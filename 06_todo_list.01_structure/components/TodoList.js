axios.default.withCredentials=true;

var TodoList = React.createClass({
  getInitialState:function()
  {
      return {
        list:[],
      };

  },
  componentDidMout:function(){
    
    axios.get(this.props.url).
    then(this.setList);
    
  },
  setList:function(response){

    this.setState({
         list:response.data,

    });

  },
  addItem:function(){

    axios.post(this.props.url,{text:text}).then(this.setList);

  },
  render: function () {
    return (
      <div>
        TodoList
        <TodoForm />
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    );
  },
});
