mapboxgl.accessToken = 'pk.eyJ1IjoianNob2Rnc29uIiwiYSI6ImNtM2Y0Zm41bzBtNTYybG9paDFrcHZwbzcifQ.gt9GqzaQoWPTMqnqZOE9xA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/jshodgson/cm3ewkovz000401qx8uxjdkqb',
        center: [-122.422,49.178], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 8.5 // starting zoom
    });