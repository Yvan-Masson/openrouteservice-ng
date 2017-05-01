/**
 * all URLs used in the openrouteservice
 */
/**
 * orsNamespaces and schemata e.g. for XML requests to services
 */
angular.module('orsApp').constant('orsNamespaces', {
    schemata: {
        xls: 'http://www.opengis.net/xls',
        sch: 'http://www.ascc.net/xml/schematron',
        gml: 'http://www.opengis.net/gml',
        wps: 'http://www.opengis.net/wps/1.0.0',
        ows: 'http://www.opengis.net/ows/1.1',
        xlink: 'http://www.w3.org/1999/xlink',
        xsi: 'http://www.w3.org/2001/XMLSchema-instance',
        ascc: 'http://www.ascc.net/xml/schematron',
        aas: 'http://www.geoinform.fh-mainz.de/aas',
        gpx: 'http://www.topografix.com/GPX/1/1',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xsd: 'http://www.w3.org/2001/XMLSchema',
        tcx: 'http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2',
        gml32: 'http://www.opengis.net/gml/3.2',
        xs: 'http://www.w3.org/2001/XMLSchema',
        kml: 'http://www.opengis.net/kml/2.2',
        atom: 'http://www.w3.org/2005/Atom',
        xal: 'urn:oasis:names:tc:ciq:xsdschema:xAL:2.0',
        gpxService: 'http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd',
        tcxService: 'http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2 http://www.garmin.com/xmlschemas/TrainingCenterDatabasev2.xsd',
        kmlService: 'http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd'
    },
    /**
     * metadata used when generating (export) files on the openrouteservice
     */
    metadata: {
        name: 'OpenRouteService Route',
        description: 'Route exported using GIScience Universität Heidelberg OpenRouteService',
        authorName: 'GIScience Universität Heidelberg',
        authorEmailId: 'some_person',
        authorEmailDomain: 'geog.uni-heidelberg.de',
        copyright: 'OpenRouteService - GIScience Universität Heidelberg',
        license: 'MIT',
        link: 'http://www.geog.uni-heidelberg.de/gis/index_en.html',
        keywords: 'OpenRouteService. Routing. GIS. Universität Heidelberg',
        src: 'Route point logged using OpenRouteService'
    },
    /**
     * map layers used on the openlayers map
     */
    //url to Open Map Surfer layer
    layerMapSurfer: {
        url: 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, powered by <a href="http://mapsurfernet.com/">MapSurfer.NET</a>'
    },
    //url to hillshade overlay
    layerHs: 'http://korona.geog.uni-heidelberg.de/tiles/asterh/x={x}&y={y}&z={z}',
    //url to OSM layer
    layerOSM: {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    },
    //url to OpenCycleMap
    layerOSMCycle: {
        url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    },
    //url to stamen maps
    layerStamen: {
        url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    },
    overlayHillshade: {
        url: 'http://korona.geog.uni-heidelberg.de/tiles/asterh/x={x}&y={y}&z={z}'
    }
});