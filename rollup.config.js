
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import replace from '@rollup/plugin-replace';

export default {
	input: 'src/ARnft.ts', // our source file
	output: [
		{
			//umd
			format: 'umd',
			name: 'ARNFT',
			file: 'dist/ARnft.js',
			sourcemap: true,
			globals: {
				"web-worker:./ARnftWorker": "Worker"
			}
		}
	],
	plugins: [
		replace({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
		typescript({
			tsconfig: "tsconfig.json",
			typescript: require('typescript'),
		}),
		webWorkerLoader(	
		{
			external: true,
			//preserveSource: true,
			preserveFileNames: true,
			forceInline: true,
			inline: true
		}
		),
		json(),
		nodeResolve(),
		terser() // minifies generated bundles
	]
};
