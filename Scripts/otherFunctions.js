$(function () {
    $("#slider-range-TotalBuildingFloorArea").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
        slide: function (event, ui) {
            $("#txtTotalBuildingFloorArea").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#txtTotalBuildingFloorArea").val($("#slider-range-TotalBuildingFloorArea").slider("values", 0) +
      " - " + $("#slider-range-TotalBuildingFloorArea").slider("values", 1));

    $("#slider-range-CommercialFloorArea").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
        slide: function (event, ui) {
            $("#txtCommercialFloorArea").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#txtCommercialFloorArea").val($("#slider-range-CommercialFloorArea").slider("values", 0) +
      " - " + $("#slider-range-CommercialFloorArea").slider("values", 1));

    $("#slider-range-ResidentialFloorArea").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
        slide: function (event, ui) {
            $("#txtResidentialFloorArea").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#txtResidentialFloorArea").val($("#slider-range-ResidentialFloorArea").slider("values", 0) +
      " - " + $("#slider-range-ResidentialFloorArea").slider("values", 1));

    $("#slider-range-NumberOfFloors").slider({
        range: true,
        min: 0,
        max: 120,
        values: [0, 120],
        slide: function (event, ui) {
            $("#txtNumberOfFloors").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#txtNumberOfFloors").val($("#slider-range-NumberOfFloors").slider("values", 0) +
      " - " + $("#slider-range-NumberOfFloors").slider("values", 1));

    $("#slider-range-ResidentialUnits").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
        slide: function (event, ui) {
            $("#txtResidentialUnits").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#txtResidentialUnits").val($("#slider-range-ResidentialUnits").slider("values", 0) +
      " - " + $("#slider-range-ResidentialUnits").slider("values", 1));
});

function btnReset() {
    document.getElementById("cbTotalBuildingFloorArea").checked = false;
    $("#slider-range-TotalBuildingFloorArea").slider("values", 0, 0);
    $("#slider-range-TotalBuildingFloorArea").slider("values", 1, 10000);
    $("#txtTotalBuildingFloorArea").val($("#slider-range-TotalBuildingFloorArea").slider("values", 0) + " - " + $("#slider-range-TotalBuildingFloorArea").slider("values", 1));

    document.getElementById("cbCommercialFloorArea").checked = false;
    $("#slider-range-CommercialFloorArea").slider("values", 0, 0);
    $("#slider-range-CommercialFloorArea").slider("values", 1, 10000);
    $("#txtCommercialFloorArea").val($("#slider-range-CommercialFloorArea").slider("values", 0) + " - " + $("#slider-range-CommercialFloorArea").slider("values", 1));

    document.getElementById("cbResidentialFloorArea").checked = false;
    $("#slider-range-ResidentialFloorArea").slider("values", 0, 0);
    $("#slider-range-ResidentialFloorArea").slider("values", 1, 10000);
    $("#txtResidentialFloorArea").val($("#slider-range-ResidentialFloorArea").slider("values", 0) + " - " + $("#slider-range-ResidentialFloorArea").slider("values", 1));

    document.getElementById("cbNumberOfFloors").checked = false;
    $("#slider-range-NumberOfFloors").slider("values", 0, 0);
    $("#slider-range-NumberOfFloors").slider("values", 1, 10000);
    $("#txtNumberOfFloors").val($("#slider-range-NumberOfFloors").slider("values", 0) + " - " + $("#slider-range-NumberOfFloors").slider("values", 1));

    document.getElementById("cbResidentialUnits").checked = false;
    $("#slider-range-ResidentialUnits").slider("values", 0, 0);
    $("#slider-range-ResidentialUnits").slider("values", 1, 10000);
    $("#txtResidentialUnits").val($("#slider-range-ResidentialUnits").slider("values", 0) + " - " + $("#slider-range-ResidentialUnits").slider("values", 1));

    $('#divSelectItemsTable').text('');
    $('#divSelectItemsMoreInfo').hide();
    $('#divSelectItemsMessage').hide();
    $('#divSelectItemsCount').hide();

    map.graphics.clear();
    map.setExtent(initExtent);
}

function btnSearch() {
    var TotalBuildingFloorAreaStart = null, TotalBuildingFloorAreaEnd = null, CommercialFloorAreaStart = null, CommercialFloorAreaEnd = null
    , ResidentialFloorAreaStart = null, ResidentialFloorAreaEnd = null, NumberOfFloorsStart = null, NumberOfFloorsEnd = null
    , ResidentialUnitsStart = null, ResidentialUnitsEnd = null;
    var whereClause = "";
    if (document.getElementById("cbTotalBuildingFloorArea").checked == true) {
        TotalBuildingFloorAreaStart = $("#slider-range-TotalBuildingFloorArea").slider("values", 0);
        TotalBuildingFloorAreaEnd = $("#slider-range-TotalBuildingFloorArea").slider("values", 1);
        if (whereClause == "") {
            whereClause = "BldgArea > " + TotalBuildingFloorAreaStart + " AND BldgArea < " + TotalBuildingFloorAreaEnd;
        }
        else {
            whereClause += " AND BldgArea > " + TotalBuildingFloorAreaStart + " AND BldgArea < " + TotalBuildingFloorAreaEnd;
        }
    }
    if (document.getElementById("cbCommercialFloorArea").checked == true) {
        CommercialFloorAreaStart = $("#slider-range-CommercialFloorArea").slider("values", 0);
        CommercialFloorAreaEnd = $("#slider-range-CommercialFloorArea").slider("values", 1);
        if (whereClause == "") {
            whereClause = "ComArea > " + CommercialFloorAreaStart + " AND ComArea < " + CommercialFloorAreaEnd;
        }
        else {
            whereClause += " AND ComArea > " + CommercialFloorAreaStart + " AND ComArea < " + CommercialFloorAreaEnd;
        }
    }
    if (document.getElementById("cbResidentialFloorArea").checked == true) {
        ResidentialFloorAreaStart = $("#slider-range-ResidentialFloorArea").slider("values", 0);
        ResidentialFloorAreaEnd = $("#slider-range-ResidentialFloorArea").slider("values", 1);
        if (whereClause == "") {
            whereClause = "ResArea > " + ResidentialFloorAreaStart + " AND ResArea < " + ResidentialFloorAreaEnd;
        }
        else {
            whereClause += " AND ResArea > " + ResidentialFloorAreaStart + " AND ResArea < " + ResidentialFloorAreaEnd;
        }
    }
    if (document.getElementById("cbNumberOfFloors").checked == true) {
        NumberOfFloorsStart = $("#slider-range-NumberOfFloors").slider("values", 0);
        NumberOfFloorsEnd = $("#slider-range-NumberOfFloors").slider("values", 1);
        if (whereClause == "") {
            whereClause = "NumFloors > " + NumberOfFloorsStart + " AND NumFloors < " + NumberOfFloorsEnd;
        }
        else {
            whereClause += " AND NumFloors > " + NumberOfFloorsStart + " AND NumFloors < " + NumberOfFloorsEnd;
        }
    }
    if (document.getElementById("cbResidentialUnits").checked == true) {
        ResidentialUnitsStart = $("#slider-range-ResidentialUnits").slider("values", 0);
        ResidentialUnitsEnd = $("#slider-range-ResidentialUnits").slider("values", 1);
        if (whereClause == "") {
            whereClause = "UnitsRes > " + ResidentialUnitsStart + " AND UnitsRes < " + ResidentialUnitsEnd;
        }
        else {
            whereClause += " AND UnitsRes > " + ResidentialUnitsStart + " AND UnitsRes < " + ResidentialUnitsEnd;
        }
    }
    if (TotalBuildingFloorAreaStart != null || TotalBuildingFloorAreaEnd != null || CommercialFloorAreaStart != null || CommercialFloorAreaEnd != null
     || ResidentialFloorAreaStart != null || ResidentialFloorAreaEnd != null || NumberOfFloorsStart != null || NumberOfFloorsEnd != null
     || ResidentialUnitsStart != null || ResidentialUnitsEnd != null) {
        $('#loading').show();
        map.graphics.clear();
        queryTask = new esri.tasks.QueryTask(MapPlutoUrl);

        //initialize query
        query = new esri.tasks.Query();
        query.returnGeometry = true;
        query.outFields = ["*"];

        query.where = whereClause;

        //execute query
        queryTask.execute(query, function executeMapPlutoSearch(featureSet) {
            $('#loading').hide();
            var resultFeatures = featureSet.features;
            if (resultFeatures.length > 0) {
                var features = [];

                var htmlQueryRecords = '<div class="table-responsive"><table id=\"tblQueryRecords\" class="table table-bordered"><thead><tr>';
                htmlQueryRecords += "<th>Borough</th>"
                    + "<th>Block</th>"
                    + "<th>Lot</th>"
                    + "</tr></thead><tbody>";
                //Loop through each feature returned
                for (var i = 0, il = resultFeatures.length; i < il; i++) {
                    var graphic = resultFeatures[i];
                    graphic.setSymbol(symbolFill);
                    map.graphics.add(graphic);
                    features.push(graphic);
                    htmlQueryRecords += "<tr class=\"clickableRow\" OnClick=\"ShowInfoForSelectedRecord('" + graphic.attributes.OBJECTID + "');\"><td>" + graphic.attributes.Borough + "</td>"
                        + "<td>" + graphic.attributes.Block + "</td>"
                        + "<td>" + graphic.attributes.Lot + "</td>"
                        + "</tr>";
                }
                var spatialRef = new esri.SpatialReference({ wkid: 102718 });
                var zoomExtent = new esri.geometry.Extent();
                zoomExtent.spatialReference = spatialRef;
                zoomExtent.xmin = esri.graphicsExtent(features).xmin - 10000;
                zoomExtent.ymin = esri.graphicsExtent(features).ymin - 10000;
                zoomExtent.xmax = esri.graphicsExtent(features).xmax + 10000;
                zoomExtent.ymax = esri.graphicsExtent(features).ymax + 10000;
                map.setExtent(zoomExtent);
                htmlQueryRecords += '</tr></tbody></table></div>';
                $('#divSelectItemsTable').text('');
                $('#divSelectItemsTable').append(htmlQueryRecords);
                $('#divSelectItemsMessage').hide();
                $('#divSelectItemsMoreInfo').show();
                $('#divSelectItemsCount').show();
                $('#divSelectItemsCount').text('There are ' + resultFeatures.length + ' records returned');
                highlightTableRow('tblQueryRecords');
            }
            else {
                $('#divSelectItemsTable').text('');
                $('#divSelectItemsMoreInfo').hide();
                $('#divSelectItemsMessage').show();
                $('#divSelectItemsCount').hide();
            }
        }, function (error) {
            $('#loading').hide();
            swal(error.message);
            console.log(error);
        });
    }
    else {
        swal("Please choose some searching criteria first");
    }
}

function ShowInfoForSelectedRecord(OBJECTID) {
    map.graphics.clear();
    queryTask = new esri.tasks.QueryTask(MapPlutoUrl);

    //initialize query
    query = new esri.tasks.Query();
    query.returnGeometry = true;
    query.outFields = ["*"];

    query.where = "OBJECTID = " + OBJECTID;

    //execute query
    queryTask.execute(query, function executeMapPlutoSelect(featureSet) {
        var resultFeatures = featureSet.features;
        if (resultFeatures.length > 0) {
            var features = [];
            //Loop through each feature returned
            for (var i = 0, il = resultFeatures.length; i < il; i++) {
                var graphic = resultFeatures[i];
                graphic.setSymbol(symbolFill);
                map.graphics.add(graphic);
                features.push(graphic);
            }
            var spatialRef = new esri.SpatialReference({ wkid: 102718 });
            var zoomExtent = new esri.geometry.Extent();
            zoomExtent.spatialReference = spatialRef;
            zoomExtent.xmin = esri.graphicsExtent(features).xmin - 1000;
            zoomExtent.ymin = esri.graphicsExtent(features).ymin - 1000;
            zoomExtent.xmax = esri.graphicsExtent(features).xmax + 1000;
            zoomExtent.ymax = esri.graphicsExtent(features).ymax + 1000;
            map.setExtent(zoomExtent);
        }
    });
}

function highlightTableRow(tableName) {
    var table = document.getElementById(tableName);
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () {
            // Get the row id where the cell exists
            var rowId = this.parentNode.rowIndex;

            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "#99FFFF";
            rowSelected.className += " selected";
        }
    }
}
