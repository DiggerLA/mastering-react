'use strict';

// class HelloMessage extends React.Component {
//   UNSAFE_componentWillMount() {
//     console.log('componentWillMount');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }

//   render() {
//     console.log('render');
//     return (
//       <h2>{this.props.message}</h2>
//     );
//   }
// }

function HelloMessage({message}) {
  const style = {
    padding: 10,
    margin: 10,
    backgroundColor: '#ffde00',
    color: '#333',
    display: 'inline-block',
    fontFamaly: 'monospace',
    fontSize: 32,
    textAlign: 'center'
  };

  useComponentWillReceiveProps(message, prevMessage => {
    if (prevMessage !== message) {
      console.log('prev ' + prevMessage);
      console.log('next ' + message);
    }
  });

  return (
    <h2 style={style}>{message}</h2>
  );
}

function useComponentWillReceiveProps(nextProps, callback) {
  const prevProps = React.useRef('');
  callback(prevProps.current);
  prevProps.current = nextProps;
}
