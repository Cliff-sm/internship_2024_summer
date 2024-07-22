Google's S2 Geometry is a spatial indexing library that provides a way to represent and manipulate geometric shapes on the surface of a sphere. It is particularly well-suited for geographic data and is used in various Google products to work with data that spans the globe. The core concept behind S2 Geometry is the subdivision of the Earth into a hierarchy of cells, each represented by a 64-bit integer ID. This allows for efficient encoding, storage, and operations on geographic locations and areas. The library supports operations such as point-in-polygon tests, finding nearby objects, and computing distances and areas. It is designed to scale from very small regions to the entire globe with high precision.
see http://s2geometry.io/.

its source code is written in C++, and java.
In mobile industry, flutter (with dart as the programming language) is a popular framework for building cross-platform mobile applications. It provides a rich set of features and tools for developing high-quality apps that run on both iOS and Android devices. However, there are times when you need to integrate native code into your Flutter app to access platform-specific features or libraries.
we would like to port more features of S2 Geometry to flutter with the trending AI tools.
We could reference the code written in javascript
https://www.npmjs.com/package/s2-geometry
or Java: https://github.com/google/s2-geometry-library-java
and port to dart.

Dart has a very limited starting point:
https://github.com/nbspou/dart-s2geometry

The setup of development environment could be found on:
https://docs.flutter.dev/get-started/editor
