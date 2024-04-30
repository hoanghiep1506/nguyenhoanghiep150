var wms_layers = [];

var format_QungNinh_0 = new ol.format.GeoJSON();
var features_QungNinh_0 = format_QungNinh_0.readFeatures(json_QungNinh_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QungNinh_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QungNinh_0.addFeatures(features_QungNinh_0);
var lyr_QungNinh_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QungNinh_0, 
                style: style_QungNinh_0,
                popuplayertitle: "Quảng Ninh ",
                interactive: true,
                title: '<img src="styles/legend/QungNinh_0.png" /> Quảng Ninh '
            });
var format_HiDng_1 = new ol.format.GeoJSON();
var features_HiDng_1 = format_HiDng_1.readFeatures(json_HiDng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HiDng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HiDng_1.addFeatures(features_HiDng_1);
var lyr_HiDng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HiDng_1, 
                style: style_HiDng_1,
                popuplayertitle: "Hải Dương ",
                interactive: true,
                title: '<img src="styles/legend/HiDng_1.png" /> Hải Dương '
            });
var format_ThiBnh_2 = new ol.format.GeoJSON();
var features_ThiBnh_2 = format_ThiBnh_2.readFeatures(json_ThiBnh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThiBnh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThiBnh_2.addFeatures(features_ThiBnh_2);
var lyr_ThiBnh_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThiBnh_2, 
                style: style_ThiBnh_2,
                popuplayertitle: "Thái Bình ",
                interactive: true,
                title: '<img src="styles/legend/ThiBnh_2.png" /> Thái Bình '
            });
var format_HiPhng_3 = new ol.format.GeoJSON();
var features_HiPhng_3 = format_HiPhng_3.readFeatures(json_HiPhng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HiPhng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HiPhng_3.addFeatures(features_HiPhng_3);
var lyr_HiPhng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HiPhng_3, 
                style: style_HiPhng_3,
                popuplayertitle: "Hải Phòng ",
                interactive: true,
                title: '<img src="styles/legend/HiPhng_3.png" /> Hải Phòng '
            });
var format_UBNDHUYN_4 = new ol.format.GeoJSON();
var features_UBNDHUYN_4 = format_UBNDHUYN_4.readFeatures(json_UBNDHUYN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBNDHUYN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBNDHUYN_4.addFeatures(features_UBNDHUYN_4);
var lyr_UBNDHUYN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBNDHUYN_4, 
                style: style_UBNDHUYN_4,
                popuplayertitle: "UBND HUYỆN",
                interactive: true,
    title: 'UBND HUYỆN<br />\
    <img src="styles/legend/UBNDHUYN_4_0.png" /> An Dương<br />\
    <img src="styles/legend/UBNDHUYN_4_1.png" /> An Lão<br />\
    <img src="styles/legend/UBNDHUYN_4_2.png" /> Bạch Long Vĩ<br />\
    <img src="styles/legend/UBNDHUYN_4_3.png" /> Cát Hải<br />\
    <img src="styles/legend/UBNDHUYN_4_4.png" /> Dương Kinh<br />\
    <img src="styles/legend/UBNDHUYN_4_5.png" /> Đồ Sơn<br />\
    <img src="styles/legend/UBNDHUYN_4_6.png" /> Hải An<br />\
    <img src="styles/legend/UBNDHUYN_4_7.png" /> Hồng Bàng<br />\
    <img src="styles/legend/UBNDHUYN_4_8.png" /> Kiến An<br />\
    <img src="styles/legend/UBNDHUYN_4_9.png" /> Kiến Thuỵ<br />\
    <img src="styles/legend/UBNDHUYN_4_10.png" /> Lê Chân<br />\
    <img src="styles/legend/UBNDHUYN_4_11.png" /> Ngô Quyền<br />\
    <img src="styles/legend/UBNDHUYN_4_12.png" /> Thuỷ Nguyên<br />\
    <img src="styles/legend/UBNDHUYN_4_13.png" /> Tiên Lãng<br />\
    <img src="styles/legend/UBNDHUYN_4_14.png" /> Vĩnh Bảo<br />'
        });
var format_QucL_5 = new ol.format.GeoJSON();
var features_QucL_5 = format_QucL_5.readFeatures(json_QucL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QucL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QucL_5.addFeatures(features_QucL_5);
var lyr_QucL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QucL_5, 
                style: style_QucL_5,
                popuplayertitle: "Quốc Lộ",
                interactive: true,
                title: '<img src="styles/legend/QucL_5.png" /> Quốc Lộ'
            });
var format_ngbin_6 = new ol.format.GeoJSON();
var features_ngbin_6 = format_ngbin_6.readFeatures(json_ngbin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ngbin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ngbin_6.addFeatures(features_ngbin_6);
var lyr_ngbin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ngbin_6, 
                style: style_ngbin_6,
                popuplayertitle: "Đường biển",
                interactive: true,
                title: '<img src="styles/legend/ngbin_6.png" /> Đường biển'
            });

lyr_QungNinh_0.setVisible(true);lyr_HiDng_1.setVisible(true);lyr_ThiBnh_2.setVisible(true);lyr_HiPhng_3.setVisible(true);lyr_UBNDHUYN_4.setVisible(true);lyr_QucL_5.setVisible(true);lyr_ngbin_6.setVisible(true);
var layersList = [lyr_QungNinh_0,lyr_HiDng_1,lyr_ThiBnh_2,lyr_HiPhng_3,lyr_UBNDHUYN_4,lyr_QucL_5,lyr_ngbin_6];
lyr_QungNinh_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_HiDng_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_ThiBnh_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_HiPhng_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_UBNDHUYN_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_QucL_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_ngbin_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_QungNinh_0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_HiDng_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_ThiBnh_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_HiPhng_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_UBNDHUYN_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_QucL_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_ngbin_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_QungNinh_0.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_HiDng_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_ThiBnh_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_HiPhng_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_UBNDHUYN_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_QucL_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_ngbin_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'header label - visible with data', 'extrude': 'header label - always visible', 'visibility': 'no label', 'drawOrder': 'header label - visible with data', 'icon': 'header label - always visible', 'F_CODE_DES': 'inline label - visible with data', 'HYC_DESCRI': 'inline label - always visible', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_ngbin_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});