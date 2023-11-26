import React from "react";
import {Link } from "react-router-dom";

    function Button() {

        return (
          <div>
            <p>
              This is the first page.
              <br />
              Click on the button below.
            </p>
            <Link to="/resources"><button>
              Click for more information 
            </button>
            </Link>
          </div>
        );

    }

    export default Button;