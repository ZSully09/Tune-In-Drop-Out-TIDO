import { player } from "../Player/Player";

const SPOTIFY_API_BASE = "https://api.spotify.com/v1";

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case PLAY_TRACK: {
      fetch(
        `${SPOTIFY_API_BASE}/me/player/play`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${getState().session.access_token}`
          },
          body: JSON.stringify({
            uris: [`spotify:track:${togglePlay.track.id}`]
          })
          //       }).then(() => {
          //         if (action.position) {
          //           fetch(
          //             `${SPOTIFY_API_BASE}/me/player/seek?position_ms=${action.position}`,
          //             {
          //               method: "PUT",
          //               headers: {
          //                 Authorization: `Bearer ${
          //                   store.getState().session.access_token
          //                 }`
          //               }
          //             }
          //           ).then(() => {
          //             store.dispatch(
          //               playTrackSuccess(action.track, action.user, action.position)
          //             );
          //           });
          //         } else {
          //           store.dispatch(playTrackSuccess(action.track, action.user));
          //         }
          //       });
          //     }
          //     break;
          //   }
          //   case UNMUTE_PLAYBACK: {
          //     const { track, user, position, startTime } = store.getState().playback;
          //     const currentPosition = Date.now() - startTime + position;
          //     store.dispatch(playTrack(track, user, currentPosition));
          //     break;
          //   }
          //   default:
          //     break;
        }

        // return result;
      );
    }
  }
};
