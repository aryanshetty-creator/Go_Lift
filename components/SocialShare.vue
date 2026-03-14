<template>
  <div class="social-share">
    <h4>Share Your Progress</h4>
    <div class="share-buttons">
      <button @click="shareToTwitter" class="share-btn twitter">
        Share to Twitter
      </button>
      <button @click="shareToFacebook" class="share-btn facebook">
        Share to Facebook
      </button>
      <button @click="copyLink" class="share-btn copy">
        Copy Link
      </button>
    </div>
    <p v-if="copied" class="success-message">Link copied to clipboard!</p>
  </div>
</template>

<script>
export default {
  name: 'SocialShare',
  props: {
    message: {
      type: String,
      default: 'Check out my workout progress!'
    }
  },
  data() {
    return {
      copied: false
    }
  },
  methods: {
    shareToTwitter() {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(this.message);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    },
    shareToFacebook() {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    },
    async copyLink() {
      try {
        await navigator.clipboard.writeText(window.location.href);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  }
}
</script>
