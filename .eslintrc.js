module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-console": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "no-unused-vars": 0,
        "react/no-unescaped-entities": 0,
        "react/function-component-definition": [
            2,
            { namedComponents: "function-declaration" },
        ],
        "jsx-a11y/label-has-associated-control": [
            2,
            {
                labelComponents: ["label"],
                labelAttributes: ["htmlFor"],
                controlComponents: ["input"],
            },
        ],
    },
};
