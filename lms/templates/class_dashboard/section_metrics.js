<%page args="id_str_opened, id_str_grade, id_str_attempts, id_str_tooltip, data_opened, data_grade, data_attempts, i, **kwargs"/>
<%!
  import json
%>

$(function () {
  var divTooltip = d3.select("#${id_str_tooltip}");
  
  var paramOpened = {
    data: ${json.dumps(data_opened)},
    width: $("#${id_str_opened}").width(),
    height: $("#${id_str_opened}").height(),
    tag: "opened",
    bVerticalXAxisLabel : true,
  };

  var paramGrade = {
    data: ${json.dumps(data_grade)},
    width: $("#${id_str_grade}").width(),
    height: $("#${id_str_grade}").height(),
    tag: "grade",
  };

  var paramAttempts = {
    data: ${json.dumps(data_attempts)},
    width: $("#${id_str_attempts}").width(),
    height: $("#${id_str_attempts}").height(),
    tag: "attempts",
  };

  var barGraphOpened, barGraphGrade, barGraphAttempts;

  if ( paramOpened.data.length > 0 ) {
    barGraphOpened = edx_d3CreateStackedBarGraph(paramOpened, d3.select("#${id_str_opened}").append("svg"), divTooltip);
    barGraphOpened.drawGraph();
  }

  if ( paramGrade.data.length > 0 ) {
    barGraphGrade = edx_d3CreateStackedBarGraph(paramGrade, d3.select("#${id_str_grade}").append("svg"), divTooltip);
    barGraphGrade.drawGraph();
  }

  if ( paramAttempts.data.length > 0 ) {
    barGraphAttempts = edx_d3CreateStackedBarGraph(paramAttempts, d3.select("#${id_str_attempts}").append("svg"),
                                                   divTooltip);
    barGraphAttempts.drawGraph();
  }
});