import {
  greeting
} from './feature1/feature';
import '../styles/styles.css';
import $ from 'jquery';
import dt from 'datatables.net-bs4'


alert(greeting('World'));

$(function() {
  $('table').dataTable();
})
