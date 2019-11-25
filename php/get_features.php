<?php
	header("Access-Control-Allow-Origin: *");
    include_once("config.inc.php");
	include_once("geojson.php");

    $param_lat = $_REQUEST['lat'];
    $param_lng = $_REQUEST['lng'];    
    $dbconn = pg_connect(DSN);
    $res = pg_query($dbconn, 
			"SELECT gid, cod_lote, ST_AsGeoJSON(ST_Transform(geom, 4326)) as geojson FROM catastro.lotes WHERE ST_Intersects(geom, ST_Transform(ST_GeomFromText('POINT({$param_lng} {$param_lat})', 4326), 32718))");    
	# Build GeoJSON
	$output    = '';
	$rowOutput = '';
	while ($row = pg_fetch_assoc($res)) {
		$rowOutput = (strlen($rowOutput) > 0 ? ',' : '') . '{"type": "Feature", "geometry": ' . $row['geojson'] . ', "properties": {';
		$props = '';
		$id    = '';
		foreach ($row as $key => $val) {
			if ($key != "geojson") {
				$props .= (strlen($props) > 0 ? ',' : '') . '"' . $key . '":"' . escapeJsonString($val) . '"';								
			}
			if ($key == "id") {
				$id .= ',"id":"' . escapeJsonString($val) . '"';								
			}
		}
		
		$rowOutput .= $props . '}';
		$rowOutput .= $id;
		$rowOutput .= '}';
		$output .= $rowOutput;
	}
	$output = '{ "type": "FeatureCollection", "features": [ ' . $output . ' ]}';	
	echo $output;
?>
