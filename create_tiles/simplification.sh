##load openroads, mkae sure SRS set!

### We use openroads as this data set includes a classifier for sliproads which we want to use at low zoom levels

ogr2ogr -f "PostgreSQL" PG:"dbname=nautoguide user=postgres password=************ host=localhost" -s_srs EPSG:27700 -t_srs EPSG:27700 -nln mapping_os_opendata_openroads.roads openroads_all_road.shp

ALTER TABLE mapping_os_opendata_openroads.roads ADD column wkb_geometry_simplified geometry(GEOMETRY, 27700);
### This simplifies to 100 metres which should be plenty as we are only going down to zoom level 13 with this.
UPDATE mapping_os_opendata_openroads.roads SET wkb_geometry_simplified = ST_SIMPLIFYPRESERVETOPOLOGY(wkb_geometry, 100);
cd /opt/nautoguide/fast_mount/vector_tiles/openroads/data

ogr2ogr -f "ESRI Shapefile" /opt/nautoguide/fast_mount/vector_tiles/openroads/data/openroads_all_roads_simplified.shp \
PG:"dbname=nautoguide user=postgres password=********* host=localhost" \
-s_srs EPSG:27700 -t_srs EPSG:27700 \
-sql "SELECT ogc_fid, roadnumber, \"class\", \"function\", formOfWay, \"primary\" as primary_flag, wkb_geometry_simplified as wkb_geometry FROM mapping_os_opendata_openroads.roads WHERE class IN ('A Road', 'B Road', 'Motorway')"



###IGNORE AS I AM USING openroads instead
cd /opt/nautoguide/fast_mount/vector_tiles/openmap/data
ogr2ogr -f "PostgreSQL" PG:"dbname=nautoguide user=postgres password=************ host=localhost" -s_srs EPSG:27700 -t_srs EPSG:27700 -nln mapping_os_opendata_openmap.roads openmap_all_road.shp

ALTER TABLE mapping_os_opendata_openmap.roads ADD column wkb_geometry_simplified GEOMETRY;
UPDATE mapping_os_opendata_openmap.roads SET wkb_geometry_simplified = ST_SIMPLIFYPRESERVETOPOLOGY(wkb_geometry, 100);

##This exports all motorways, primary, A, B roads hopefully simimlar to STRATEGI
ogr2ogr -f "ESRI Shapefile" openmap_all_road_simplified.shp \
PG:"dbname=nautoguide user=postgres password=********* host=localhost" \
-s_srs EPSG:27700 -t_srs EPSG:27700 \
-sql "SELECT roadnumber,classifica,featcode,wkb_geometry_simplified FROM mapping_os_opendata_openmap.roads WHERE featcode IN(15719,15729,15743,15749,15723,15739,15710,15735)"