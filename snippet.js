//Add to WooCommece Cart Page
<script type="text/javascript">
jQuery( document ).ready(function() {
  jQuery(document).on('change','[name^="shipping_method"]',function(){
    jQuery( 'body' ).trigger( 'update_checkout' );
   });

});
</script>
