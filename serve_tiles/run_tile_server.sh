node method

npm install -g tileserver-gl


docker run -it -v $(pwd):/data -p 8080:80 klokantech/tileserver-gl

NOTE WELL: If directory has spaces you will need to run with full path

docker run --rm -it -v "/Volumes/GoogleDrive/My Drive/Data/os-zoomstack":/data -p 8080:80 klokantech/tileserver-gl