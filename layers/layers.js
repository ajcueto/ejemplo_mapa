var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZONAESTUDIO_1 = new ol.format.GeoJSON();
var features_ZONAESTUDIO_1 = format_ZONAESTUDIO_1.readFeatures(json_ZONAESTUDIO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAESTUDIO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAESTUDIO_1.addFeatures(features_ZONAESTUDIO_1);
var lyr_ZONAESTUDIO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAESTUDIO_1, 
                style: style_ZONAESTUDIO_1,
                popuplayertitle: "ZONA ESTUDIO",
                interactive: false,
                title: 'ZONA ESTUDIO'
            });
var format_MENSURAATM_2 = new ol.format.GeoJSON();
var features_MENSURAATM_2 = format_MENSURAATM_2.readFeatures(json_MENSURAATM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MENSURAATM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MENSURAATM_2.addFeatures(features_MENSURAATM_2);
var lyr_MENSURAATM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MENSURAATM_2, 
                style: style_MENSURAATM_2,
                popuplayertitle: "MENSURA ATM",
                interactive: true,
                title: '<img src="styles/legend/MENSURAATM_2.png" /> MENSURA ATM'
            });
var format_LOTES_3 = new ol.format.GeoJSON();
var features_LOTES_3 = format_LOTES_3.readFeatures(json_LOTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTES_3.addFeatures(features_LOTES_3);
var lyr_LOTES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTES_3, 
                style: style_LOTES_3,
                popuplayertitle: "LOTES",
                interactive: false,
                title: '<img src="styles/legend/LOTES_3.png" /> LOTES'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ZONAESTUDIO_1.setVisible(true);lyr_MENSURAATM_2.setVisible(true);lyr_LOTES_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ZONAESTUDIO_1,lyr_MENSURAATM_2,lyr_LOTES_3];
lyr_ZONAESTUDIO_1.set('fieldAliases', {'Layer': 'Layer', 'AREA': 'AREA', });
lyr_MENSURAATM_2.set('fieldAliases', {'NOMENCLA': 'NOMENCLA', 'FECHA_M': 'FECHA_M', 'USUARIO_M': 'USUARIO_M', 'DETALL_OBS': 'DETALL_OBS', });
lyr_LOTES_3.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_ZONAESTUDIO_1.set('fieldImages', {'Layer': '', 'AREA': '', });
lyr_MENSURAATM_2.set('fieldImages', {'NOMENCLA': '', 'FECHA_M': '', 'USUARIO_M': '', 'DETALL_OBS': '', });
lyr_LOTES_3.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_ZONAESTUDIO_1.set('fieldLabels', {'Layer': 'no label', 'AREA': 'no label', });
lyr_MENSURAATM_2.set('fieldLabels', {'NOMENCLA': 'inline label - always visible', 'FECHA_M': 'inline label - always visible', 'USUARIO_M': 'inline label - always visible', 'DETALL_OBS': 'inline label - always visible', });
lyr_LOTES_3.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_LOTES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});