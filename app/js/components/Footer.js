'use strict';

import React from 'react';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="cls">

        <div className="footerLeft">Designed and coded by <a href="http://raulalgo.es">raulalgo</a>. Check the project on <a href="https://github.com/raulalgo/helmantica">GitHub</a></div>
        <div className="footerRight">Visit <a href="https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#safe=off&q=salamanca">Helmantica</a> for happiness</div>
        <div className="clear">&nbsp;</div>

      </footer>
    );
  }

}

export default Footer;