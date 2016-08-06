import { Action } from '@ngrx/store';


export class PlayerActions {
  static AUDIO_ENDED = 'AUDIO_ENDED';
  static AUDIO_PAUSED = 'AUDIO_PAUSED';
  static AUDIO_PLAYING = 'AUDIO_PLAYING';
  static AUDIO_VOLUME_CHANGED = 'AUDIO_VOLUME_CHANGED';
  static PLAY_SELECTED_TRACK = 'PLAY_SELECTED_TRACK';


  audioEnded(): Action {
    return {
      type: PlayerActions.AUDIO_ENDED
    };
  }

  audioPaused(): Action {
    return {
      type: PlayerActions.AUDIO_PAUSED
    };
  }

  audioPlaying(): Action {
    return {
      type: PlayerActions.AUDIO_PLAYING
    };
  }

  audioVolumeChanged(volume: number): Action {
    return {
      type: PlayerActions.AUDIO_VOLUME_CHANGED,
      payload: {
        volume
      }
    };
  }

  playSelectedTrack(trackId: number, tracklistId?: string): Action {
    return {
      type: PlayerActions.PLAY_SELECTED_TRACK,
      payload: {
        trackId,
        tracklistId
      }
    };
  }
}
