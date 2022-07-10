import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyleVar = {
	fontFamily: 'Inter',
	minWidth: '320px',
	maxWidthContainer: '1264px',
	md1: 1670,
	md2: 1438,
	md3: 1024,
	md4: 768,
	md5: 360,
}

const Global = createGlobalStyle`
	.btn {
		padding: 6px 12px;
		border-radius: 4px;
		background: green;
	}
`

const StyledGlobal = () => {
  return (
		<ThemeProvider globalStyleVar={GlobalStyleVar}>
			<Global/>
		</ThemeProvider>
  );
}

export default StyledGlobal;