<template>
<div class="row c-footer">

  <div class="col-md-4">
    <h2 class="lead text-center">Leave a Review</h2>
    <div class="text-center">
        <a href="https://chrome.google.com/webstore/detail/engmocckoohpopiacajolojeobefbcec/?hl=en">Review in the Chrome Webstore</a>
    </div>
  </div>

  <div class="col-md-4">
    <h2 class="lead text-center">Have a Suggestion?</h2>

    <div class="text-center">
      Have any suggestions, or just like the chrome extension?
      <a href="mailto:walteranderson19@gmail.com">Send me an email</a>.
    </div>
    <div class="c-footer__paypal text-center">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>
  </div>

  <div class="col-md-4">
    <h2 class="lead text-center">Follow on Github</h2>

    <div class="text-center">
      Submit issues, pull requests, or just follow the development
      on <a href="https://github.com/walteranderson/add-to-trello">Github</a>.
    </div>
  </div>
  
</div>
</template>

<style lang="scss">
.c-footer {
  border-top: 1px solid #d6dadc;
  margin-top: 30px;
}

  .c-footer__paypal {
    margin-top: 15px;
    input {
      box-shadow: none !important;
    }
  }
</style>