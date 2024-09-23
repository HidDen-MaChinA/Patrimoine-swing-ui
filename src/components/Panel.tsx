import React from "react";
import Inputs from "./Inputs";
import Outputs from "./Outputs";

export default function Panel(): React.ReactElement {
    return(
        <div>
            <Inputs />
            <Outputs />
        </div>
    )
}
