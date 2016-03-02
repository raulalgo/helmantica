'use strict';

import React from 'react';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="cls">

        Designed and coded by <a href="http://raulalgo.es">raulalgo</a>. Check the project on <a href="https://github.com/raulalgo/scales-react">GitHub</a>

      </footer>
    );
  }

}

export default Footer;