<template>
    <Carousel :autoplay="false" loop height="500px" trigger="click">
        <template v-if = "responseInfo.flag">
            <CarouselItem v-for = "(val,index) in responseInfo.result" :key = "index">
                <div class="demo-carousel">
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
