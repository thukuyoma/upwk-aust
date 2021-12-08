import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";

Router.events.on("routeChangeStart", (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
				<link rel="icon" href="/favicon.png" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
