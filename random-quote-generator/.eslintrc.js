module.exports = {
    "extends": "airbnb",

    // C0riander rules
    "globals": {
        "window": true,
        "document": true
    },
    

    // done

    "rules": {
        // enable additional rules
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        // C0riander rules
        // done
        
    }

}