import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './Maplibre.types';

type MaplibreModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class MaplibreModule extends NativeModule<MaplibreModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(MaplibreModule, 'MaplibreModule');
