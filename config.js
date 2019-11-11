/**
 * 프로젝트 경로 설정
 */

const project = {
  title: 'project',
  default: {
    src: 'src',
    dest: 'dist',
  }
};

const paths = {
  html: {
    src: `${project.default.src}/app/**/*.html`,
    dest: project.default.dest,
    dir: `${project.default.src}/app`,
  },
  pugs: {
    src: `${project.default.src}/app/**/*.pug`,
    dest: project.default.dest,
    dir: `${project.default.src}/app`,
  },
  styles: {
    src: `${project.default.src}/css/index.scss`,
    dest: `${project.default.dest}/css`,
    wildcard: `${project.default.src}/css/**/*.scss`,
  },
  scripts: {
    src: `${project.default.src}/js/**/*.js`,
    dest: `${project.default.dest}/js`,
    wildcard: `${project.default.src}/js/**/*.js`,
    ignore: [
      `${project.default.src}/js/plugins/**/*.js`,
      `${project.default.src}/js/vue/**/*.js`,
      `${project.default.src}/js/ui/**/*.js`,
    ],
    ignorePath: [
      `${project.default.dest}/js/plugins`,
      `${project.default.dest}/js/vue`,
      `${project.default.dest}/js/ui`,
    ]
  },
  images: {
    src: `${project.default.src}/images/**/*.*`,
    dest: `${project.default.dest}/images`,
    wildcard: `${project.default.src}/images/**/*.*`,
  },
  svg: {
    src: `${project.default.src}/svg/**/*.*`,
    dest: `${project.default.dest}/svg`,
    wildcard: `${project.default.src}/svg/**/*.*`,
  },
  fonts: {
    src: `${project.default.src}/fonts/**/*.{ttf,otf,woff,woff2,eot,svg}`,
    dest: `${project.default.dest}/fonts`,
    wildcard: `${project.default.src}/fonts/**/*.{ttf,otf,woff,woff2,eot,svg}`,
  }
};

module.exports = { project, paths };
