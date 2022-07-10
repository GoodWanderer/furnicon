import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
	fontFamily: 'Inter',
	minWidth: '320px',
	maxWidthContainer: '1264px',
	media: {
		md1: 1670,
		md2: 1438,
		md3: 1024,
		md4: 768,
		md5: 360,
	},
	background: {
		grey: '#e8e8e8',
		grayBlack: '#393e46',
		blue: '#00adb5',
		green: '#a8cd9b',
	},
}

const Global = createGlobalStyle``

const StyledGlobal = ({children}, ...props) => {
  return (
		<ThemeProvider theme={theme}>
			<Global {...props}/>
			{children}
		</ThemeProvider>
  );
}

export default StyledGlobal;