'use strict';

function HelloReact({message = 'I am from default'}) {
  const [state, setState] = React.useState({
    firstName: '',
    lastName: ''
  });

  React.useEffect(() => {
    console.log('did mount');
    return () => {
      console.log('unmount');
    }
  }, []);

  useComponentWillMount(() => {
    console.log('will mount');
  });

  function update(key, value) {
    setState({
      ...state,
      [key]: value
    });
  }

  function reload() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    ReactDOM.render(<App/>, document.getElementById('app'));
  }

  return (
    <div>
      <HelloMessage message={'Hello ' + state.firstName + ' ' + state.lastName}/>
      <TextBox label='First Name' update={value => update('firstName', value)}/>
      <TextBox label='Last Name' update={value => update('lastName', value)}/>
      <button className='btn btn-primary' onClick={reload}>Reload</button>
    </div>
  );
}

function useComponentWillMount(callback) {
  const willMount = React.useRef(true);
  if (willMount.current) {
    callback();
  }
  willMount.current = false;
}

HelloReact.propTypes = {
  message: PropTypes.string,
  number: PropTypes.number,
  requiredString: PropTypes.string.isRequired
};

