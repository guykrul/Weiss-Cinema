const gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	maps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	rename = require("gulp-rename")


gulp.task('sass', () => {
	return gulp.src('./src/assets/sass/style.scss')
		.pipe( maps.init() )
		.pipe( autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe( sass({ expended: true }).on( 'error', sass.logError ) )
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({ suffix: '.min' }))
		.pipe( maps.write('./') )
		.pipe( gulp.dest('./dist/css') )
		.pipe( connect.reload() )
});

gulp.task('connect', () => {
	connect.server({livereload: true});
});
gulp.task('html', () =>
	gulp.src('./*.html')
		.pipe( connect.reload() )
);

gulp.task('watch', () => {
	gulp.watch( ['./src/assets/sass/style.scss', './src/assets/sass/**/*.scss'], ['sass'] );
	gulp.watch(['./*.html'], ['html']);
});


gulp.task('default', ['watch', 'connect']);