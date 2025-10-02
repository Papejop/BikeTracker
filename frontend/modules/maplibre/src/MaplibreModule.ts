import { NativeModule, requireNativeModule } from 'expo';

import { MaplibreModuleEvents } from './Maplibre.types';

declare class MaplibreModule extends NativeModule<MaplibreModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<MaplibreModule>('Maplibre');
