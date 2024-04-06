<template>
    <div class="video-container">
      <video :src="source" controls></video>
    </div>
  </template>
   
  <script>
  export default {
    props: {
      source: {
        type: String,
        required: true
      }
    }
  }
  </script>
   
  <style>
  .video-container {
    display: flex;
    justify-content: center;
  }
   
  .video-container video {
    max-width: 100%;
    height: auto;
  }
  </style>