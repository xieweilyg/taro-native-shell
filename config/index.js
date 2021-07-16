const path = require('path')
const config = {
  projectName: 'test2',
  date: '2020-12-28',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
    Yang: JSON.stringify({name:"洋洋", age: 27}),
  },
  alias:{
    '@img': path.resolve(__dirname, '..', 'src/assets/img'),
    '@img2': path.resolve(__dirname, '..', 'src/assets/img2'),
    '@resource': path.resolve(__dirname, '..', 'src/pages'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  rn: {
    appName: 'taroDemo', // 生成的包registerComponent值，要跟APP名一致
    output: {
      ios: 'dist/ios/main.jsbundle', // 这个路径是相对于工程根目录的，不是相对于index.js配置文件的
      iosAssetsDest: 'dist/ios/assets',
      iosSourcemapOutput: 'dist/ios/ios.map',
      android: 'dist/android/index.android.bundle',
      androidAssetsDest: 'dist/android/assets',
      androidSourcemapOutput: 'dist/android/android.map',
    },
    postcss: {
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          // generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
