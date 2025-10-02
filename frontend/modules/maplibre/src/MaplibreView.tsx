import { requireNativeView } from 'expo';
import * as React from 'react';

import { MaplibreViewProps } from './Maplibre.types';

const NativeView: React.ComponentType<MaplibreViewProps> =
  requireNativeView('Maplibre');

export default function MaplibreView(props: MaplibreViewProps) {
  return <NativeView {...props} />;
}
