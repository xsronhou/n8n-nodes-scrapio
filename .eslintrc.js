module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	extends: ["plugin:n8n-nodes-base/community"],
	rules: {
		"n8n-nodes-base/node-param-default-wrong-for-collection": "off",
	},
};
