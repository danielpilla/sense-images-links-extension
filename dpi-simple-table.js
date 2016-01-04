define(["jquery", "text!./dpi-simple-table.css"], function($, cssContent) {'use strict';
	$("<style>").html(cssContent).appendTo("head");
	return {
		initialProperties : {
			version : 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 10,
					qHeight : 20
				}]
			}
		},
		definition : {
			type : "items",
			component : "accordion",
			items : {
				dimensions : {
					uses : "dimensions",
					min : 1
				},
				measures : {
					uses : "measures",
					min : 0
				},
				sorting : {
					uses : "sorting"
				},
				settings : {
					uses : "settings",
					items : {
						links:{
						  type: "boolean",
						  component: "switch",
						  translation: "Enable Links",
						  ref: "linkColumns",
						  defaultValue: true,
						  trueOption: {
							  value: true,
							  translation: "properties.on"
							  },
						  falseOption: {
							  value: false,
							  translation: "properties.off"
							  },
						  show: true
						},
						images : {
							type : "items",
							label : "Embedded Images",
							items : {	
								linkingColumns : {				
								  type: "boolean",
								  component: "switch",
								  translation: "Enable Embedded Images",
								  ref: "imageColumns",
								  defaultValue: true,
								  trueOption: {
									  value: true,
									  translation: "properties.on"
									  },
								  falseOption: {
									  value: false,
									  translation: "properties.off"
									  },
								  show: true
								},
								imageHeight : {
									ref : "imageHeight",
									label : "Image Height",
									type : "string",
									defaultValue : 100
								},
							}
						}
					}
				}
			}
		},
		snapshot : {
			canTakeSnapshot : true
		},
		paint : function($element, layout) {
			var html = "<table><thead><tr>", self = this, lastrow = 0, dimcount = this.backendApi.getDimensionInfos().length;
			//render titles
			$.each(this.backendApi.getDimensionInfos(), function(key, value) {
				html += '<th align="left">' + value.qFallbackTitle + '</th>';
			});
			$.each(this.backendApi.getMeasureInfos(), function(key, value) {
				html += '<th align="left">' + value.qFallbackTitle + '</th>';
			});
			html += "</tr></thead><tbody>";
			//render data
			this.backendApi.eachDataRow(function(rownum, row) {
				lastrow = rownum;
				html += '<tr>';
				$.each(row, function(key, cell) {
					if(cell.qIsOtherCell) {
						cell.qText = self.backendApi.getDimensionInfos()[key].othersLabel;
					}
					html += "<td class='";
					if(!isNaN(cell.qNum)) {
						html += "numeric ";
					}
					//negative elementnumbers are not selectable
					if(key < dimcount && cell.qElemNumber > -1) {
						html += "selectable' data-value='" + cell.qElemNumber + "' data-dimension='" + key + "'";
					} else {
						html += "'";
					}
				  //if just links is selected, check for links and convert
				if(cell.qText !== undefined) {
					if(layout.linkColumns && !layout.imageColumns){
						if(cell.qText.slice(0,4).toLowerCase()==='http'){
							html += '> <a href="' + cell.qText + '" target="_blank">' + cell.qText + '</a></td>';
						}
						else if(cell.qText.slice(0,3).toLowerCase()==='www'){
							html += '> <a href="http://' + cell.qText + '" target="_blank">' + cell.qText + '</a></td>';
						}
						else{
							html += '>' + cell.qText + '</td>';
						}
					}
					 
					  //if just images is selected, check for images and convert
					else if(layout.imageColumns && !layout.linkColumns){
						if(~cell.qText.toLowerCase().indexOf('img.') || ~cell.qText.toLowerCase().indexOf('.jpg') || ~cell.qText.toLowerCase().indexOf('.gif') || ~cell.qText.toLowerCase().indexOf('.png')){
						    html += '> <img src="' + cell.qText + '" height=' + layout.imageHeight + '></td>';
						}
						else{
							html += '>' + cell.qText + '</td>';
						}
					}
					  //if both images and links are selected, if an image, convert and add a link
					  //if not an image, just convert to link
					else if(layout.imageColumns && layout.linkColumns){
						if(~cell.qText.toLowerCase().indexOf('img.') || ~cell.qText.toLowerCase().indexOf('.jpg') || ~cell.qText.toLowerCase().indexOf('.gif') || ~cell.qText.toLowerCase().indexOf('.png')){
						    html += '> <a href="' + cell.qText + '" target="_blank"><img src="' + cell.qText + '"" height=' + layout.imageHeight + '></a></td>';
						}
						else if(cell.qText.slice(0,4).toLowerCase()==='http'){
							html += '> <a href="' + cell.qText + '" target="_blank">' + cell.qText + '</a></td>';
						}
						else if(cell.qText.slice(0,3).toLowerCase()==='www'){
							html += '> <a href="http://' + cell.qText + '" target="_blank">' + cell.qText + '</a></td>';
						}
						else{
							html += '>' + cell.qText + '</td>';
						}
					}
				  //otherwise, no formatting
					else{
					html += '>' + cell.qText + '</td>';
					}
				}
				  // value is undefined, fill with null value
				else{
					html += '>' + '</td>';
				}

				});
				html += '</tr>';			    
			});
			html += "</tbody></table>";
			$element.html(html);
		  	$element.find('.selectable').on('qv-activate', function() {
				if(this.hasAttribute("data-value")) {
					var value = parseInt(this.getAttribute("data-value"), 10), dim = parseInt(this.getAttribute("data-dimension"), 10);
					self.selectValues(dim, [value], true);
					$element.find("[data-dimension='"+ dim +"'][data-value='"+ value+"']").toggleClass("selected");
				}
			});
		}
	};
});








