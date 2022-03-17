// const gulp = require("gulp");

// const sass = require("gulp-sass");  //it converts sass to css
// const cssnano = require("gulp-cssnano"); //compresses the css into one line
// const rev = require("gulp-rev"); //it renames file with as hash,because when it send to the browseer ,browser is able to identify it as a new asset and mix with the file which is already their in cache
// const uglify = require("gulp-uglify-es").default; //used to minify js
// const imagemin = require("gulp-imagemin"); //for minifying the images
// const del = require("del");

// gulp.task("css", function (done) { //function to minify css
//   console.log("css minifying");
//   gulp  //pipe is calling all the sub middlewares their
//     .src("./assets/scss/**/*.scss")
//     .pipe(sass()) //converted from sass to css
//     .pipe(cssnano()) // minifying css
//     .pipe(gulp.dest("./assets/css")); //where it is stored

//   gulp
//     .src("./assets/**/*.css") //* means any sub-foolder or file in it needs to be passed
//     .pipe(rev())  //renaming the files with a hash attached to it
//     .pipe(gulp.dest("./public/assets")) // write rev'd assets to build dir
//     .pipe(
//       rev.manifest({
//         base: "./public/assets",
//         merge: true,
//       })
//     )
//     .pipe(gulp.dest("./public/assets"));
//   done();
// });

// gulp.task("js", function (done) {
//   console.log("minifying js...");
//   gulp
//     .src("./assets/**/*.js")
//     .pipe(uglify())
//     .pipe(rev())
//     .pipe(gulp.dest("./public/assets")) // write rev'd assets to build dir
//     .pipe(
//       rev.manifest({
//         base: "./public/assets",
//         merge: true,
//       })
//     )
//     .pipe(gulp.dest("./public/assets"));
//   done();
// });

// gulp.task("images", function (done) {
//   console.log("compressing images...");
//   gulp
//     .src("./assets/**/*.+(png|jpg|gif|svg|jpeg)") //regex used to minfy any kind of file with following extension will be minifiesd
//     .pipe(imagemin())
//     // .pipe(gulp.dest('./public/assets'))
//     .pipe(rev())
//     .pipe(gulp.dest("./public/assets")) // write rev'd assets to build dir
//     .pipe(
//       rev.manifest({
//         base: "./public/assets",
//         merge: true,
//       })
//     )
//     .pipe(gulp.dest("./public/assets"));
//   done();
// });

// gulp.task("clean:assets", function (done) {
//   del.sync("./public");
//   del.sync("./rev-manifest.json");
//   //this will delete the manifest every time gulp build runs ,so may solve your problem of manifest adding,deleting,etc.
//   done();
// });

// gulp.task(
//   "build",
//   gulp.series("clean:assets", "images", "css", "js"),
//   function (done) {
//     console.log("Building assets");
//     done();
//   }
// );
