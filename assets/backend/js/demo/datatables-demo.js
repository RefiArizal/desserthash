// Call the dataTables jQuery plugin
$(document).ready( function () {
  var table = $('#dataTable').DataTable( {
    pageLength : 5,
    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']]
  } )
} );
