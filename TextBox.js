'use strict';

function TextBox({label, update = x => x}) {
  const [state, setState] = React.useState({
    isEditing: false,
    inputValue: ''
  });

  function changeHandler(e) {
    setState({
      ...state,
      inputValue: e.target.value
    });
  }

  function updateHandler() {
    update(state.inputValue);
    setState({
      ...state,
      isEditing: false
    });
  }

  function editHandler() {
    setState({
      ...state,
      isEditing: true
    });
  }

  return (
    <div>
      {label}<br/>
      <input className='form-control' type="text" disabled={!state.isEditing}
        onChange={changeHandler}
        value={state.inputValue}
      />
      {
        state.isEditing ?
          <Button className='btn btn-warning' onClick={updateHandler}>
            <Glyphicon icon='check'/> Update
          </Button>
          :
          <Button className='btn btn-success' onClick={editHandler}>
            <Glyphicon icon='pencil'/> Edit
          </Button>
      }
    </div>
  );
}
