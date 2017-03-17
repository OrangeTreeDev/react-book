#js transform
babel --presets react,es2015 js/source -d js/build

#js package
browserify js/build/app.js -o bundle.js
browserify js/build/display.js -o display-bundle.js

#css package
cat css/component/*.css css/*.css > bundle.css

#done
date; echo;