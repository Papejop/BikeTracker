import * as React from 'react';

import { MaplibreViewProps } from './Maplibre.types';

export default function MaplibreView(props: MaplibreViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
