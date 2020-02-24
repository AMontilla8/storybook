import React from 'react';
import './Button.css'

const Button = (props) => {
 let classList = '';

 let types = ['primary',
  'danger',
   'success',
    'warning',
     'default',
     'primaryBorder',
      "dangerBorder",
       "successBorder",
        "warningBorder",
         "defaultBorder",
     "whiteText",
      "defaulttext",
       "successText",
        "warningText",
         "dangerText",
          "primaryText",
           "opaqueP",
            "opaqueD",
             "opaqueS",
              "opaqueW",
               "opaqueDf",
                "addTo",
                 "favorite",
                  "cart",
                  "heart"
            ]

 if (types.includes(props.type)) {
     classList += ` button-${props.type}`
 }
if (props.large) {
    classList += ` button-large`
}
if (props.whiteText) {
    classList += ` button-whiteText`
}
if (props.primaryText) {
    classList += ` button-primaryText`
}
if (props.dangerText) {
    classList += ` button-dangerText`
}
if (props.successText) {
    classList += ` button-successText`
}
if (props.warningText) {
    classList += ` button-warningText`
}
if (props.defaultText) {
    classList += ` button-defaultText`
}


     return <button className={classList} onClick={props.onClick}>
        {props.label}
    </button>

    }

export default Button; 


