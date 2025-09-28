'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
            });

            const { Map } = await loader.importLibrary('maps');
            //const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

            //init a marker
            const { AdvancedMarkerElement } = (await google.maps.importLibrary(
                "marker"
              )) as google.maps.MarkerLibrary;

            const position = {
                // lat: 50.149976,
                // lng: 8.6213882,
                lat: 50.149970,
                lng: 8.621500,
            };

            // map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID',
            };

            //set up the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            // //set up the pin
            // const pin  = new google.maps.marker.PinElement({
                
            // });

            //put up a marker
            const marker = new AdvancedMarkerElement({
                map: map,
                position: position, 
                title: 'SG Praunheim', 
                //content: pin.element,
                //gmpClickable: true,
            });

            // // Create an info window to share between markers.
            // const infoWindow = new InfoWindow({
            //     content: "The first marker"
            // });

            // // Attach it to the marker we've just added
            // google.maps.event.addListener(marker, 'click', function() {
            // infoWindow.open(map,marker);
            // });

        };
        initMap();
    }, []);

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>Google Maps</Typography>
            <div style={{ height: '50vh', width:'100%' }} ref={mapRef} />
        </React.Fragment>
    )
};