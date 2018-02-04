<template>
    <Carousel :autoplay="false" loop height="500px" trigger="click">
        <template v-if = "responseInfo.flag">
            <CarouselItem v-for = "(val,index) in responseInfo.result" :key = "index">
                <div class="demo-carousel" v-bar>
                    <div>
                        <img :src="val" class="my-img"/>
                    </div>
                </div>
            </CarouselItem>
        </template>
        <CarouselItem v-else>
            <div class="demo-carousel">
                {{responseInfo.result}}
            </div>
        </CarouselItem>
    </Carousel>
</template>
<style scoped>
.demo-carousel {
  height: 500px;
  width: 100%;
  line-height: 500px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #506b9e;
}
.my-img {
  max-width: 1000px;
}
</style>
<style>
.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}
.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  background-color: rgba(48, 121, 244, 0.1);
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
}
</style>

<script>
import {Carousel, CarouselItem} from 'element-ui'
export default {
  components: {
    Carousel,
    CarouselItem
  },
  computed: {
    responseInfo () {
      return {
        flag: this.$store.state.photos.isSuccess,
        result: this.$store.state.photos.result
      }
    }
  }
}
</script>
