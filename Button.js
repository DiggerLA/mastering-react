'use strict';

function Button({className, children, onClick = x => x}) {
  return (
    <button className={className} onClick={onClick}>
      { children }
    </button>
  );
}
