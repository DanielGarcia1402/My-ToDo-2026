import { Injectable } from '@angular/core';
import { RemoteConfig, getValue, fetchAndActivate } from '@angular/fire/remote-config';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  constructor(private remoteConfig: RemoteConfig) {
    this.init();
  }

  async init() {
    try {
      // Trae los valores de la nube y los activa
      await fetchAndActivate(this.remoteConfig);
    } catch (err) {
      console.error('Remote Config failed', err);
    }
  }

  // Función para obtener un booleano (Feature Flag)
  getFlag(key: string): boolean {
    return getValue(this.remoteConfig, key).asBoolean();
  }
}