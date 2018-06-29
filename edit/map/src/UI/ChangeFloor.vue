<template lang="pug">
  .ui-change-floor.ml-2
    span &#8963;
    span &#8963;
</template>

<style lang='scss'>
.ui-change-floor {
  display: flex;
  flex-direction: column;
  span {
    font-size: 0.8rem;
    height: 1rem;
    width: 1rem;
    line-height: 1.6rem;
    display: block;
    text-align:center;
    cursor: pointer;
    &:hover {
      background: rgba(0,0,0,0.5);
    }
    &:last-child {
      transform: rotate(180deg);
    }
  }
}
</style>
