module.exports = {
	extends: [
		"react-app",
		"eslint:recommended",
		"plugin:react/recommended",
	rules: {
		"no-multiple-empty-lines": "error", // 여러 줄 공백 금지
		eqeqeq: "error", // 일치 연산자 사용 필수
		"dot-notation": "error", // 가능하다면 dot notation 사용
		"no-unused-vars": "error", // 사용하지 않는 변수 금지
		"react/react-in-jsx-scope": "off", // script 규칙 비활성화
	}
};
