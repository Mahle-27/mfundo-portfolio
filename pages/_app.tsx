import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import 'flowbite';
// global app styles + tailwindcss default styles
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
import 'lib/fontawesome';
// basic site layout component
import BasicSiteLayout from 'components/layout/BasicSiteLayout';


config.autoAddCss = false;

function App({ Component, pageProps, router }: AppProps): JSX.Element {
	return (
		<BasicSiteLayout>
			<Component {...pageProps} key={router.route} />
		</BasicSiteLayout>
	);
}

export default App;
