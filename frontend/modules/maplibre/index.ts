// Reexport the native module. On web, it will be resolved to MaplibreModule.web.ts
// and on native platforms to MaplibreModule.ts
export { default } from './src/MaplibreModule';
export { default as MaplibreView } from './src/MaplibreView';
export * from  './src/Maplibre.types';
