var gulp = require("gulp");
var nunjucksRender = require("gulp-nunjucks-render");

gulp.task("default", function () {
  return gulp
    .src("pages/*.html")
    .pipe(
      nunjucksRender({
        path: ["pages/"], // String or Array
      })
    )
    .pipe(gulp.dest("dist"));
});
