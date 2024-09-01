'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import { Loader } from '@googlemaps/js-api-loader'

export default function Map() {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
            });

            const { Map } = await loader.importLibrary('maps');

            //init a marker
            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const position = {
                lat: 50.150390,
                lng: 8.622020,
            };

            // map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID',
            };

            //set up the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            //put up a marker
            const marker = new Marker({
                map: map,
                position: position,
            });

        };
        initMap();
    }, []);

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>Google Maps</Typography>
            <div style={{ height: '600px' }} ref={mapRef} />
        </React.Fragment>
    )
};