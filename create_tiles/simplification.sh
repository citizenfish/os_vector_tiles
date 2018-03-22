--load openroads, mkae sure SRS set!

ogr2ogr -f "PostgreSQL" PG:"dbname=nautoguide user=postgres password=************ host=localhost" -s_srs EPSG:27700 -t_srs EPSG:27700 -nln mapping_os_opendata_openmap.roads openmap_all_road.shp

ALTER TABLE mapping_os_opendata_openmap.roads ADD column wkb_geometry_simplified GEOMETRY;
UPDATE mapping_os_opendata_openmap.roads SET wkb_geometry_simplified = ST_SIMPLIFYPRESERVETOPOLOGY(wkb_geometry, 100);

ogr2ogr -f "ESRI Shapefile" openmap_all_road_simplified.shp \
PG:"dbname=nautoguide user=postgres password=********* host=localhost" \
-s_srs EPSG:27700 -t_srs EPSG:27700 \
-sql "SELECT roadnumber,classifica,featcode,wkb_geometry_simplified FROM mapping_os_opendata_openmap.roads"