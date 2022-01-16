import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import formidable from 'express-formidable';
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

import * as session from 'express-session';
express() // You can also use Express
	.use(
		session({
			secret: 'agrify key',
			resave: false,
			saveUninitialized: true,
			cookie: { secure: true }
		}),
		formidable(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT);
