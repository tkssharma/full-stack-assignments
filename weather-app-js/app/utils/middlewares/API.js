import { message } from 'antd';

function loadGoogleMapsScript(nextState, replace, done) {

    if (typeof   google === 'object' && typeof google.maps === 'object') {
        // maps is already loaded.
        done();

    } else {
        let infoMessage = message.info('Loading google maps api for location search...', 0);
        let script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBb7Ms5zllURVGWoJ2QJx6_jly8gyqKY6g&libraries=places';
        script.async = true;
        script.onload = () => {
            infoMessage();
            done();
        }
     document.head.appendChild(script);
    }
}
export { loadGoogleMapsScript };
