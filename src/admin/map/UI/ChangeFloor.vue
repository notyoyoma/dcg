<template lang="pug">
  .ui-change-floor.ml-2
    span.btn &#8963;
    span.btn &#8963;
</template>

<style lang='scss'>
.ui-change-floor {
  display: flex;
  flex-direction: column;
  span {
    font-size: 0.8rem;
    height: 1rem;
    width: 1rem;
    line-height: 1.2rem;
    display: block;
    text-align:center;
    cursor: pointer;
    &:last-child {
      transform: rotate(180deg);
    }
  }
}
</style>
