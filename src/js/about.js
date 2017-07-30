// 引入css
require('../css/global.css')
require('../css/amazeui.min.css')
require('../css/carousel.css')

require('../css/header.css')
require('../css/footer.css')
require('../css/other_static.css')
require('../css/about.css')

require('../js/lib/amazeui.min')
require('../js/lib/carousel')
require('../view/about.html') // 热加载 生产时去掉
 $(function () {
            Carousel.init($(".pictureSlider"));
          });