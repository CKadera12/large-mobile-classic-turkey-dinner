(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[158,102,116,48],[0,0,320,100],[0,102,156,97]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.largemobilestuffing = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.largemobiletable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.largemobileturkeyclassic = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whatsinourclassicturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBAQgEgEAAgGQAAgGAEgFQAEgEAGAAQAFAAAFAEQADAFAAAGQAAAGgDAEQgFAEgFAAQgGAAgEgEgAgGAYQgBgDAAgGQgBgHACgFQACgGAEgGIADgHQAJgPAAgKQAAgHgDgEQgEgEgFgBQgHABgDADQgDADgCAIIgBAAQgDAOgHAAQgFAAgDgDQgBgDAAgGQgBgLALgIQALgIAPAAQAQAAAKAIQAKAIAAANQAAAHgDAHQgEAFgJAIIgCADQgKAHgCAHIgCAJIAAAGIgCAFIgDABQgEAAgCgDg");
	this.shape.setTransform(44,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA2QgMgJAAgPQAAgKAGgIQAGgIANgHQgKgFgGgHQgFgHAAgJQAAgOALgJQAMgJASAAQARAAAKAIQALAIAAAMQAAAJgGAHQgFAHgMAHQANAFAHAJQAHAJAAALQAAAPgMAKQgNAKgSAAQgTAAgNgKgAgSAPQgDAFAAAHQAAAKAHAIQAHAHAJAAQAIAAAGgGQAFgFAAgHQAAgIgHgHQgHgHgNgHQgIAEgEAGgAgKgvQgFAFAAAGQAAAHAFAFQAFAFAKAGQAHgFADgFQADgFAAgFQAAgHgFgGQgGgFgHAAQgGAAgEAEg");
	this.shape_1.setTransform(34.4,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAtQgFgBAAgEQAAgDAEgCIACgBQADgBABgDIABgLIAAgFIAAgIIAAgFQAAgQgBgFQgBgGgCgBIgEgBQgFgCgBgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAGgCIAMgFIAIgCQAFAAABANIAAACIABAAQAFgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgCADgGAAIgEgBIgEgCIgCgFIgCgCQgHAAgCAJQgCAJAAAaQAAAJABADQABAEACACIAEABQAGACgBAEQAAADgEABQgGACgLAAQgOAAgEgCg");
	this.shape_2.setTransform(21,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAiQgNgNABgVQAAgTANgOQAOgOATAAQAUAAANANQAMANAAAUQAAAUgNAPQgOAOgTAAQgTAAgOgOgAgRgaQgFAHAAAMQAAASAHAMQAIAMAKAAQAJAAAGgIQAGgHAAgNQgBgQgHgNQgIgMgKAAQgJAAgGAIg");
	this.shape_3.setTransform(12.2,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBCQgEgBAAgFQAAgCAEgCIACgBQABAAAAgBQABAAAAAAQABgBAAgBQAAAAAAgBIABgLIAAgJIAAgrIgKAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgDIAAgDIABgDIADgBIAKAAIgBgHIAAgHQAAgOAIgHQAIgIAPAAQAKAAAGAFQAHAEAAAIQAAAEgCADQgDACgEAAQgDgBgCgBQgDgBgBgDIgCgDQgDgGgGgBQgDABgCACQgBACAAADIABALQACAIAAAGIANAAIADABIABADIAAADIgBADIgDABIgNAAIAAAuIABAPQABAEABABIAEACQAFACAAADQAAADgEACIgRABIgSgBg");
	this.shape_4.setTransform(5.2,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAtQgEgBAAgEQAAgDAEgCIACgBQADgBABgDIABgLIAAgFIAAgIIAAgFQAAgQgBgFQgBgGgBgBIgFgBQgGgCAAgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBIAFgCIANgFIAIgCQAEAAABANIAAACIAAAAQAGgHAEgEQAFgEAGAAQAGAAAEAEQADAEAAAGQAAAGgCAFQgDADgFAAIgFgBIgEgCIgCgFIgCgCQgGAAgCAJQgDAJAAAaQAAAJABADQABAEADACIADABQAFACABAEQAAADgGABQgEACgNAAQgNAAgFgCg");
	this.shape_5.setTransform(-6.5,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAjQgNgOAAgUQAAgUAOgOQANgOATAAQATAAAJAKQALAKAAASQAAAFgCACQgBACgIAAIghAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIASAAIAEAAIABgDQAAgJgFgGQgHgGgIAAQgKAAgFAKQgGAJABANQgBAOAIAKQAHALALAAQAHAAAEgCQAFgBAFgDIACgDQAFgEACAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABQAAACgDADIgGAGQgIAHgHADQgIADgJAAQgSAAgNgNg");
	this.shape_6.setTransform(-15,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsAtQgFgBAAgEQAAgDAFgCIACgBQADgBABgDIABgLIgBgFIAAgIIAAgIIAAgTQgBgFgCgBIgEgBQgGgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAGgCIANgFIAJgCQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABIAAAFIAAABIABABIAAAAIABgBIACgCIACgCQAKgJAKAAQAHAAAGADQAGADAEAEQAFAGABAHQACAGAAAPIAAAMIAAAGIAAAFIABAJQABADACABIACABQAFACAAADQAAAEgEABQgFABgOAAIgRgBQgEgBAAgDQAAgEAEgCIAEgBQACgCABgEIABgNQAAgcgEgIQgEgHgJAAQgEAAgFADQgEADgDAEQgCAFAAAGIgBAZQAAAJABADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEABQAEACAAAEQAAADgEABQgFACgMAAQgOAAgEgCg");
	this.shape_7.setTransform(-25.3,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsAtQgFgBAAgEQAAgDAFgCIACgBQADgBABgDIABgLIgBgFIAAgIIAAgIIAAgTQgBgFgCgBIgEgBQgGgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAGgCIANgFIAJgCQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABIAAAFIAAABIABABIAAAAIABgBIACgCIACgCQAKgJAKAAQAHAAAGADQAGADAEAEQAFAGABAHQACAGAAAPIAAAMIAAAGIAAAFIABAJQABADACABIACABQAFACAAADQAAAEgEABQgFABgOAAIgRgBQgEgBAAgDQAAgEAEgCIAEgBQACgCABgEIABgNQAAgcgEgIQgEgHgJAAQgEAAgFADQgEADgDAEQgCAFAAAGIgBAZIABAMQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEABQAEACAAAEQAAADgEABQgFACgMAAQgOAAgEgCg");
	this.shape_8.setTransform(-36.2,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBBQgEgBAAgEQAAgDAEgCIADgBQACgBABgDIABgLIAAgFIAAgIIAAgJIgBgSQgBgFgBgBIgFgBQgFgCAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAGgCIANgFIAJgCQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAGIAAAGIAAAEIgBAWIAAABIAAAWIAAAMQABADACACIADABQAFACAAAEQAAADgFABQgEACgMAAQgNAAgFgCgAgLgtQgDgEAAgEQAAgGAEgDQAFgEAFAAQAGAAADADQAFAEAAAFQgBAFgEAEQgEADgGAAQgFAAgFgDg");
	this.shape_9.setTransform(-44.3,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTBCIgLAAIgIAAIgHAAQgMAAgEgBQgDgCAAgEQAAgDAFgCIAGgDIACgQIAAgjIgBghQAAgOgBgCIgGgDQgFgCAAgEQAAgEAEgBQAEgCALAAIAIAAIAJABIAMgBIAKAAQAiAAASARQATASAAAgQAAAfgTARQgTAQgkAAgAgTgzQgFABgBADIgBAOIgBAcIABAiIABASQACACAFACQAGACAJAAQAUAAAKgMQALgNAAgaQAAgagMgOQgMgPgWAAQgHAAgEACg");
	this.shape_10.setTransform(-53.9,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqA8QgEgDAAgGQAAgFADgDQADgDAFAAIAEAAIADACIACAEQADADABAAQAFAAAFgGQAFgHAAgHQAAgIgHgPIgBgCIgOgfIgIgSQgCgDgFgCIgFgDIgBgDQAAgEAFgCQAFgBANAAQANAAAFABQAFACgBADIAAADIgCACIgDABQgBABgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIACAHIAHATIAHARQADAEABAAQABAAACgEIAGgPIAGgSIADgJQgBgCgFgDQgEgDgBgCQABgEAEgBQAEgBAKAAQALAAAEABQAEACAAADQAAAEgGABIgDABQgFADgGAQIgDAHIgLAcQgPAmgKAMQgJALgOAAQgGAAgFgEg");
	this.shape_11.setTransform(56.2,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAjQgNgOAAgUQAAgUAOgOQANgOATAAQATAAAKAKQAKAKAAASQAAAFgCACQgCACgGAAIgiAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIASAAIAEAAIABgDQAAgJgFgGQgHgGgIAAQgKAAgFAKQgGAJABANQAAAOAHAKQAHALALAAQAHAAAEgCQAFgBAFgDIACgDQAFgEACAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABQAAACgDADIgGAGQgIAHgIADQgHADgJAAQgSAAgNgNg");
	this.shape_12.setTransform(46.8,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBDIgEgBQgEgBgJgLIgEgFIgBgCQgWgdgCAAIgBABIgBAEIAAAEIABATIACAHIAFADQAEABABAEQAAADgFACQgFABgMAAQgOAAgEgBQgFgCABgEQgBgDAFgCIACgBQADgBABgEIABgQIAAgLIAAgOIAAgKIAAgjQgCgIgBgCQgBgBgEgBIgDgBIgEgBIAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAJgEIANgDIAJgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQACACAAAEIgBASIgBAYIAAAWIABAEIABABIAFgCIAGgFIAIgIQABgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBgBQgCgCgBgCQAAgFAFgBQAEgCAOAAQAIAAAEACQAEACAAADQAAAEgGACIgKADQgDACgJAHIgBACIgDADIAAACQgBACAJAKIAAABIAQAUIAKAKIAIADQAGACAAAEQAAAEgEABQgEACgLAAg");
	this.shape_13.setTransform(37.2,-1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAuQgEgCAAgEQAAgDAEgCIACgBQADgBABgDIABgKIAAgHIAAgHIAAgFQAAgQgBgFQgBgGgCAAIgEgCQgFgCgBgDQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAGgDIAMgEIAIgCQAFAAABANIAAACIAAAAQAFgHAFgEQAGgEAEAAQAHAAAEAEQADAEABAGQAAAHgDADQgDAEgFAAIgFgBIgEgDIgCgDIgCgDQgHAAgCAJQgCAJAAAaQAAAIABAFQABAEADABIADABQAGACAAADQgBAEgEACQgFABgNAAQgNAAgFgBg");
	this.shape_14.setTransform(28.4,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAUAvIgBgFIAAgGIgBgBIgDACIgBACQgFAEgFACQgFADgHAAQgHAAgFgDQgHgDgEgEQgEgFgCgIQgCgHAAgTIABgGIAAgHIAAgCQAAgHgBgCQgBgCgEgCIgDgBQgGgBAAgDQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAIAJgEIAMgDIAKgCQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAIABAGIAAAEIgBAiQAAASAEAHQAEAHAJAAQAKAAAEgJQAFgKAAgVIAAgHQAAgHgBgCQgBgCgDgCIgEgBQgFgBAAgDQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAIgEIAMgDIAKgCQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAGIAAAFIgBAlIAAAPIAAAHQABADAFACIABABQAGABAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgGADIgNAEIgJACIgEgBg");
	this.shape_15.setTransform(19.2,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTBBQgFgCAAgEQAAgDAFgCIAGgDQABgCABgPIAAgqIAAgZIgBgOQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgFgBIgEAAQgGAAgEABQgDACgDADIgDAGIgDAHIgCADIgDABQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBIgBgIQABgMACgHQADgIAEAAIABAAQAIACALAAIA0AAQAMAAAHgCIABAAQAEAAADAIQADAHABAMQAAAGgCACQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgDgBIgDgDIgDgHIgCgGQgDgDgDgCQgEgBgGAAIgFAAIgEABQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABIgBAPIAAAYIAAAqQABAPABACIAFADQAGACgBADQAAAEgFACQgFACgOAAQgOAAgFgCg");
	this.shape_16.setTransform(7.9,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAjQgNgOAAgUQAAgUANgOQAOgOAUAAQAPAAALAIQAKAIAAALQAAAEgDADQgDACgEAAQgFAAgDgCQgDgCgDgIQgDgGgDgDQgEgCgFAAQgKAAgGAHQgGAIAAAOQAAAQAIAKQAJAKAMAAIAJgBIAHgDIAEgDQAFgEADAAIADABQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgCAGIgFAFQgHAHgIADQgIADgJAAQgSAAgNgNg");
	this.shape_17.setTransform(-7.7,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBCQgEgCAAgEQAAgDAEgCIADgBQACgBABgDIABgKIAAgHIAAgHIAAgKIgBgRQgBgFgBAAIgFgCQgFgCAAgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIAFgDIAOgEIAJgCQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQACABAAAFIAAAGIAAADIgBAXIAAABIgBAWIABAMQABAEACABIADACQAFABAAADQAAAEgFACQgEABgMAAQgNAAgFgBgAgKgtQgEgDAAgFQAAgGAEgDQAFgEAFAAQAGAAADADQAFAEAAAFQAAAFgFADQgEAEgGAAQgFAAgEgDg");
	this.shape_18.setTransform(-15.1,-1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAvIgJgBIgEABIgCABIgCgBIgCgBQgDgCgCgIQgDgHAAgGQAAgEABgCQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQAFAAADAHIAEAFQADAEAEACQAGACAEAAQAGAAAEgDQADgDAAgFQAAgIgPgHIgEgCQgPgIgFgEQgFgGAAgJQAAgMAIgIQAJgHANAAIAFAAIAHABIAEgBIADgBQAEAAAEAHQAFAIAAAHQAAAEgBACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgGgHQgDgGgDgCQgEgCgFAAQgFAAgDADQgDADAAAFQAAAEADADQADADALAGIABAAQAaANgBAOQABANgLAJQgJAIgPAAg");
	this.shape_19.setTransform(-21.7,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAvIgJgBIgEABIgDABIgBgBIgCgBQgDgCgDgIQgCgHAAgGQgBgEACgCQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAQAEAAAEAHIAEAFQADAEAFACQAFACAEAAQAGAAAEgDQADgDAAgFQAAgIgPgHIgEgCQgPgIgFgEQgFgGAAgJQAAgMAIgIQAIgHAOAAIAFAAIAHABIAEgBIADgBQAFAAAEAHQAEAIAAAHQAAAEgCACQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgBIgEgHQgEgGgDgCQgEgCgFAAQgEAAgEADQgDADAAAFQAAAEADADQAEADAKAGIABAAQAZANAAAOQAAANgKAJQgJAIgPAAg");
	this.shape_20.setTransform(-29.6,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQArIgFgFIgEACQgKAIgMAAQgNAAgIgIQgIgIAAgMQAAgPAKgHQALgIATAAQAEAAACABQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFAAQgJAAgGAFQgFAEAAAIQAAAHAFAFQAEAEAIAAQAIAAAEgEQAEgEAAgJIAAgiQAAgIgDgFQgEgEgFAAQgFAAgEACQgEACgDAEIgCACQgGAHgGAAQgEAAgCgCQgCgCAAgEQAAgJALgGQAKgGARAAQAJAAAIADQAHADAEAFQADADABAGIABATIAAAcIABAIIACADIADABQAGABAAADQAAAFgGADQgGAEgIAAQgEAAgFgFg");
	this.shape_21.setTransform(-38.2,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPBCQgEgCAAgEQAAgDAEgBIAEgDQACgBABgGIAAgSIAAgOIAAgRIAAgHQAAgXgBgGQgBgHgBgBIgGgCQgGgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIAIgEIANgDIAIgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABACAAAEIAAAHIgBBBIAAAfQABAHABACIAGADQAEABAAAEQAAADgFACQgEABgMAAQgNAAgFgBg");
	this.shape_22.setTransform(-45.9,-1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNBAQgMgFgKgIQgKgJgGgOQgGgOAAgPQAAgNAEgLQAEgLAHgJQAJgKANgGQANgHAOABIALAAIASAEIACgBIAHgBIADABIADADIAEAMQACAGAAAGQAAAEgBACQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgEAAgGgJIgGgGQgFgFgHgCQgIgEgJAAQgRAAgKANQgKAMAAAVQAAAbANARQANARATAAQAIAAAHgCQAIgDAEgFIAEgEQAFgGACAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQACADAAAEQAAAJgDAFQgCAEgEAAIgBAAIgBAAQgJAFgIACQgJADgJgBQgNAAgMgEg");
	this.shape_23.setTransform(-54.5,-1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbAtQgEgBAAgEQAAgDAEgCIACgBQADgBABgEIABgKIAAgGIAAgHIAAgFQAAgQgBgFQgBgFgCgBIgEgCQgFgCgBgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIAMgEIAIgBQAFAAABAMIAAACIAAAAQAFgHAFgEQAGgEAEAAQAHAAAEAEQADADABAHQAAAGgDAEQgDAEgFAAIgFgBIgEgDIgCgEIgCgBQgHAAgCAIQgCAJAAAbQAAAHABAEQABAEADACIADABQAGACAAADQgBAEgEABQgFACgNAAQgNAAgFgCg");
	this.shape_24.setTransform(51.4,-21.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAUAvIgBgFIAAgGIgBgBIgDACIgBACQgFAEgFACQgFADgHAAQgHAAgFgDQgHgDgEgEQgEgFgCgIQgCgHAAgTIABgGIAAgHIAAgCQAAgHgBgCQgBgCgEgCIgDgBQgGgBAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAJgEIAMgDIAKgCQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIABAGIAAAEIgBAiQAAASAEAHQAEAHAJAAQAKAAAEgJQAFgKAAgVIAAgHQAAgHgBgCQgBgCgDgCIgEgBQgFgBAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAIgEIAMgDIAKgCQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAGIAAAFIgBAlIAAAPIAAAHQABADAFACIABABQAGABAAADQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIgGADIgNAEIgJACIgEgBg");
	this.shape_25.setTransform(42.1,-21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTBBQgLgDgJgHQgNgJgHgPQgGgPgBgRQAAgeASgSQATgTAdAAQALABALADQALADAHAIQANAJAGAPQAIAPgBAQQABAMgEAKQgDAKgFAJQgKALgOAIQgOAGgQAAQgKAAgKgDgAgegqQgJAMgBAWQAAAbANASQAMASASAAQARAAAKgMQAKgMAAgWQAAgcgMgRQgNgTgTAAQgQAAgKANg");
	this.shape_26.setTransform(29.6,-23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgsAtQgFgBAAgEQAAgDAFgCIACgBQADgBABgEIABgKIgBgGIAAgHIAAgIIAAgTQgBgEgCgBIgEgCQgGgCAAgDQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAGgEIANgEIAJgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIAAAGIAAABIABAAIAAAAIABAAIACgCIACgBQAKgKAKAAQAHAAAGADQAGADAEAFQAFAFABAGQACAIAAAPIAAALIAAAGIAAAFIABAJQABADACABIACABQAFACAAADQAAAEgEABQgFABgOAAIgRgBQgEgBAAgEQAAgDAEgBIAEgCQACgCABgEIABgNQAAgdgEgHQgEgHgJAAQgEAAgFADQgEADgDAFQgCAEAAAGIgBAZIABAMQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEACQAEABAAADQAAAEgEABQgFACgMAAQgOAAgEgCg");
	this.shape_27.setTransform(11.7,-21.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQBBQgEgBAAgEQAAgDAEgCIADgBQACgBACgEIABgKIgBgGIAAgHIAAgJIAAgSQgCgEgBgBIgFgCQgFgCAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAFgEIAOgEIAJgCQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIABAGIAAAFIAAAFIAAAWIAAAAIgBAXIABAMQABADACACIADACQAFABAAADQAAAEgFABQgEACgMAAQgNAAgFgCgAgKgtQgEgDAAgFQAAgGAEgDQAFgEAFAAQAFAAAEAEQAEADABAFQAAAFgFAEQgEADgFAAQgHAAgDgDg");
	this.shape_28.setTransform(3.7,-23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGAwIgKgCIgDACIgCAAIgCAAIgCgBQgDgDgCgHQgEgIAAgHQAAgCACgDQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQAFAAAEAIIADAGQADADAEACQAFACAFAAQAGAAADgDQAEgDAAgFQAAgHgPgIIgFgDQgOgHgFgEQgFgHAAgJQAAgMAIgHQAJgIANAAIAGABIAGABIAEgCIADAAQAEAAAEAHQAFAIAAAHQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgCIgGgGQgDgFgEgCQgDgDgGAAQgEAAgDADQgDADAAAFQAAAEADADQADADALAGIABAAQAaAMgBAPQABANgKAJQgKAIgPAAg");
	this.shape_29.setTransform(-7.9,-21.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgBAbIgGgoIAAgBIAAgCQAAgFACgCQACgDADAAQAEAAACADQACACAAAFIAAACIAAABIgGAog");
	this.shape_30.setTransform(-13.4,-26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEA3QgEgBgEgDQgDgEgCgEQgBgGAAgNIAAgxIgIAAIgDAAIgBgCIAAgCQAAgEAKgIIADgDIAEgDQAKgIADAAIACABIABABIAAARIAUAAIAEABIAAAEIAAACIAAADIgEABIgSAAIgBABIgBADIAAAsQAAAMACADQACADAFAAIAIgCIAGgBIADABQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABQAAAFgIAFQgIAFgKgBQgFAAgEgBg");
	this.shape_31.setTransform(-18.1,-22);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQArIgFgFIgEACQgKAIgMAAQgNAAgIgIQgIgIAAgMQAAgPAKgHQALgIATAAQAEAAACABQABAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAAEgFAAQgJAAgGAFQgFAEAAAIQAAAHAFAFQAEAEAIAAQAIAAAEgEQAEgEAAgJIAAgiQAAgIgDgFQgEgEgFAAQgFAAgEACQgEACgDAEIgCACQgGAHgGAAQgEAAgCgCQgCgCAAgEQAAgJALgGQAKgGARAAQAJAAAIADQAHADAEAFQADADABAGIABATIAAAcIABAIIACADIADABQAGABAAADQAAAFgGADQgGAEgIAAQgEAAgFgFg");
	this.shape_32.setTransform(-26.1,-21.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANBCQgFgCAAgDQAAgEAFgBIADgCQADgBAAgEIABgOQAAgdgEgHQgDgHgKAAQgEAAgFADQgEADgCAEQgCAEgBAHIgBAZQAAAJABADQABADACABIADACQAFABAAAEQAAADgFACQgEABgMAAQgOAAgFgBQgEgCAAgEQAAgDAEgCIACgBQADgBABgEIABgOIAAgPIAAgOIAAgoQgBgKgBgCIgHgDQgGgCAAgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCAJgDIAJgCIAIgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIABAFIAAAEIgBAlIAAAEIABACIABABIADgCIACgEQAFgEAFgCQAEgDAGAAQAQAAAIALQAHAKABATIAAAJIAAAQIAAAFIABAHIACADIADABQAEACAAADQAAAEgEACQgEABgPAAQgMAAgEgBg");
	this.shape_33.setTransform(-36.7,-23.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AANAgIgTgyIgKgYQgEgIgDgDIgFgCQgFgCAAgDQAAgEAFgBQAEgBARAAQARAAAEABQAEABAAAEQAAAEgHACIgBABIgDACIgBADQAAADAFANIAPAnIAGAPQABABAAAAQABABAAAAQABABAAAAQAAAAABAAIADgDIAGgNIABgEQATgtAAgFQAAgDgBgCIgFgDIgCgBQgFgCAAgEQAAgEAEgBQADgBAPAAQAPAAAEABQADABAAAEQAAAEgFACIgEACQgGAEgMAfIgIASIgRAsIgEAIQgFAOgEAAQgFAAgNgjgAglA7IgBgCQgMgagSguIgIgWIgGgLQgCgEgDgBIgCgBQgGgCAAgEQAAgEAEgBQAEgBASAAQARAAAEABQAEABAAAEQAAAEgHACIAAAAIgEADIgBADQAAADAEALIAQAoIAHAQQAAABABABQAAAAAAABQABAAAAAAQAAAAABAAQABAAADgEIAEgLQACgGAFAAQAGAAAAAHIgCAFIgLAdIgDAHQgGAPgDAAQgEAAgDgIg");
	this.shape_34.setTransform(-51.5,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whatsinourclassicturkeydinner, new cjs.Rectangle(-62.9,-36.1,125.8,69.3), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAnIgTg+IAAAAIgSA+IgLAAIgXhNIAMAAIARA9IASg9IALAAIASA9IABAAIARg9IALAAIgXBNg");
	this.shape.setTransform(29.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAoIgIgCQgHgDgGgFQgFgGgDgIQgDgHAAgJQAAgIADgHQADgIAFgGQAGgFAHgDIAIgCIAIgBQAJAAAHADIAHAEIAGAEQAGAGADAIQADAHAAAIQAAAJgDAHQgDAIgGAGIgGAEIgHAEQgHADgJAAIgIgBgAgLgcQgGACgEAFQgDAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQADAEAGADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgFgGgCQgFgCgHgBQgGABgFACg");
	this.shape_1.setTransform(19.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAnIgog+IAAA+IgLAAIAAhNIAOAAIAoA9IAAg9IALAAIAABNg");
	this.shape_2.setTransform(10.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAnIgTgjIgMAAIAAAjIgLAAIAAhNIAZAAQAFAAAFABQAFACAEACQADADADAEQACADAAAHQAAAIgFAFIgGAEIgIACIAWAkgAgQgEIANAAIAGgBIAGgBQACgCABgDQACgCAAgDQAAgEgCgCQgBgDgCgBIgGgCIgGgBIgNAAg");
	this.shape_3.setTransform(0.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAJIgmAAIAAAYIAkAAIAAAIIgkAAIAAAbIAoAAIAAAJg");
	this.shape_4.setTransform(-6.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAaAAQAHAAAHADQAIACAGAEQAGAFAEAIIADAIIAAAIIAAAKIgDAIIgFAGIgFAGQgGAFgIACQgJACgFAAgAgWAeIANAAQAHAAAFgCQAGgCAFgEQAEgEACgFIACgHIABgGIgBgGIgCgGQgCgFgEgEQgFgEgGgBQgFgDgHAAIgNAAg");
	this.shape_5.setTransform(-14.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPAnIgTgjIgMAAIAAAjIgLAAIAAhNIAZAAQAFAAAFABQAFACAEACQADADADAEQACADAAAHQAAAIgFAFIgGAEIgIACIAWAkgAgQgEIANAAIAGgBIAGgBQACgCABgDQACgCAAgDQAAgEgCgCQgBgDgCgBIgGgCIgGgBIgNAAg");
	this.shape_6.setTransform(-21.5,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAoIgIgCQgHgDgGgFQgFgGgDgIQgDgHAAgJQAAgIADgHQADgIAFgGQAGgFAHgDIAIgCIAIgBQAJAAAHADIAHAEIAGAEQAGAGADAIQADAHAAAIQAAAJgDAHQgDAIgGAGIgGAEIgHAEQgHADgJAAIgIgBgAgLgcQgGACgEAFQgDAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQADAEAGADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgFgGgCQgFgCgHgBQgGABgFACg");
	this.shape_7.setTransform(-29.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-36.6,-8.7,73.3,17.5), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.largeturkeyclassicdinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobileturkeyclassic();
	this.instance.parent = this;
	this.instance.setTransform(-78,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.largeturkeyclassicdinner, new cjs.Rectangle(-78,-48.5,156,97), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A4rnkMAxXAAAIAAPJMgxXAAAg");
	this.shape.setTransform(0,0,1.009,1.021);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-160.5,-50.5,321,101), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AizEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAKAAAEgLQADgJAAgZIAAl7QAAgZgDgIQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QAEAQgGAJQgFAJgMAAQgOAAgHgOIgJgSQgGgPgPgFQgMgEggAAIhQAAQghAAgJAIQgIAJAAAiIAABlQAAAZAIAFQAFAEAdAAIAnAAQAaAAAIgEQAHgDACgNIABgFQADgVAUAAQANAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgNAAQgTAAgEgWIgBgGQgCgNgHgDQgIgEgbAAIgmAAQgdAAgFAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAQAGAhAAIBVgBQAvAAAPgfIAHgQQAJgQAOAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(21.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,43.9,56.7), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNBlQgFgDAAgHIAAiTQAAgLgLABIgyAAQgLgBAAgOQAAgUAKgBICfAAQAMABAAARQAAARgLABIgyAAQgLAAAAAKIAACTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape.setTransform(9.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAEQACAEAAAJQAAASgMAAIh5AAQgIAAAAAKIAAAcQAAAIAKABIBFAAQALgBAAATQAAAQgKAAIhFAAQgFAAgDADQgDADAAAFIAAAeQAAAKAKAAIB3AAQALAAAAASQAAASgLAAg");
	this.shape.setTransform(9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,18,20.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ah+EYQgKgJgIgYIhIjYQgCgFgEAAQgEAAgCAFIhNDYIgJAWQgDAGgFAFQgMAJgRAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgKQAAgWAdAAICvAAQAcAAAAAWQAAALgHAFQgHAFgRABQgOACgGAFQgGAFAAAKQAAAKADAJIBzFGQACAFAFAAQAEAAACgGIA/i2QAIgagHgWIgehbIgHgTQgEgJgHgFQgGgEgPgEQgNgDgGgFQgFgFAAgKQAAgZAeAAICmAAQAdAAAAAWQAAAUgcADQgQACgGAFQgGAFAAALQAAALAIAZIBgEsQACAGAEgBQAEAAABgGIBek6QADgMAAgIQAAgSgdgEQgbgCAAgWQAAgMAIgGQAHgFARAAIElAAQAVAAAJAFQAIAFAAAOQAAAKgGAHQgGAHgJAAIgRAAQgLAAgFALQgCAKAAAXIAABuQAAAdAFAHQAGAGAYAAIBzAAQAXAAAHgIQADgDAAgHIABgeIAAhoQAAgbgCgGQgCgFgFgDQgEgDgFAAIgQAAQgKAAgGgHQgHgHAAgKQAAgOAJgFQAIgFAWAAICaAAQAWAAAJAFQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBAEQgDAHAAAaIAAF8QAAAaADAIQABAFAFADQAEACAEAAIASAAQAJAAAGAHQAHAHAAAKQAAAOgJAFQgIAGgXAAIiaAAQgVAAgJgGQgIgFAAgOQAAgJAGgIQAHgHAJAAIAQAAQALAAAFgKQACgHAAgbIAAh8IgBgdQAAgHgDgEQgGgHgYAAIhzAAQgYAAgGAGQgFAHAAAdIAACBQAAAXACALQAEAKAMAAIARAAQAIAAAGAIQAGAHAAAKQAAANgIAGQgIAFgVAAIiaAAQgWAAgIgGQgJgFAAgOQAAgJAGgIQAHgHAJAAIARAAQAEAAAFgCQAEgDABgFQADgHAAgbIAAl8QAAgxgjAFQgMABgHAJQgIAJgGAWIiHGzQgJAfgKALQgKALgUAAQgTAAgLgJg");
	this.shape.setTransform(63.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhTEbIgTgEQgIAAgKAJQgKAHgJABQgLAAgGgHQgGgGgEgPIgVhWQgCgFAAgMQAAgKAIgJQAHgHAMAAQANAAAIAMIAMAQQAWAgAiASQAiARAkABQAogBAagUQAZgVAAgjQAAgggbgfQgZgbhAguQg/grgPgMQgSgOgTgWQggglAAg0QAAg+ArglQArglBGgBQAnABAhAHIAWAFIALACQAIAAAMgHQAJgIAJAAQASAAAGAYIAUBcQACAEAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgOQgOgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAPAAAaQAAAXAJANQANASAaAUIApAfQAzAjAWARQAXATAUATQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgxAAgngNg");
	this.shape.setTransform(19,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.1,59.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABaBkQgGgCAAgFIgOhsQgCgGgFAAQgDAAgDAEIgxA+QgEAFgFAAQgGAAgFgGIgtg8QgCgDgEAAQgFAAgBAIIgOBnQgCALgTAAQgGAAgFgDQgGgCAAgGIAViwQACgKADgDQAEgEALAAQAKAAAFAJIA4BOQAGAJADgBQAFAAAGgIIA7hQQAFgIAKAAQAHAAADADQAEACACAJIAUC0QABALgXAAQgFAAgEgDg");
	this.shape.setTransform(12.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,24.3,20.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA6BlQgFgBgEgFIhAhFQgKgJgUAAQgFAAgEAEQgDAFAAAGIAAA7QAAAIgGACQgFACgKAAQgRAAAAgMIAAi0QAAgIAFgCQAFgDAKAAQASAAAAAMIAAA3QAAANAJAAQALAAAGgCQADgCAFgEIBJhDQAMgLANALQAMAMgKAJIhAA7QgJAHAJAKIBOBVQAIAJgGAFQgEAEgOAAQgMAAgFgCg");
	this.shape.setTransform(9.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.1,20.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ai5EbQgWAAgIgFQgJgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAFgLQACgKAAgXIAAl7QAAgYgDgJQgBgFgFgEQgEgEgEAAIgRAAQgIAAgHgHQgHgHAAgJQAAgOAJgGQAJgFAVAAIFvAAQAZAAAFAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOIgIgSQgGgPgPgFQgMgEggAAIhtAAQgiAAgIAIQgJAJAAAiIAABlQAAAZAIAFQAEAEAeAAIBGAAQAaAAAIgEQAHgDACgNIABgFQADgVATAAQAOAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgSAAgEgWIgBgGQgCgNgHgDQgIgDgbAAIhFAAQgdAAgFADQgIAFAAAaIAACKQAAAbACAGQADAFAFADQAFADAFAAIAUAAQAJAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape.setTransform(22.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,45.1,56.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgSQAngUAmgNQAJgEgCgJQgCgKgNADQgVAEgZAAQgggBgYgJQgXgJgcgSQgggUgKgEQgugWg6AZQgWAJgLgLQgMgLAGgXQAXhVBDg4QBKg9BQAXQA0APAlA0QAnA2AeALQATAGAAAPQAAAOgRADQgbAFgjgQQgfgPgegbQgfgdgvgCQgrgCgcAVQgLAJADAGQAEAHALgCQAfgHAdAGQAoAHAbAgQAkAoAuAPQA4ASAugeIAZgXQAOgMALADQAQAEgCAUQgBAUgTAZQgiAsg9AeQhFAjgeAeQgwAvgTA9QgQAzAABRQAABxArBAQAqBBBKAAQBJAAArhCQAqhCAAhwQAAhfgXg4QgZg6g2gUQgbgLAFgTQAFgUAigDQA2gHA8AtQBoBMAACkQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape.setTransform(33.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.1,93.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAEAAAEgDQAFgEABgEQADgJAAgXIAAl+QAAgYgDgKQgBgEgFgEQgEgDgEAAIgRAAQgKAAgGgGQgHgHAAgKQAAgOAJgGQAJgFAWAAICdAAQAWAAAIAFQAJAGAAAOQAAAKgGAHQgHAGgJAAIgRAAQgOAAgEALQgDAGAAAcIAAFjQAAAcACAKQACAJAIAFQAGAEALACQAMABAaAAIAvAAQAwAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgEAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(20.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.4,56.7), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjmEaQgWgDgGgEQgKgFAAgNQAAgKAGgHQAFgHAKAAIARAAQAKAAAEgLQADgJAAgYIAAl5QAAgZgDgIQgEgMgKAAIgRAAQgKAAgFgGQgGgIAAgJQAAgNAKgFQAGgEAWgDQBdgNBrAAQBOAAA1ASQA0ASAnAoQAmAlATA4QAUA5AABEQAABNgZA9QgZA+gwAlQgkAegxAOQgxAOhDAAQh0AAhUgNgAgvjrQgdAEgIAMQgLAMABAhIAAFjQgBAgAVAMQANAHAnACQBNAFArhAQAsg/gBhxQAAhvgqg/Qgqg+hMAAIgcACg");
	this.shape.setTransform(26.9,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,53.8,59), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgQQAAgOgJgKQgKgKgPAAQgOAAgKAKg");
	this.shape.setTransform(4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,8.8,8.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAvBeIgggxQgGgJgJAAIguAAQgEAAgDADQgDADAAAEIAAAxQAAAGgKABIgPABQgNAAAAgMIABi5QAAgIAIAAIBrAAQAgAAAUATQAVATgBAfQABAYgPAPIgWATQgIAGAEAGIAiAzQAFAHgFAEQgFAEgOAAQgRAAgFgJgAg4g4IAAAuQAAAFAEAEQAEABAFAAIA+AAQAQAAALgHQAMgJAAgRQAAgPgMgKQgLgIgQAAIg+AAQgNAAAAAKg");
	this.shape.setTransform(9.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,18.9,20.6), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJAaIgNgVIgGAAIAAAVIgJAAIAAgzIATAAQARAAAAAQQABAMgNACIAOAVgAgKgCIAHAAQAMAAAAgHQAAgIgKAAIgJAAg");
	this.shape.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,3.9,5.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABnDxQhFg1gYhfIgBgDQgCgKgHgBQgGABgCAKIgBACQgYBfhHA2QhHA2hoAAQh/AAhLhQQhMhQAAiGQAAiGBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQADALAFgBQAHAAADgLIAAAAQAXhgBGg1QBHg3BoAAQB/AABMBPQBNBQAACFQAACIhNBQQhMBRiBAAQhmAAhHg2gACmiqQgoA/AABuQAABsAoA9QApA+BIAAQBGAAAog/QApg/ABhrQAAhrgqhAQgqg/hGAAQhGAAgpA/gAmFiqQgpA/AABuQAABsApA9QAoA+BIAAQBGAAApg/QApg/AAhrQAAhrgqhAQgpg/hGAAQhGAAgpA/g");
	this.shape.setTransform(55.8,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,111.5,59), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABCBfIgNgbQgEgGgGAAIhTAAQgJAAgEAMIgMAVQgDAIgSAAQgWAAAFgMIBZi4QAFgKAKAAQALABAFAIIBYC7QACAGgJADQgGABgIAAQgPABgDgJgAgEgdIgYAyQgCADACACQABADAEAAIAwAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgCgCgDIgYgzQgCgEgDABQgDAAgCADg");
	this.shape.setTransform(10.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,21,20.7), null);


(lib.ctarolloverclassicturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AmnBmIAAjMINOAAIAADMg");
	this.shape.setTransform(0,0,1.016,1.085);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarolloverclassicturkeydinner, new cjs.Rectangle(-43,-11.1,86.1,22.3), null);


(lib.ctarectangleclassicturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AmEBVIAAipIMIAAIAACpg");
	this.shape.setTransform(0,0,1.109,1.31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangleclassicturkey, new cjs.Rectangle(-43,-11.1,86.2,22.2), null);


(lib.classicturkeytable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobiletable();
	this.instance.parent = this;
	this.instance.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeytable, new cjs.Rectangle(-160,-50,320,100), null);


(lib.classicturkeystuffing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilestuffing();
	this.instance.parent = this;
	this.instance.setTransform(-58,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeystuffing, new cjs.Rectangle(-58,-24,116,48), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAZIgPgVQANgCAAgMQAAgQgRAAIgTAAIAAAzIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(130.4,59.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgEAAgFIAAgtQAAgKANAAIA+AAQAQAAALAJQALAJAAAPQAAAQgLAJQgLAJgQAAg");
	this.shape_2.setTransform(-11.1,85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(130.6,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-48.8,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgDAAgCgCQgBgDABgDIAZgxQACgEACAAQADAAACADIAZAzQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-44.3,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDsQgngCgNgHQgUgMgBggIAAljQAAghALgMQAIgMAdgEIAdgDQBKAAArA/QArA+AABvQgBBxgqBAQgqA8hFAAIgKgBg");
	this.shape_6.setTransform(64.5,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hFAAQhHAAgpg9g");
	this.shape_7.setTransform(6.9,30.2);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(69.3,-37.3,1,1,0,0,0,20.2,28.3);
	this.instance.alpha = 0.789;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,-54.3,1,1,0,0,0,33.5,46.6);
	this.instance_1.alpha = 0.789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98.3,30.1,1,1,0,0,0,22.6,28.3);
	this.instance_2.alpha = 0.789;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56.6,165.6);
	this.instance_3.alpha = 0.789;

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44.3,88.2,1,1,0,0,0,10.5,10.3);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.7,88.2,1,1,0,0,0,9.6,10.3);
	this.instance_5.alpha = 0.789;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-78.1,88.3,1,1,0,0,0,12.2,10.3);
	this.instance_6.alpha = 0.789;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(110.1,30.3,1,1,0,0,0,19,29.6);
	this.instance_7.alpha = 0.789;

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-20.9,30.2,1,1,0,0,0,55.8,29.5);
	this.instance_8.alpha = 0.789;

	this.instance_9 = new lib.CompoundPath_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(130.6,59.1,1,1,0,0,0,1.9,2.6);
	this.instance_9.alpha = 0.789;

	this.instance_10 = new lib.Path_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-74.6,-36.8,1,1,0,0,0,63.5,28.9);
	this.instance_10.alpha = 0.789;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-11,88.3,1,1,0,0,0,9.5,10.3);
	this.instance_11.alpha = 0.789;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(52.4,88.3,1,1,0,0,0,9,10.2);
	this.instance_12.alpha = 0.789;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(81.3,88.3,1,1,0,0,0,9.1,10.2);
	this.instance_13.alpha = 0.789;

	this.instance_14 = new lib.CompoundPath_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(130.4,59.1,1,1,0,0,0,4.4,4.4);
	this.instance_14.alpha = 0.789;

	this.instance_15 = new lib.CompoundPath_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(62.2,30.2,1,1,0,0,0,26.9,29.5);
	this.instance_15.alpha = 0.789;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(114.4,-37.3,1,1,0,0,0,21.9,28.3);
	this.instance_16.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-175,-175,350,350), null);


(lib.whatsinourclassic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whatsinourclassicturkeydinner();
	this.instance.parent = this;
	this.instance.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whatsinourclassic, new cjs.Rectangle(-62.9,-34.6,125.8,69.3), null);


// stage content:
(lib.largemobileclassicturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_105 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_126 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(21).call(this.frame_126).wait(5));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(160.7,50.2,1.558,0.155,0,0,0,0.2,1.3);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(131));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.2,50.5,1.954,0.168,0,0,0,0.4,0.3);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.2,scaleX:1.95,scaleY:0.17,x:160.3,y:50,alpha:0},9).wait(122));

	// white-logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(269.2,29.8,0.097,0.097);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.01,scaleY:0.01},0).to({regX:0.2,scaleX:0.22,scaleY:0.22,alpha:1},6).to({scaleX:0.21,scaleY:0.21},7).wait(109));

	// stuffing
	this.instance_3 = new lib.classicturkeystuffing();
	this.instance_3.parent = this;
	this.instance_3.setTransform(180,24);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({alpha:1},10).wait(80));

	// turkey
	this.instance_4 = new lib.largeturkeyclassicdinner();
	this.instance_4.parent = this;
	this.instance_4.setTransform(242,51.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({alpha:1},10).wait(70));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwBH0IAAvJMAh+AAAIAAPJg");
	mask.setTransform(114.9,50);

	// whats-in-our-classic
	this.instance_5 = new lib.whatsinourclassic();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.3,34.6);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({x:-66.7},0).to({x:80.3,alpha:1},10,cjs.Ease.get(1)).to({x:75.3},6,cjs.Ease.get(1)).wait(101));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AwBH0IAAvJMAh+AAAIAAPJg");
	mask_1.setTransform(114.9,50);

	// order-now
	this.instance_6 = new lib.ordernow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(60.3,82.1);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({x:-84.7},0).to({x:65.8,alpha:1},10,cjs.Ease.get(1)).to({x:61},6,cjs.Ease.get(1)).wait(91));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AwBH0IAAvJMAh+AAAIAAPJg");
	mask_2.setTransform(114.9,50);

	// cta-rectangle
	this.instance_7 = new lib.ctarectangleclassicturkey();
	this.instance_7.parent = this;
	this.instance_7.setTransform(61.1,82.2,1.044,1,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({x:-84.6},0).to({x:66.1,alpha:1},10,cjs.Ease.get(1)).to({x:61.1},6,cjs.Ease.get(1)).wait(91));

	// cta-rollover
	this.instance_8 = new lib.ctarolloverclassicturkeydinner();
	this.instance_8.parent = this;
	this.instance_8.setTransform(61,82.1,1.044,1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(131));

	// table
	this.instance_9 = new lib.classicturkeytable();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131));

	// green-beans
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAyIgLgBIgDABIgDABIgCgBIgCgBQgDgDgDgHQgCgIAAgHQAAgDABgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAFAAAEAHIAEAGQADAEAFACQAFACAFAAQAGAAAEgDQAEgDAAgFQAAgJgQgHIgFgDQgPgIgGgFQgFgGAAgJQAAgNAJgIQAJgIAOAAIAGABIAGABIAFgCIADgBQAFAAAEAIQAFAIAAAIQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgBgDgFQgDgGgEgCQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAEAEADQADAEALAGIABAAQAbANAAAPQAAAOgKAJQgKAJgQAAg");
	this.shape.setTransform(125,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvAwQgEgCAAgEQAAgDAEgCIADgBQACgBABgEIABgKIAAgGIAAgIIAAgJIAAgVQgBgEgCgBIgFgBQgGgDAAgDQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAIAGgEIAOgEIAKgCQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIAAAHIAAAAIABAAIABAAIAAAAIACgCIACgBQALgLALAAQAHABAGADQAHACAEAGQAFAFACAHQABAIAAAPIAAAMIAAAHIAAAFIABAKQABACADACIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgBAAgEQAAgEAFgCIAEgBQACgCABgEIABgOQAAgfgEgHQgEgIgKAAQgEAAgFADQgFAEgCAFQgCADgBAIIgBAaQAAAJABADQAAAEADABIADABQAFACAAAEQAAAEgFABQgEABgNAAQgPAAgFgBg");
	this.shape_1.setTransform(115.1,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEACQgLAHgMABQgOAAgJgJQgJgIAAgOQAAgPAMgHQALgJAUAAQAEAAADACQACABAAADQAAAFgGAAQgJAAgGAFQgGAEAAAJQAAAIAFAEQAFAEAIABQAJAAAEgFQAEgEAAgKIAAgjQAAgJgEgFQgDgFgGABQgFAAgEABIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARgBQAKABAIADQAHACAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIADABQAGABAAADQAAAFgHADQgGAFgJAAQgEgBgFgFg");
	this.shape_2.setTransform(104.3,41);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAkQgPgOAAgUQAAgWAPgPQAOgOAVAAQATAAAKAKQALALAAASQAAAGgCACQgBACgIAAIgkAAQgCAAgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgBACAAIATAAIAGgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgHgHQgGgGgIAAQgLAAgGAKQgFAKgBAOQAAAOAIAMQAIAKALAAQAHAAAGgBQAFgCAEgDIADgDQAFgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgDAEIgGAGQgIAHgIADQgIADgJAAQgUAAgNgOg");
	this.shape_3.setTransform(94,41);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBGIgSgBIgKAAIgLABQgGAAgEgCQgDgCAAgEQAAgDAFgCQAFgCABgCQABgCABgOIABglIgBgkQgBgOgBgCQgBgCgFgCQgFgCAAgDQAAgEADgCQADgBAGAAIAKAAIALAAIATgBIAPAAQAVAAALAJQALAIAAAQQAAANgIAJQgHAIgQADQAUABAKAJQAKAJAAAQQAAASgMAKQgNAKgYAAgAgOg3QgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBADgBAJIAAAbIAAAoIAAATQABAFABADQABACAFABIAMABQAQAAAIgGQAJgHAAgNQAAgNgKgHQgJgGgRAAQgJAAABgFQgBgHAJAAQAMAAAIgGQAIgGAAgMQAAgNgIgGQgHgGgPAAg");
	this.shape_4.setTransform(82.2,38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvAwQgEgCAAgEQAAgDAEgCIADgBQACgBABgEIABgKIAAgGIAAgIIAAgJIAAgVQgBgEgCgBIgFgBQgGgDAAgDQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAIAGgEIAOgEIAKgCQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIAAAHIAAAAIABAAIABAAIAAAAIACgCIACgBQALgLALAAQAHABAGADQAHACAEAGQAFAFACAHQABAIAAAPIAAAMIAAAHIAAAFIABAKQABACADACIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgBAAgEQAAgEAFgCIAEgBQACgCABgEIABgOQAAgfgEgHQgEgIgKAAQgEAAgFADQgFAEgCAFQgCADgBAIIgBAaQAAAJABADQAAAEADABIADABQAFACAAAEQAAAEgFABQgEABgNAAQgPAAgFgBg");
	this.shape_5.setTransform(64.5,40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAkQgOgOgBgUQAAgWAPgPQAOgOAVAAQATAAAKAKQAMALgBASQAAAGgCACQgBACgIAAIgjAAQgEAAgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgBAEAAIASAAIAGgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgHgHQgFgGgKAAQgKAAgGAKQgFAKAAAOQgBAOAJAMQAHAKAMAAQAHAAAEgBQAGgCAEgDIAEgDQAEgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgJAHgHADQgIADgJAAQgUAAgNgOg");
	this.shape_6.setTransform(53.7,41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAkQgOgOABgUQAAgWAOgPQAOgOAVAAQASAAAMAKQAKALABASQAAAGgCACQgCACgHAAIgkAAQgEAAgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgBAEAAIATAAIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgGgHQgHgGgJAAQgLAAgFAKQgGAKABAOQAAAOAHAMQAIAKAMAAQAHAAAFgBQAEgCAFgDIADgDQAGgEACAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgIAHgIADQgIADgJAAQgUAAgOgOg");
	this.shape_7.setTransform(43.5,41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAwQgFgCAAgEQAAgDAEgCIADgBQADgBABgEIABgKIAAgGIgBgIIAAgGIAAgXQgBgFgCgBIgFgBQgFgDAAgDQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgEQAFgEAGgBQAGABAEAEQAEAEAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGgBgDAKQgCAJAAAdIABAMQABAEACACIAEABQAGACAAAEQAAAEgFABQgGABgMAAQgPAAgEgBg");
	this.shape_8.setTransform(35,40.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzA0QgTgVgBggQABgfASgUQAUgTAeAAIAPABIARAEIAGgCIADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQACACABAEIAEANIACAKQgBADgBACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAgGgHIgBgCIgBgCQgHgIgEgDQgGgDgHgCQgGgBgHAAQgUAAgLANQgLANAAAZQAAAcAOASQAOATAVAAQAMAAAIgIQAGgHAAgNQAAgFgBgCQgCgCgEgBIgFgBQgJgCAAgEQAAgFAHgBQAFgCAZAAQAQAAAEACQAEABABAFIgBADIgGADIgCAAQgEACgCACIgCAJIAAACIgFAOIgFAIQgGAIgMAEQgLAEgPAAQgfAAgVgUg");
	this.shape_9.setTransform(23.8,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(131));

	// organic-cranberry-sauce
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAkQgNgOAAgUQAAgWAOgPQAOgOAVAAQATAAAKAKQAMALAAASQAAAGgDACQgBACgIAAIgkAAQgCAAgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgBACAAIAUAAIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgGgHQgGgGgJAAQgLAAgGAKQgGAKAAAOQABAOAHAMQAIAKALAAQAHAAAGgBQAEgCAFgDIADgDQAFgEADAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgDAEIgGAGQgJAHgHADQgIADgJAAQgUAAgOgOg");
	this.shape_10.setTransform(157.6,46.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAkQgNgOAAgUQAAgWAOgPQAPgOAUAAQAQAAALAIQALAIAAALQAAAFgDADQgCADgGAAQgEAAgEgDQgDgCgCgIQgEgHgDgDQgEgCgGAAQgLAAgFAIQgHAIAAAPQAAAQAJALQAJALANAAQAFAAAEgBIAIgEIAEgDQAFgEADAAIADABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAADgCADIgFAGQgIAHgHADQgJADgJAAQgUAAgOgOg");
	this.shape_11.setTransform(147.6,46.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAxIgBgFIAAgHIAAAAIgBAAIgDACIgCACQgEAEgGACQgFADgHAAQgHAAgHgDQgGgDgEgEQgFgGgCgIQgCgHAAgUIAAgHIAAgHIAAgCQAAgIgBgCQgBgCgDgBIgEgBQgGgCAAgEQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQACgDAHgCIANgDIAKgBQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAFIAAAFIgBAkQAAASAEAIQAEAIAKAAQAKgBAFgJQAFgKAAgXIAAgIQAAgHgBgCQgBgDgDAAIgEgBQgGgCAAgEQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAJgFIANgDIAKgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQABABAAAEIAAAGIgBAnIAAAQIABAGQAAAFAFACIACAAQAGACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgGADIgOAFIgKACQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_12.setTransform(136.8,46.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEACQgLAHgMABQgOAAgJgJQgJgIAAgOQAAgPAMgHQALgJAUAAQAEAAADACQACAAAAAFQAAAEgGAAQgJAAgGAFQgGAFAAAHQAAAJAFAEQAFAEAIABQAJgBAEgDQAEgFAAgKIAAgjQAAgJgEgFQgDgEgGAAQgFAAgEABIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARAAQAKAAAIADQAHACAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIADABQAGABAAADQAAAFgHADQgGAFgJAAQgEAAgFgGg");
	this.shape_13.setTransform(126.1,46.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXBGQgLgDgHgEQgDgCgDgIQgCgJAAgKQAAgFABgCQACgCADgBQAFAAAEAKIADADQAGALAHAFQAHAFAKAAQAKAAAHgGQAIgGAAgKQAAgNgcgNIgDgBQgYgKgHgIQgIgJAAgNQAAgSANgKQANgMAUAAIALABIANADIAEgDIADAAIAEACIAEAEIAFAMQACAHAAAFQAAADgBACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgGAAgEgGIgCgCQgFgHgHgEQgGgDgIAAQgKAAgGAFQgHAFAAAJQAAAIAGAEQAFAGAUAJIAEABQARAIAIAGQAFAFADAGQACAHAAAIQAAATgNALQgOALgYAAQgLAAgLgCg");
	this.shape_14.setTransform(115.2,44.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsBAQgFgEAAgGQAAgFAEgEQADgDAFAAIAEABIADACIADADQACAEACAAQAFAAAFgHQAFgHAAgIQAAgIgHgPIgBgCIgPghIgJgTQgCgEgFgCIgFgDIgBgDQAAgFAFgBQAFgCAOAAQAOAAAFACQAFABAAAEIgBADIgBACIgEABQgEACAAACIACAHIAIATIAHASQADAFABAAIADgFIAHgPIAHgTIACgJQAAgDgGgDQgFgDAAgDQAAgDAEgBQAFgCALAAQALAAAEACQAFABAAAEQAAAEgGABIgEABQgFADgHARIgCAHIgNAeQgQApgJAMQgKAMgOAAQgHAAgFgEg");
	this.shape_15.setTransform(99.5,48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgCABgCIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACACIAEABQAGACAAAEQAAAEgFABQgGACgMAAQgPAAgEgCg");
	this.shape_16.setTransform(91.2,46.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgCABgCIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACACIAEABQAGACAAAEQAAAEgFABQgGACgMAAQgPAAgEgCg");
	this.shape_17.setTransform(83.8,46.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfAkQgNgOAAgUQAAgWAOgPQAOgOAVAAQATAAAKAKQAMALAAASQAAAGgDACQgBACgIAAIgkAAQgDAAgBgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQABgBADAAIAUAAIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgGgHQgGgGgJAAQgLAAgGAKQgGAKAAAOQABAOAHAMQAIAKALAAQAHAAAGgBQAEgCAFgDIADgDQAFgEADAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgDAEIgGAGQgJAHgHADQgIADgJAAQgUAAgOgOg");
	this.shape_18.setTransform(74.8,46.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMBFQgJgCgFgEIgGAEIgFABIgEAAIgEgCIAAgBQAEgEACgIQABgJAAgWIAAgUIAAgWIgBgYQgBgGgCgBIgFgCQgGgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAJgFIAMgDIAJgBQAEgBABACQABABAAAEIAAAFIgBAcIAAAqIAAAaQAAAOAFAFQAFAEAKAAQALAAAIgKQAGgLAAgRQAAgQgGgIQgHgJgLAAIgEAAIgBAAQgHABAAgHQAAgFAHgDQAGgCAIAAQATAAAKAMQALANAAAUQAAAYgNAPQgOAPgXAAQgJAAgHgDg");
	this.shape_19.setTransform(63.6,44.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvAwQgEgBAAgFQAAgDAEgCIADgBQACgCABgCIABgLIAAgGIAAgIIAAgJIAAgVQgBgEgCgBIgFgBQgGgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgEIAOgEIAKgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIAAAGIAAABIABAAIABAAIAAAAIACgCIACgBQALgKALAAQAHAAAGADQAHACAEAGQAFAFACAHQABAIAAAPIAAAMIAAAHIAAAFIABAKQABACADACIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgBAAgEQAAgEAFgCIAEgBQACgCABgEIABgOQAAgfgEgHQgEgIgKAAQgEAAgFADQgFAEgCAFQgCADgBAIIgBAaQAAAJABAEQAAAAAAABQAAABABAAQAAABABAAQAAAAABABIADABQAFACAAAEQAAAEgFABQgEACgNAAQgPAAgFgCg");
	this.shape_20.setTransform(52.7,46.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEACQgLAHgMABQgOAAgJgJQgJgIAAgOQAAgPAMgHQALgJAUAAQAEAAADACQACAAAAAFQAAAEgGAAQgJAAgGAFQgGAFAAAHQAAAJAFAEQAFAEAIABQAJgBAEgDQAEgFAAgKIAAgjQAAgJgEgFQgDgEgGAAQgFAAgEABIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARAAQAKAAAIADQAHACAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIADABQAGABAAADQAAAFgHADQgGAFgJAAQgEAAgFgGg");
	this.shape_21.setTransform(41.9,46.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgCABgCIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACACIAEABQAGACAAAEQAAAEgFABQgGACgMAAQgPAAgEgCg");
	this.shape_22.setTransform(33.2,46.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBDQgNgEgKgJQgLgKgGgPQgGgOAAgQQAAgOAEgLQAEgMAIgJQAJgMAOgGQANgGAQAAIALABIATAEIACgBIAIgBIADABIACACQADAGACAHQACAHAAAGQAAAEgBACQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgHgIIgGgHQgFgGgIgCQgIgDgJAAQgSAAgLANQgLAMAAAXQAAAcAOASQAOASAUAAQAJAAAHgCQAIgDAFgFIAEgFQAEgGADAAQADAAABADQACACAAAFQAAAJgDAFQgCAFgEAAIgBAAIgCAAQgJAFgJACQgJACgKAAQgNAAgNgFg");
	this.shape_23.setTransform(22.8,44.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAkQgOgOABgUQAAgWAOgPQAPgOAUAAQARAAAKAIQAMAIAAALQAAAFgEADQgCADgGAAQgEAAgDgDQgEgCgCgIQgEgHgEgDQgDgCgGAAQgKAAgHAIQgGAIAAAPQAAAQAJALQAJALANAAQAFAAAEgBIAIgEIAEgDQAFgEADAAIADABQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAQAAADgDADIgFAGQgHAHgJADQgIADgKAAQgTAAgOgOg");
	this.shape_24.setTransform(81.2,25.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQBFQgFgBAAgFQAAgDAFgCIACgBQADgBAAgDIABgLIAAgGIAAgIIAAgKIAAgTQgBgFgCgBIgEgBQgHgCABgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAHgEIAOgFIAKgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQACACgBAFIAAAFIAAAFIgBAYIAAAAIAAAXIABAOQABADACABIAEACQAEACAAADQAAAEgEACQgFABgNABQgOgBgEgBgAgLgwQgEgDAAgFQAAgGAEgEQAFgDAGgBQAGABAEADQAEADAAAFQAAAGgEADQgFAFgGAAQgGgBgEgDg");
	this.shape_25.setTransform(73.5,23.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgvAwQgEgBAAgFQAAgDAEgCIADgBQACgBABgDIABgLIAAgGIAAgIIAAgJIAAgUQgBgFgCgBIgFgBQgGgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgEIAOgFIAKgBQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIAAAGIAAABIABAAIABAAIAAAAIACgCIACgBQALgLALABQAHAAAGACQAHAEAEAFQAFAFACAHQABAIAAAPIAAAMIAAAGIAAAGIABAKQABADADABIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgCAAgEQAAgDAFgCIAEgCQACgBABgEIABgOQAAgegEgIQgEgIgKAAQgEAAgFADQgFAEgCAEQgCAEgBAIIgBAaQAAAKABADQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIADACQAFACAAADQAAAEgFACQgEABgNABQgPgBgFgBg");
	this.shape_26.setTransform(65,25.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEABQgLAJgMAAQgOgBgJgIQgJgIAAgNQAAgQAMgIQALgIAUAAQAEAAADABQACABAAAFQAAAEgGAAQgJAAgGAFQgGAFAAAHQAAAJAFAEQAFAFAIgBQAJAAAEgDQAEgFAAgKIAAgkQAAgIgEgFQgDgEgGgBQgFAAgEACIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARAAQAKAAAIACQAHADAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIADABQAGACAAADQAAAFgHAEQgGAEgJAAQgEAAgFgGg");
	this.shape_27.setTransform(54.2,25.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjA/QgMgIAAgKQAAgFACgDQADgDAFAAQAEgBADADIADAHQACAHAGAEQAHAEALAAQAMAAAJgFQAIgFAAgHQAAgFgDgCQgDgDgGAAIgLABIgOABQgRAAgKgGQgJgGAAgHQAAgGADgEQAEgEAHgEQgGgFgDgGQgDgHAAgHQAAgQAMgKQAMgKASAAIAKABIAOACIAIgCIAKgGIAEAEIABADQAAAEgEAEQgDADgFAEIADAHIABAIQAAAQgMAKQgMAJgSAAIgKgBIgJgBIgDAEIgBADQAAAFAEACQAFACAKAAIANgBIAPgBQAOgBAHAGQAHAFAAALQAAAPgPALQgPAKgWAAQgTgBgMgHgAgPgvQgFAGAAAKQAAAJAFAGQAFAHAIAAQAHAAAFgHQAGgFAAgKQAAgKgGgGQgFgGgHgBQgIABgFAGg");
	this.shape_28.setTransform(44.2,27.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgBABgDIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgFIAJgBQAFAAABANIAAACIAAABQAFgIAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACABIAEACQAGACAAADQAAAEgFACQgGABgMABQgPgBgEgBg");
	this.shape_29.setTransform(35.3,25.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUBFQgLgDgJgHQgOgKgIgQQgHgQAAgSQAAgfATgUQAUgTAeAAQANAAALAEQAKADAJAHQANALAHAQQAHAQAAARQAAAMgDAKQgDALgGAJQgKANgPAHQgPAHgRAAQgLAAgKgDgAgfgsQgLANAAAWQAAAdANAUQANATAUAAQARAAALgOQALgNAAgWQAAgdgOgTQgNgUgTAAQgSAAgKAOg");
	this.shape_30.setTransform(23.7,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(131));

	// organic-turkey-gravy
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgsBAQgFgEAAgGQAAgFAEgEQADgDAFAAIAEABIADACIADADQACAEACAAQAFAAAFgHQAFgHAAgIQAAgIgHgPIgBgCIgPghIgJgTQgCgEgFgCIgFgDIgBgDQAAgFAFgBQAFgCAOAAQAOAAAFACQAFABAAAEIgBADIgBACIgEABQgEACAAACIACAHIAIATIAHASQADAFABAAIADgFIAHgPIAHgTIACgJQAAgDgGgDQgFgDAAgDQAAgDAEgBQAFgCALAAQALAAAEACQAFABAAAEQAAAEgGABIgEABQgFADgHARIgCAHIgNAeQgQApgJAMQgKAMgOAAQgHAAgFgEg");
	this.shape_31.setTransform(131,48.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJAoQgGgJgNgfIgGgOQgHgTgEgCIgDgBQgGgCAAgEQAAgEAFgBQAFgCAQAAQAMAAAGACQAEABAAAEIgBADIgBACIgDABQgFACAAACIACAIIAIASIAHASQACAFACAAIADgDIAEgIIALgYQADgJAAgDIAAgEIgDgCIgDgBQgEgCAAgDQAAgEAEgBQAFgCALAAQALAAAEACQAEABAAAEQAAAEgFABIgEACQgEACgIATIgCAGIgFAIQgWAygFAAQgEAAgFgKg");
	this.shape_32.setTransform(121.1,46.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEACQgLAHgMABQgOAAgJgJQgJgIAAgOQAAgPAMgHQALgJAUAAQAEAAADACQACAAAAAFQAAAEgGAAQgJAAgGAFQgGAFAAAHQAAAJAFAEQAFAEAIABQAJgBAEgDQAEgFAAgKIAAgjQAAgJgEgFQgDgEgGAAQgFAAgEABIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARAAQAKAAAIADQAHACAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIADABQAGABAAADQAAAFgHADQgGAFgJAAQgEAAgFgGg");
	this.shape_33.setTransform(111,46.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgCABgCIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACACIAEABQAGACAAAEQAAAEgFABQgGACgMAAQgPAAgEgCg");
	this.shape_34.setTransform(102.3,46.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgyA0QgVgVAAggQAAgfATgUQAUgTAeAAIAPABIASAEIAFgCIAEAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQACACACAEIADANIABAKQABADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAgGgHIgBgCIgCgCQgGgIgEgDQgGgDgGgCQgHgBgHAAQgUAAgLANQgLANAAAZQAAAcAOASQAPATAUAAQAMAAAHgIQAIgHAAgNQgBgFgBgCQgBgCgFgBIgFgBQgJgCAAgEQABgFAFgBQAGgCAZAAQAQAAAEACQAFABgBAFIgBADIgFADIgCAAQgEACgBACIgDAJIgBACIgEAOIgFAIQgHAIgLAEQgLAEgPAAQgfAAgUgUg");
	this.shape_35.setTransform(91.2,44.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgsBAQgFgEAAgGQAAgFAEgEQADgDAFAAIAEABIADACIADADQACAEACAAQAFAAAFgHQAFgHAAgIQAAgIgHgPIgBgCIgPghIgJgTQgCgEgFgCIgFgDIgBgDQAAgFAFgBQAFgCAOAAQAOAAAFACQAFABAAAEIgBADIgBACIgEABQgEACAAACIACAHIAIATIAHASQADAFABAAIADgFIAHgPIAHgTIACgJQAAgDgGgDQgFgDAAgDQAAgDAEgBQAFgCALAAQALAAAEACQAFABAAAEQAAAEgGABIgEABQgFADgHARIgCAHIgNAeQgQApgJAMQgKAMgOAAQgHAAgFgEg");
	this.shape_36.setTransform(73.3,48.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAkQgOgOgBgUQAAgWAPgPQAOgOAVAAQATAAAKAKQALALAAASQAAAGgCACQgBACgIAAIgkAAQgCAAgDgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQADgBACAAIATAAIAGgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgHgHQgGgGgIAAQgLAAgGAKQgFAKAAAOQgBAOAJAMQAHAKALAAQAIAAAEgBQAGgCAEgDIAEgDQAEgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgIAHgIADQgIADgJAAQgUAAgNgOg");
	this.shape_37.setTransform(63.3,46.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAgBGIgEAAQgFgCgJgMIgEgEIgCgDQgWgegCAAIgCABIgBAEIAAAEIABAVQABAFACACIAFADQAEACAAADQAAAEgFACQgEABgNAAQgPAAgFgBQgEgCAAgFQAAgCAEgCIADgBQACgCACgEIABgRIAAgLIAAgQIAAgKIgBgkQgBgKgBgBQgBgCgFgBIgCgBIgFgBIAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAIgEIAOgEIAKgBQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACABAAAFIgBASIgBAaIAAAXIABAFIACABIAEgCIAHgGIAJgJIACgDQAAgBgEgCQgDgCAAgEQABgDAEgDQAEgBAOAAQAKAAAEABQAEADAAADQAAAFgHACQgHABgDACQgEACgHAHIgCACIgEAEIgBABQAAACAJAMIABABIARAUIAKAKQACACAHADQAGABAAAEQAAAEgFACQgEACgKAAg");
	this.shape_38.setTransform(53.1,44.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgCABgCIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACACIAEABQAGACAAAEQAAAEgFABQgGACgMAAQgPAAgEgCg");
	this.shape_39.setTransform(43.9,46.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAVAxIgBgFIAAgHIAAAAIgBAAIgDACIgCACQgEAEgGACQgFADgHAAQgHAAgHgDQgGgDgEgEQgFgGgCgIQgCgHAAgUIAAgHIAAgHIAAgCQAAgIgBgCQgBgCgDgBIgEgBQgGgCAAgEQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQACgDAHgCIANgDIAKgBQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAFIAAAFIgBAkQAAASAEAIQAEAIAKAAQAKgBAFgJQAFgKAAgXIAAgIQAAgHgBgCQgBgDgDAAIgEgBQgGgCAAgEQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAJgFIANgDIAKgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQABABAAAEIAAAGIgBAnIAAAQIABAGQAAAFAFACIACAAQAGACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgGADIgOAFIgKACQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_40.setTransform(34.2,46.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUBFQgFgCAAgEQAAgEAFgCQAGgCAAgBQABgCABgQIABgtIgBgZIgBgQQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgFgBIgEAAQgGAAgEACQgEABgDAEIgDAGIgDAHIgDADIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgDgBgGQAAgNADgHQADgJAFABIABAAIAUABIA4AAIATgBIABAAQAFgBACAJQADAHAAANIgBAJQgBACgDAAIgEgBIgCgDIgDgHIgDgGQgCgEgEgBQgEgCgHAAIgEAAIgGABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABgBAAIgBAQIAAAZIABAtQABAQAAACQABABAGACQAFACAAAEQAAAEgGACQgFACgPAAQgOAAgGgCg");
	this.shape_41.setTransform(22.3,44.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAkQgOgOgBgUQAAgWAPgPQAOgOAWAAQAPAAAMAIQALAIgBALQAAAFgCADQgDADgFAAQgFAAgEgDQgCgCgEgIQgDgHgDgDQgEgCgGAAQgLAAgFAIQgHAIAAAPQAAAQAJALQAJALANAAQAFAAAEgBIAIgEIAEgDQAFgEADAAIADABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQABADgDADIgFAGQgIAHgHADQgJADgJAAQgUAAgNgOg");
	this.shape_42.setTransform(81.2,25.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRBFQgEgBAAgFQAAgDAEgCIADgBQADgBABgDIABgLIAAgGIAAgIIAAgKIgBgTQgBgFgCgBIgFgBQgFgCgBgEQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAIAFgEIAPgFIAJgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQACACAAAFIAAAFIgBAFIgBAYIAAAAIAAAXIABAOQAAADADABIADACQAGACAAADQAAAEgGACQgEABgNABQgOgBgFgBgAgLgwQgEgDAAgFQAAgGAFgEQAEgDAGgBQAFABAFADQAEADAAAFQAAAGgFADQgEAFgGAAQgGgBgEgDg");
	this.shape_43.setTransform(73.4,23.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgvAwQgEgBAAgFQAAgDAEgCIADgBQACgBABgDIABgLIAAgGIAAgIIAAgJIAAgUQgBgFgCgBIgFgBQgGgCAAgEQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAGgEIAOgFIAKgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIAAAGIAAABIABAAIABAAIAAAAIACgCIACgBQALgLALABQAHAAAGACQAHAEAEAFQAFAFACAHQABAIAAAPIAAAMIAAAGIAAAGIABAKQABADADABIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgCAAgEQAAgDAFgCIAEgCQACgBABgEIABgOQAAgegEgIQgEgIgKAAQgEAAgFADQgFAEgCAEQgCAEgBAIIgBAaQAAAKABADQAAACADABIADACQAFACAAADQAAAEgFACQgEABgNABQgPgBgFgBg");
	this.shape_44.setTransform(64.9,25.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEABQgLAJgMAAQgOgBgJgIQgJgIAAgNQAAgQAMgIQALgIAUAAQAEAAADABQACABAAAFQAAAEgGAAQgJAAgGAFQgGAFAAAHQAAAJAFAEQAFAFAIgBQAJAAAEgDQAEgFAAgKIAAgkQAAgIgEgFQgDgEgGgBQgFAAgEACIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARAAQAKAAAIACQAHADAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIADABQAGACAAADQAAAFgHAEQgGAEgJAAQgEAAgFgGg");
	this.shape_45.setTransform(54.2,25.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgjA/QgMgIAAgKQAAgFACgDQADgDAFAAQAEgBADADIADAHQACAHAGAEQAHAEALAAQAMAAAJgFQAIgFAAgHQAAgFgDgCQgDgDgGAAIgLABIgOABQgRAAgKgGQgJgGAAgHQAAgGADgEQAEgEAHgEQgGgFgDgGQgDgHAAgHQAAgQAMgKQAMgKASAAIAKABIAOACIAIgCIAKgGIAEAEIABADQAAAEgEAEQgDADgFAEIADAHIABAIQAAAQgMAKQgMAJgSAAIgKgBIgJgBIgDAEIgBADQAAAFAEACQAFACAKAAIANgBIAPgBQAOgBAHAGQAHAFAAALQAAAPgPALQgPAKgWAAQgTgBgMgHgAgPgvQgFAGAAAKQAAAJAFAGQAFAHAIAAQAHAAAFgHQAGgFAAgKQAAgKgGgGQgFgGgHgBQgIABgFAGg");
	this.shape_46.setTransform(44.2,27.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgBABgDIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgFIAJgBQAFAAABANIAAACIAAABQAFgIAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACABIAEACQAGACAAADQAAAEgFACQgGABgMABQgPgBgEgBg");
	this.shape_47.setTransform(35.3,25.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUBFQgLgDgJgHQgOgKgIgQQgHgQAAgSQAAgfATgUQAUgTAeAAQANAAALAEQAKADAJAHQANALAHAQQAHAQAAARQAAAMgDAKQgDALgGAJQgKANgPAHQgPAHgRAAQgLAAgKgDgAgfgsQgLANAAAWQAAAdANAUQANATAUAAQARAAALgOQALgNAAgWQAAgdgOgTQgNgUgTAAQgSAAgKAOg");
	this.shape_48.setTransform(23.7,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(131));

	// mashed-potatoes
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAyIgLgBIgDABIgDABIgCgBIgCgBQgDgDgDgHQgCgIAAgHQAAgDABgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAFAAAEAHIAEAGQADAEAFACQAFACAFAAQAGAAAEgDQAEgDAAgFQAAgJgQgHIgFgDQgPgIgGgFQgFgGAAgJQAAgNAJgIQAJgIAOAAIAGABIAGABIAFgCIADgBQAFAAAEAIQAFAIAAAIQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgBgDgFQgDgGgEgCQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAEAEADQADAEALAGIABAAQAbANAAAPQAAAOgKAJQgKAJgQAAg");
	this.shape_49.setTransform(162.2,40.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgfAkQgOgOAAgUQAAgWAPgPQAOgOAVAAQATAAAKAKQAMALAAASQgBAGgCACQgBACgIAAIgkAAQgCAAgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQACgBACAAIATAAIAGgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgHgHQgGgGgIAAQgLAAgGAKQgFAKgBAOQABAOAHAMQAIAKALAAQAHAAAGgBQAFgCAEgDIADgDQAFgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgDAEIgGAGQgJAHgHADQgIADgJAAQgUAAgOgOg");
	this.shape_50.setTransform(153,41);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgiAkQgOgOAAgWQAAgUAPgPQANgOAVAAQAVAAAOANQANAOAAAVQAAAVgOAPQgOAPgVAAQgVAAgNgOgAgSgcQgFAIgBANQAAASAIANQAJANAKAAQAKAAAGgIQAFgIABgNQgBgSgHgNQgJgNgLAAQgJAAgGAIg");
	this.shape_51.setTransform(142.5,41);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEA6QgFgBgEgEQgDgDgBgFQgCgFAAgPIAAgzIgJAAIgCgBIgBgCIAAgCQAAgDAKgJIAEgEIAEgDQAKgIADAAIACAAIABACIAAASIAWAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIABAEIAAACIgBAEIgDABIgUAAIgBABIgBADIAAAuQAAANACADQACADAGAAIAIgCIAGgBIAEABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgIAFQgIAEgKAAQgGABgEgCg");
	this.shape_52.setTransform(133.7,40.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEACQgLAHgMABQgOAAgJgJQgJgIAAgOQAAgPAMgHQALgJAUAAQAEAAADACQACABAAADQAAAFgGAAQgJAAgGAFQgGAEAAAJQAAAIAFAEQAFAEAIABQAJAAAEgFQAEgEAAgKIAAgjQAAgJgEgFQgDgFgGABQgFAAgEABIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARgBQAKABAIADQAHACAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIADABQAGABAAADQAAAFgHADQgGAFgJAAQgEgBgFgFg");
	this.shape_53.setTransform(125.2,41);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEA6QgFgBgEgEQgDgDgBgFQgCgFAAgPIAAgzIgJAAIgCgBIgBgCIAAgCQAAgDAKgJIAEgEIAEgDQAKgIADAAIACAAIABACIAAASIAWAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIABAEIAAACIgBAEIgDABIgUAAIgBABIgBADIAAAuQAAANACADQACADAGAAIAIgCIAGgBIAEABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgIAFQgIAEgKAAQgGABgEgCg");
	this.shape_54.setTransform(116.5,40.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgiAkQgOgOAAgWQAAgUAPgPQANgOAWAAQAUAAAOANQANAOAAAVQAAAVgPAPQgNAPgVAAQgVAAgNgOgAgSgcQgFAIAAANQgBASAJANQAHANALAAQAKAAAGgIQAFgIAAgNQAAgSgIgNQgIgNgLAAQgJAAgGAIg");
	this.shape_55.setTransform(107.7,41);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgxBFQgGgCAAgEQAAgEAGgDIAEgCQADgBAAgMIABgpIAAgkQgBgOgCgCQgBgCgFgCQgFgCAAgDQAAgEADgCQADgBAGAAIAKAAIALAAIAUgBIAOAAQAWAAALAJQALAJAAATQAAAUgOALQgNAJgaAAQgJAAAAgGQAAgGAIAAQAMAAAIgHQAHgGAAgOQAAgOgHgGQgIgGgPAAIgKABQgDABgBADIgBAIIAAAVIAAApIAAAcQABAHACABIAEACQAGADAAAEQAAAEgFACQgGABgPAAQgPAAgFgBg");
	this.shape_56.setTransform(96.7,38.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AATBGIgBgFIAAgFIAAgCIgBAAIgDACIgEADQgGAEgFACQgFACgGABQgSAAgLgOQgMgMAAgWQAAgXANgOQANgPAVAAIAGACQADAAACACIABAFQAAAFgGAAIgCAAIgDAAQgKgBgHAKQgGAHAAAQQAAAPAHALQAHAKALAAQAJAAAGgGQAFgFAAgLIAAgbIAAgrQAAgHgBgDQgBgCgEgBIgDgBQgGgCAAgDQAAgDADgBIAJgFIALgDIAJgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQABABAAAFIAAAEIgBA8IABAoQAAAJACABIAHADQAFAAAAAEQAAAEgOAFIgKACIgHACQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_57.setTransform(79.9,38.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgfAkQgOgOABgUQAAgWAOgPQAOgOAVAAQASAAAMAKQAKALABASQAAAGgCACQgCACgHAAIgkAAQgEAAgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgBAEAAIATAAIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgGgHQgHgGgJAAQgLAAgFAKQgGAKABAOQAAAOAHAMQAIAKAMAAQAHAAAFgBQAEgCAFgDIADgDQAGgEACAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgIAHgIADQgIADgJAAQgUAAgOgOg");
	this.shape_58.setTransform(68.7,41);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAOBGQgFgCAAgEQAAgEAFgBIADgCQADgBABgEIAAgPQAAgfgEgGQgDgJgLAAQgEAAgEADQgFAEgDAEQgCAEgBAIIgBAaIABANQABADACABIAEACQAFABAAAEQAAAEgFACQgFABgMAAQgPAAgFgBQgFgCAAgFQAAgCAFgCIACgCQADgBABgEIABgPIAAgQIAAgOIAAgrQgBgKgBgDIgHgDQgGgBAAgDQAAgEACgBQADgCAIgDIAKgDIAJgBQADAAACACIABAGIAAAEIgBAnIAAAEIAAADIACABIACgDIADgEQAFgEAFgDQAFgCAGAAQARAAAIAKQAIALAAAWIAAAJIAAARIAAAFIABAHIADADIADACQAEACAAACQAAAFgEACQgFABgPAAQgNAAgEgBg");
	this.shape_59.setTransform(57.7,38.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGAyIgLgBIgDABIgDABIgCgBIgCgBQgDgDgDgHQgCgIAAgHQAAgDABgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAFAAAEAHIAEAGQADAEAFACQAFACAFAAQAGAAAEgDQAEgDAAgFQAAgJgQgHIgFgDQgPgIgGgFQgFgGAAgJQAAgNAJgIQAJgIAOAAIAGABIAGABIAFgCIADgBQAFAAAEAIQAFAIAAAIQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgBgDgFQgDgGgEgCQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAEAEADQADAEALAGIABAAQAbANAAAPQAAAOgKAJQgKAJgQAAg");
	this.shape_60.setTransform(47.9,40.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEACQgLAHgMABQgOAAgJgJQgJgIAAgOQAAgPAMgHQALgJAUAAQAEAAADACQACABAAADQAAAFgGAAQgJAAgGAFQgGAEAAAJQAAAIAFAEQAFAEAIABQAJAAAEgFQAEgEAAgKIAAgjQAAgJgEgFQgDgFgGABQgFAAgEABIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARgBQAKABAIADQAHACAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIADABQAGABAAADQAAAFgHADQgGAFgJAAQgEgBgFgFg");
	this.shape_61.setTransform(38.7,41);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAkBEQgFgCAAgEQAAgEAGgCIAEgCQACgCABgEIAAgRIAAgFIAAgoIAAgZIgNAgQgcBJgFAAQgDAAgGgKIgUgpIgVgwIAAAlIAAAaIAAASQABAFABABIAFACQAFACAAAEQAAAEgEACQgFACgNAAQgKAAgFgCQgEgCAAgEQgBgDAGgDQAFgCAAgCQACgFABgZQACgYAAgeIAAgDQAAgLgBgDQgBgDgCgCIgEgCQgHgCAAgEQAAgEAEgBQAFgCAOAAIAOABIADAAQACACAHARIAGAOIACAHQAYA5ABAAQACAAAJgVIAVg2IACgGQACgLADgDIAGgCIAOgBQAMAAAEACQAFABAAAEQAAAEgGACIgCABQgDACgBAEQgBADAAAPIABA2IACAdQABACADABIADABIADADIABADQAAAEgFACQgFACgQAAQgOAAgGgCg");
	this.shape_62.setTransform(24.7,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).wait(131));

	// herb-stuffing
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgjA/QgMgHAAgLQAAgFACgDQADgDAFAAQAEAAADACIADAHQACAHAGAEQAHAEALAAQAMAAAJgFQAIgFAAgHQAAgFgDgCQgDgDgGAAIgLABIgOABQgRAAgKgGQgJgGAAgIQAAgFADgEQAEgEAHgEQgGgFgDgGQgDgGAAgIQAAgPAMgLQAMgLASAAIAKACIAOACIAIgBIAKgHIAEADIABAEQAAAEgEAEQgDADgFADIADAIIABAIQAAAQgMAKQgMAKgSgBIgKAAIgJgCIgDADIgBAEQAAAEAEACQAFACAKABIANgCIAPgBQAOAAAHAGQAHAGAAAKQAAAPgPALQgPAJgWABQgTAAgMgIgAgPgvQgFAGAAAJQAAALAFAGQAFAFAIABQAHgBAFgFQAGgHAAgJQAAgKgGgGQgFgGgHAAQgIAAgFAGg");
	this.shape_63.setTransform(127.6,42.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgvAwQgEgCAAgEQAAgDAEgCIADgBQACgBABgEIABgKIAAgGIAAgIIAAgJIAAgVQgBgEgCgBIgFgBQgGgDAAgDQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAIAGgEIAOgEIAKgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIAAAHIAAAAIABAAIABAAIAAAAIACgCIACgBQALgLALAAQAHABAGADQAHACAEAGQAFAFACAHQABAIAAAPIAAAMIAAAHIAAAFIABAKQABACADACIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgBAAgEQAAgEAFgCIAEgBQACgCABgEIABgOQAAgfgEgHQgEgIgKAAQgEAAgFADQgFAEgCAFQgCADgBAIIgBAaQAAAJABADQAAAEADABIADABQAFACAAAEQAAAEgFABQgEABgNAAQgPAAgFgBg");
	this.shape_64.setTransform(116.4,40.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgRBFQgEgCAAgEQAAgDAEgCIADgBQACgBABgEIABgKIAAgGIAAgIIAAgKIAAgUQgBgEgCgBIgFgBQgFgDAAgDQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAIAGgEIAOgEIAJgDQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQABABABAEIAAAGIgBAEIAAAYIAAABIgBAYIABAMQAAAFADABIAEABQAEACAAAEQAAAEgEABQgFABgNAAQgNAAgGgBgAgLgwQgEgEAAgFQAAgFAEgEQAFgEAGABQAGgBAEAEQAEAEAAAEQAAAGgFADQgEAEgGABQgGAAgEgEg");
	this.shape_65.setTransform(107.9,38.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgaBGQgFgCAAgEQAAgDAEgCIADgBQACgBABgDIABgLIAAgKIAAguIgLAAIgDgBIgBgDIAAgDIABgDIADgBIALAAIgBgIIgBgHQAAgOAJgIQAJgJAPAAQALAAAHAFQAHAFAAAIQAAAFgDACQgCACgFAAQgDAAgCgBIgFgEIgBgEQgEgHgGAAQgDAAgCADQgCACAAAEIACALQACAIAAAHIAOAAIADABIABADIAAADIgBADIgDABIgOAAIAAAxIABAQQABAEACABIADACQAGACAAADQAAAEgFACQgEABgOAAQgOAAgEgBg");
	this.shape_66.setTransform(103.3,38.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgaBGQgFgCAAgEQAAgDAEgCIADgBQACgBABgDIABgLIAAgKIAAguIgLAAIgDgBIgBgDIAAgDIABgDIADgBIALAAIgBgIIgBgHQAAgOAJgIQAJgJAPAAQALAAAHAFQAHAFAAAIQAAAFgDACQgCACgFAAQgDAAgCgBIgFgEIgBgEQgEgHgGAAQgDAAgCADQgCACAAAEIACALQACAIAAAHIAOAAIADABIABADIAAADIgBADIgDABIgOAAIAAAxIABAQQABAEACABIADACQAGACAAADQAAAEgFACQgEABgOAAQgOAAgEgBg");
	this.shape_67.setTransform(97.9,38.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAVAxIgBgEIAAgIIAAAAIgBAAIgDACIgCACQgEAEgGACQgFADgHAAQgHAAgHgDQgGgCgEgGQgFgFgCgIQgCgIAAgTIAAgHIAAgHIAAgCQAAgIgBgCQgBgCgDgBIgEgCQgGgBAAgDQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCAHgBIANgEIAKgCQABAAABABQAAAAABAAQAAAAABABQAAAAAAABIABAFIAAAFIgBAkQAAASAEAIQAEAIAKAAQAKgBAFgJQAFgKAAgXIAAgIQAAgHgBgCQgBgCgDgBIgEgCQgGgBAAgDQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIAJgDIANgEIAKgCQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABABAAAEIAAAGIgBAnIAAAQIABAHQAAADAFADIACAAQAGACAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgGAEIgOADQgGADgEAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_68.setTransform(88.5,41);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEA6QgFgBgEgEQgDgDgBgFQgCgFAAgPIAAgzIgJAAIgCgBIgBgCIAAgCQAAgDAKgJIAEgEIAEgDQAKgIADAAIACAAIABACIAAASIAWAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIABAEIAAACIgBAEIgDABIgUAAIgBABIgBADIAAAuQAAANACADQACADAGAAIAIgCIAGgBIAEABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgIAFQgIAEgKAAQgGABgEgCg");
	this.shape_69.setTransform(79.4,40.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgXBGQgLgCgHgFQgDgCgDgIQgCgJAAgKQAAgEABgDQACgDADABQAFgBAEAKIADADQAGALAHAFQAHAFAKAAQAKAAAHgGQAIgHAAgJQAAgNgcgNIgDgBQgYgKgHgIQgIgJAAgNQAAgRANgMQANgLAUAAIALABIANADIAEgDIADAAIAEABIAEAFIAFAMQACAHAAAFQAAADgBACQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgGAAgEgGIgCgCQgFgIgHgDQgGgDgIAAQgKAAgGAFQgHAFAAAJQAAAHAGAFQAFAGAUAJIAEABQARAIAIAGQAFAFADAGQACAHAAAIQAAATgNALQgOALgYAAQgLAAgLgCg");
	this.shape_70.setTransform(70.3,38.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNBFQgHgCgGgEIgGAEIgGABIgDAAIgDgBIAAgCQADgEABgJQACgIAAgWIAAgUIAAgWIgBgYQAAgGgDgBIgFgCQgGgCAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAJgFIALgDIAKgBQAEAAABABQABABABAEIgBAFIAAAcIAAAqIAAAaQAAANAEAGQAEAEAKAAQANAAAGgKQAHgLAAgRQAAgQgHgIQgGgJgMAAIgCAAIgCAAQgHABAAgHQAAgFAHgDQAGgDAIAAQASAAALANQALANAAAUQAAAYgOAPQgNAPgXAAQgIgBgJgCg");
	this.shape_71.setTransform(53.3,38.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgcAwQgFgCAAgEQAAgDAEgCIADgBQADgBABgEIABgKIAAgGIgBgIIAAgGIAAgXQgBgFgCgBIgFgBQgFgDAAgDQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgEQAFgEAGgBQAGABAEAEQAEAEAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGgBgDAKQgCAJAAAdIABAMQABAEACACIAEABQAGACAAAEQAAAEgFABQgGABgMAAQgPAAgEgBg");
	this.shape_72.setTransform(44.7,40.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgeAkQgOgOgBgUQAAgWAPgPQAOgOAVAAQATAAAKAKQAMALgBASQAAAGgCACQgBACgIAAIgjAAQgEAAgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgBAEAAIASAAIAGgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgHgHQgFgGgKAAQgKAAgGAKQgFAKAAAOQgBAOAJAMQAHAKAMAAQAHAAAEgBQAGgCAEgDIAEgDQAEgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgJAHgHADQgIADgJAAQgUAAgNgOg");
	this.shape_73.setTransform(35.7,41);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAWBEQgGgCAAgEQAAgEAGgCIAEgCQACgBABgHIABgWIgBgOIAAgEQgCgBgEgBIgXgBIgUABQgFAAgCACIgBADIgBAHIAAAIIABAWQABAHABABIAFACQAGACAAAEQAAAEgGACQgFACgPAAQgPAAgGgCQgFgCAAgEQAAgEAGgCIAEgCQADgCAAgMIABgoIgBgkQAAgPgCgCQgBgBgFgCQgFgCAAgEQAAgEAEgBQAFgCARAAQARAAAEACQAFABAAAEQAAAEgGACIgFACQgBACgBAGIgBAcQABAEADABQADACAPAAIAHAAIAVgBQAFgBACgBIABgCIABgEIAAgEIgBgYQgBgFgCgBIgEgCQgGgCAAgEQAAgEAFgBQAEgCARAAQARAAAEACQAFABAAAEQAAAEgGACIgEACQgCACgBANIgBAnIAAAkQACAPABACQAAABAGACQAFACAAAEQAAAEgGACQgFACgPAAQgQAAgEgCg");
	this.shape_74.setTransform(23.3,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]}).wait(131));

	// classic-turkey-dinner
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgKAuQgEgEAAgHQAAgGAEgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgGAAQgGAAgEgEgAgKgYQgEgEAAgGQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_75.setTransform(147,37.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgBABgDIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgIAGgEQAFgDAGAAQAGAAAEADQAEAEAAAHQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACABIAEACQAGACAAAEQAAADgFACQgGACgMAAQgPAAgEgCg");
	this.shape_76.setTransform(140.8,37.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgfAkQgOgOABgUQAAgWAOgPQAOgOAVAAQASAAAMAKQALALgBASQAAAGgBACQgCACgHAAIgkAAQgEAAgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQACgBAEAAIATAAIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgGgHQgHgGgJAAQgLAAgFAKQgGAKABAOQAAAOAIAMQAHAKAMAAQAGAAAFgBQAFgCAFgDIAEgDQAFgEACAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgJAHgHADQgIADgJAAQgUAAgOgOg");
	this.shape_77.setTransform(131.8,37.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgvAwQgEgBAAgFQAAgDAEgCIADgBQACgBABgDIABgLIAAgGIAAgIIAAgJIAAgUQgBgFgCgBIgFgBQgGgCAAgEQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAGgEIAOgEIAKgCQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIAAAGIAAABIABAAIABAAIAAAAIACgCIACgBQALgKALAAQAHAAAGACQAHAEAEAFQAFAFACAHQABAIAAAPIAAAMIAAAHIAAAFIABAKQABACADACIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgCAAgDQAAgEAFgCIAEgCQACgBABgEIABgOQAAgegEgIQgEgIgKAAQgEAAgFADQgFAEgCAEQgCAEgBAIIgBAaQAAAJABAEQAAADADAAIADACQAFACAAAEQAAADgFACQgEACgNAAQgPAAgFgCg");
	this.shape_78.setTransform(120.9,37.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgvAwQgEgBAAgFQAAgDAEgCIADgBQACgBABgDIABgLIAAgGIAAgIIAAgJIAAgUQgBgFgCgBIgFgBQgGgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAGgEIAOgEIAKgCQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIAAAGIAAABIABAAIABAAIAAAAIACgCIACgBQALgKALAAQAHAAAGACQAHAEAEAFQAFAFACAHQABAIAAAPIAAAMIAAAHIAAAFIABAKQABACADACIACABQAFACAAADQAAAEgFACQgEABgPAAIgSgBQgFgCAAgDQAAgEAFgCIAEgCQACgBABgEIABgOQAAgegEgIQgEgIgKAAQgEAAgFADQgFAEgCAEQgCAEgBAIIgBAaQAAAJABAEQAAAAAAABQAAABABAAQAAAAABABQAAAAABAAIADACQAFACAAAEQAAADgFACQgEACgNAAQgPAAgFgCg");
	this.shape_79.setTransform(109.4,37.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgRBFQgEgBAAgFQAAgDAEgCIADgBQACgBACgDIABgLIAAgGIAAgIIAAgKIgBgTQgBgFgCgBIgFgBQgFgCgBgEQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAIAFgEIAPgEIAJgCQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABQACABAAAFIAAAFIgBAFIAAAXIAAABIgBAXIABAOQAAADADABIADACQAGACAAAEQAAADgGACQgEACgNAAQgNAAgGgCgAgLgwQgEgDAAgGQAAgFAFgEQAEgDAGgBQAFABAFADQAEADAAAFQAAAGgFADQgEAFgGAAQgGgBgEgDg");
	this.shape_80.setTransform(101,35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgUBGIgMAAIgJAAIgIAAQgLAAgEgCQgDgCgBgDQAAgEAGgCQAEgCABgBQACgCABgPIABglIgBgjQgBgPgCgCQgBgCgEgBQgGgDAAgDQAAgEAFgCQADgBAMgBIAIABIAKAAIANgBIALAAQAjAAAUATQATASAAAiQABAhgVASQgTARgmAAgAgVg2QgEABgBADIgCAQIAAAdIAAAkIACASQABADAHACQAGACAIAAQAWAAALgNQALgOAAgbQAAgbgMgQQgNgOgXAAQgIAAgFABg");
	this.shape_81.setTransform(90.8,35);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgsBAQgFgEAAgGQAAgFAEgEQADgDAFAAIAEABIADACIADADQACAEACAAQAFAAAFgHQAFgHAAgIQAAgIgHgPIgBgCIgPghIgJgTQgCgEgFgCIgFgDIgBgDQAAgFAFgBQAFgCAOAAQAOAAAFACQAFABAAAEIgBADIgBACIgEABQgEACAAACIACAHIAIATIAHASQADAFABAAIADgFIAHgPIAHgTIACgJQAAgDgGgDQgFgDAAgDQAAgDAEgBQAFgCALAAQALAAAEACQAFABAAAEQAAAEgGABIgEABQgFADgHARIgCAHIgNAeQgQApgJAMQgKAMgOAAQgHAAgFgEg");
	this.shape_82.setTransform(73.3,39.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgfAkQgOgOABgUQAAgWAOgPQAOgOAVAAQASAAAMAKQAKALABASQAAAGgCACQgCACgHAAIgkAAQgEAAgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQACgBAEAAIATAAIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgGgHQgHgGgJAAQgLAAgFAKQgGAKABAOQAAAOAHAMQAIAKAMAAQAHAAAFgBQAEgCAFgDIADgDQAGgEACAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgIAHgIADQgIADgJAAQgUAAgOgOg");
	this.shape_83.setTransform(63.3,37.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAgBGIgFAAQgEgCgJgLIgEgGIgCgCQgXgegCAAIgBABIAAAEIAAAEIAAAVQABAFABACIAGADQAEACAAADQAAAEgEABQgGACgMAAQgPAAgEgCQgFgBAAgFQAAgCAFgCIACgBQADgCABgFIABgQIgBgLIAAgQIAAgKIAAgkQAAgKgCgBQgBgBgEgCIgEgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAJgEIAMgDIAKgCQABAAABAAQABAAAAABQABAAAAAAQAAAAABABQABABAAAFIgBASIAAAaIAAAXIAAAFIABABIAFgCIAGgGIAJgIIADgFQAAAAAAAAQgBAAAAgBQgBAAAAgBQgBAAgBAAQgCgDAAgDQAAgDADgCQAGgCAOAAQAIAAAFACQAEABAAAEQAAAFgHACQgHABgDACQgDACgJAHIgBACIgDADIgBACQgBACAJAMIABABIARAUIAKAKQACADAHACQAGABAAAEQAAAEgEACQgFACgLAAg");
	this.shape_84.setTransform(53.2,34.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgBABgDIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgIAGgEQAFgDAGAAQAGAAAEADQAEAEAAAHQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACABIAEACQAGACAAAEQAAADgFACQgGACgMAAQgPAAgEgCg");
	this.shape_85.setTransform(44,37.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAVAxIgBgFIAAgHIAAAAIgBAAIgDACIgCACQgEAEgGADQgFACgHAAQgHAAgHgCQgGgEgEgEQgFgGgCgIQgCgHAAgVIAAgGIAAgHIAAgCQAAgIgBgCQgBgCgDgBIgEgBQgGgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgCAHgDIANgDIAKgBQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAGIAAADIgBAkQAAATAEAIQAEAHAKABQAKAAAFgKQAFgKAAgXIAAgIQAAgHgBgCQgBgDgDAAIgEgBQgGgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAJgFIANgDIAKgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABABAAAFIAAAFIgBAnIAAAQIABAGQAAAEAFADIACAAQAGACAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgGADIgOAFIgKACQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_86.setTransform(34.2,37.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgUBFQgFgCAAgEQAAgEAFgCQAFgCACgBQABgCABgQIAAgtIAAgZIgBgQQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgGgBIgEAAQgGAAgFACQgDABgDAEIgDAGIgDAHIgCADIgEABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAgBQgBgCAAgGQAAgNACgHQADgJAFAAIABABIATABIA4AAIAUgBIABgBQAFAAADAJQADAHAAANIgBAIQgCADgDAAIgDgBIgDgDIgDgHIgDgGQgCgEgFgBQgDgCgHAAIgEAAIgFABQgBAAAAAAQAAABgBAAQAAAAAAABQAAABAAAAIgBAQIAAAZIAAAtQAAAQACACQABABAFACQAFACAAAEQAAAEgFACQgGACgPAAQgOAAgGgCg");
	this.shape_87.setTransform(22.3,35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgdAkQgOgOgBgUQAAgWAPgPQAOgOAWAAQAPAAAMAIQALAIgBALQAAAFgCADQgDADgFAAQgFAAgEgDQgCgCgEgIQgDgHgDgDQgEgCgGAAQgLAAgFAIQgHAIAAAPQAAAQAJALQAJALANAAQAFAAAEgBIAIgEIAEgDQAFgEADAAIADABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQABADgDADIgFAGQgIAHgHADQgJADgJAAQgUAAgNgOg");
	this.shape_88.setTransform(72.2,16.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgRBFQgEgCAAgEQAAgDAEgCIADgBQADgBABgDIABgLIAAgHIAAgIIAAgJIgBgTQgBgFgCgBIgFgBQgFgDgBgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBIAFgDIAPgFIAJgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQACACAAAFIAAAFIgBAFIgBAYIAAAAIAAAXIABAOQAAADADABIADACQAGACAAADQAAAEgGACQgEABgNABQgOgBgFgBgAgLgwQgEgDAAgFQAAgGAFgEQAEgDAGgBQAFABAFADQAEADAAAGQAAAFgFAEQgEAEgGgBQgGAAgEgDg");
	this.shape_89.setTransform(64.4,14);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGAyIgLgBIgDABIgDABIgCgBIgCgBQgDgDgDgHQgCgIAAgHQAAgDABgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAAEAHIAEAGQADAEAFACQAFACAFAAQAGAAAEgDQAEgDAAgFQAAgJgQgHIgFgDQgPgIgGgFQgFgGAAgJQAAgNAJgIQAJgIAOAAIAGABIAGABIAFgCIADgBQAFAAAEAIQAFAIAAAIQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgDgBgDgFQgDgGgEgCQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAEAEADQADAEALAGIABAAQAbANAAAPQAAAOgKAJQgKAJgQAAg");
	this.shape_90.setTransform(57.5,16.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgGAyIgLgBIgDABIgDABIgCgBIgCgBQgDgDgDgHQgCgIAAgHQAAgDABgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAAEAHIAEAGQADAEAFACQAFACAFAAQAGAAAEgDQAEgDAAgFQAAgJgQgHIgFgDQgPgIgGgFQgFgGAAgJQAAgNAJgIQAJgIAOAAIAGABIAGABIAFgCIADgBQAFAAAEAIQAFAIAAAIQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgDgBgDgFQgDgGgEgCQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAEAEADQADAEALAGIABAAQAbANAAAPQAAAOgKAJQgKAJgQAAg");
	this.shape_91.setTransform(49.1,16.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AARAuIgFgFIgEABQgLAJgMgBQgOAAgJgIQgJgIAAgNQAAgQAMgIQALgIAUAAQAEAAADABQACACAAAEQAAAEgGAAQgJAAgGAFQgGAFAAAHQAAAJAFAEQAFAFAIgBQAJAAAEgDQAEgEAAgLIAAgkQAAgIgEgFQgDgEgGgBQgFAAgEACIgIAHIgCACQgGAIgGAAQgEAAgCgDQgDgCAAgEQAAgJALgGQAMgHARABQAKAAAIACQAHADAFAFQADAEABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIADABQAGACAAADQAAAFgHAEQgGADgJAAQgEAAgFgEg");
	this.shape_92.setTransform(40,16.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgPBFQgFgBAAgEQAAgEAEgBIAFgDQACgCAAgFIABgTIgBgQIAAgRIAAgIIAAgeQgBgIgCgBIgGgCQgGgBAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAJgEIAMgDIAJgCQABAAABAAQABAAAAAAQABABAAAAQAAAAABABQABABAAAFIAAAHIgBBFIAAAhQAAAHACACIAGACQAEADAAADQAAAEgEABQgGACgMAAQgOAAgEgCg");
	this.shape_93.setTransform(31.9,14);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgOBDQgNgEgKgJQgLgKgGgPQgGgOAAgQQAAgOAEgLQAEgMAIgJQAJgMAOgGQANgGAQAAIALABIATAEIACgBIAIgBIADABIACACQADAGACAHQACAHAAAGQAAAEgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgEAAgHgIIgGgHQgFgGgIgCQgIgDgJAAQgSAAgLANQgLAMAAAXQAAAcAOASQAOASAUAAQAJAAAHgCQAIgDAFgFIAEgFQAEgGADAAQADAAABADQACACAAAFQAAAJgDAFQgCAFgEAAIgBAAIgCAAQgJAFgJACQgJACgKAAQgNAAgNgFg");
	this.shape_94.setTransform(22.8,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]}).wait(131));

	// roasted-turkey
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgdBVIgBgDQAAgCAGgEQAHgEADgEQALgMAEgRQAGgRAAgWQAAgVgGgRQgEgRgKgLIgKgJQgHgEAAgCIABgDIAEgBQAFAAAIAFQAIAFAGAHQAOAOAHASQAIASAAASQAAATgIASQgHASgOAOQgGAIgIAEQgIAFgFAAIgEgBg");
	this.shape_95.setTransform(137.9,45.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgNBFQgHgCgGgEIgGAEIgGABIgDAAIgDgCIAAgBQADgEABgIQACgJAAgWIAAgUIAAgWIgBgYQAAgGgDgBIgFgCQgGgCAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAJgFIALgDIAKgBQAEgBABACQABABAAAEIAAAFIAAAcIAAAqIAAAaQAAAOAEAFQAEAEAKAAQANAAAGgKQAHgLAAgRQAAgQgHgIQgGgJgMAAIgCAAIgCAAQgHABAAgHQAAgFAHgDQAGgCAIAAQASAAALAMQALANAAAUQAAAYgOAPQgNAPgXAAQgIAAgJgDg");
	this.shape_96.setTransform(128.9,44.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgQBGQgEgCAAgFQAAgDAEgBIAFgDQABgBABgGIABgUIAAgOIAAgSIAAgHIgBggQgBgGgCgCIgGgCQgGgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAIgEIAOgEIAJgBQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACABAAAFIgBAIIgBBEIABAhQAAAHADACIAFADQAEACAAADQAAAEgFACQgEABgNAAQgOAAgFgBg");
	this.shape_97.setTransform(120.9,44.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgSAKIgFgBIgBgEIABgEIACgFIADgDIAFgCIAFAAIAIABIAQgBIADAAIAEABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDAFQgDAFgFAAIgEAAIgGAAIgUAAIgCAAg");
	this.shape_98.setTransform(115.1,46.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AghAtQgOgSAAgcQAAgbANgRQANgRAVAAQAUAAAOASQAOARAAAbQAAAcgNARQgNASgVgBQgVAAgNgRgAgSgoQgEAJAAAPQAAAdAIASQAHATAMAAQAJgBAFgHQAFgJAAgPQAAgcgJgTQgIgUgLAAQgJAAgFAJg");
	this.shape_99.setTransform(106.5,45.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAAA9QgVABgFgBQgFgCAAgEQAAgFAJgBQAFgBACgBIADgCIABgEIABgOIAAgsIAAgHIAAgFQAAgIgBgBQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgEAAIgFAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgDADgCIAKgFQAJgDAIgBIALgDQAEAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAADgDADIgCABIgBAJIgBAlIABAaIAAARIABAEIADACIAIACQAIABAAAEQAAAFgFABQgFABgTAAg");
	this.shape_100.setTransform(95.8,45.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AANBRQgIgEgGgIQgOgOgHgSQgIgSAAgTQAAgSAIgSQAHgSAOgOQAGgHAIgFQAIgFAFAAIAEABIABADQAAACgGAEIgKAJQgLALgEARQgGARAAAWQAAAVAGARQAEARALAMIAKAIQAGAEAAACIgBADIgEABQgFAAgIgFg");
	this.shape_101.setTransform(87.6,45.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgsBAQgFgEAAgGQAAgFAEgEQADgDAFAAIAEABIADACIADADQACAEACAAQAFAAAFgHQAFgHAAgIQAAgIgHgPIgBgCIgPghIgJgTQgCgEgFgCIgFgDIgBgDQAAgFAFgBQAFgCAOAAQAOAAAFACQAFABAAAEIgBADIgBACIgEABQgEACAAACIACAHIAIATIAHASQADAFABAAIADgFIAHgPIAHgTIACgJQAAgDgGgDQgFgDAAgDQAAgDAEgBQAFgCALAAQALAAAEACQAFABAAAEQAAAEgGABIgEABQgFADgHARIgCAHIgNAeQgQApgJAMQgKAMgOAAQgHAAgFgEg");
	this.shape_102.setTransform(73.3,48.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgfAkQgOgOABgUQAAgWAOgPQAOgOAVAAQASAAAMAKQAKALABASQAAAGgCACQgCACgHAAIgkAAQgEAAgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgBAEAAIATAAIAEgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgGgHQgHgGgJAAQgLAAgFAKQgGAKABAOQAAAOAHAMQAIAKAMAAQAHAAAFgBQAEgCAFgDIADgDQAGgEACAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgCAEIgHAGQgIAHgIADQgIADgJAAQgUAAgOgOg");
	this.shape_103.setTransform(63.3,46.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAgBGIgFAAQgEgCgJgMIgEgEIgCgDQgXgegCAAIgBABIAAAEIAAAEIAAAVQABAFABACIAGADQAEACAAADQAAAEgEACQgGABgMAAQgPAAgEgBQgFgCAAgFQAAgCAFgCIACgBQADgCABgEIABgRIgBgLIAAgQIAAgKIAAgkQAAgKgCgBQgBgCgEgBIgEgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAJgEIAMgEIAKgBQABAAABAAQABAAAAABQABAAAAAAQAAABABAAQABABAAAFIgBASIAAAaIAAAXIAAAFIABABIAFgCIAGgGIAJgJIADgDQAAgBAAAAQgBAAAAgBQgBAAAAgBQgBAAgBAAQgCgCAAgEQAAgDADgDQAGgBAOAAQAIAAAFABQAEADAAADQAAAFgHACQgHABgDACQgDACgJAHIgBACIgDAEIgBABQgBACAJAMIABABIARAUIAKAKQACACAHADQAGABAAAEQAAAEgEACQgFACgLAAg");
	this.shape_104.setTransform(53.2,44.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgcAwQgFgBAAgFQAAgDAEgCIADgBQADgCABgCIABgLIAAgGIgBgIIAAgGIAAgWQgBgGgCgBIgFgBQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgEIANgEIAJgCQAFAAABANIAAACIAAAAQAFgHAGgFQAFgDAGAAQAGAAAEADQAEAFAAAGQAAAHgDAEQgDAEgFAAIgFgBIgEgDIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGAAgDAJQgCAJAAAcIABANQABAEACACIAEABQAGACAAAEQAAAEgFABQgGACgMAAQgPAAgEgCg");
	this.shape_105.setTransform(44,46.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAVAxIgBgFIAAgHIAAAAIgBAAIgDACIgCACQgEAEgGACQgFADgHAAQgHAAgHgDQgGgDgEgEQgFgGgCgIQgCgHAAgUIAAgHIAAgHIAAgCQAAgIgBgCQgBgCgDgBIgEgBQgGgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgDAHgCIANgDIAKgBQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAFIAAAFIgBAkQAAASAEAIQAEAIAKAAQAKgBAFgJQAFgKAAgXIAAgIQAAgHgBgCQgBgDgDAAIgEgBQgGgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAJgFIANgDIAKgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABABAAAEIAAAGIgBAnIAAAQIABAGQAAAFAFACIACAAQAGACAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgGADIgOAFIgKACQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_106.setTransform(34.2,46.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgUBFQgFgCAAgEQAAgEAFgCQAFgCACgBQABgCABgQIAAgtIAAgZIgBgQQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgGgBIgEAAQgGAAgFACQgDABgDAEIgDAGIgDAHIgCADIgEABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgDAAgGQAAgNACgHQADgJAFABIABAAIATABIA4AAIAUgBIABAAQAFgBADAJQADAHAAANIgBAJQgCACgDAAIgDgBIgDgDIgDgHIgDgGQgCgEgFgBQgDgCgHAAIgEAAIgFABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgBAQIAAAZIAAAtQAAAQACACQABABAFACQAFACAAAEQAAAEgFACQgGACgPAAQgOAAgGgCg");
	this.shape_107.setTransform(22.3,44.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AATBGIgBgFIAAgEIAAgDIgBAAIgDACIgEADQgGAFgFACQgFACgGAAQgSgBgLgNQgMgNAAgUQAAgYANgOQANgPAVABIAGABQADAAACACIABAFQAAAFgGAAIgCAAIgDgBQgKABgHAIQgGAIAAAQQAAAQAHAKQAHAKALAAQAJAAAGgGQAFgFAAgLIAAgaIAAgsQAAgGgBgDQgBgDgEgCIgDAAQgGgCAAgDQAAgDADgBIAJgFIALgDIAJgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQABADAAAEIAAAEIgBA7IABApQAAAJACABIAHACQAFACAAADQAAAEgOAFIgKADIgHABQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_108.setTransform(82.5,23.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgeAkQgOgOgBgUQAAgWAPgPQAOgOAVAAQATAAAKAKQALALAAASQAAAGgCACQgBACgIAAIgkAAQgCAAgDgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQADgBACAAIATAAIAGgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgJgHgHQgGgGgIAAQgLAAgGAKQgFAKgBAOQAAAOAJAMQAHAKALAAQAIAAAEgBQAGgCAEgDIAEgDQAEgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAACgDAEIgGAGQgIAHgIADQgIADgJAAQgUAAgNgOg");
	this.shape_109.setTransform(71.4,25.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgEA6QgFgBgEgDQgDgEgBgFQgCgFAAgPIAAgzIgJAAIgCAAIgBgDIAAgDQAAgCAKgJIAEgDIAEgEQAKgJADAAIACABIABADIAAASIAWAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABIABADIAAACIgBAEIgDABIgUAAIgBABIgBACIAAAwQAAAMACADQACADAGAAIAIgCIAGgBIAEABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgIAFQgIAFgKgBQgGAAgEgBg");
	this.shape_110.setTransform(62.9,24.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgGAyIgLgBIgDABIgDABIgCgBIgCgBQgDgDgDgHQgCgIAAgHQAAgDABgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAFAAAEAHIAEAGQADAEAFACQAFACAFAAQAGAAAEgDQAEgDAAgFQAAgJgQgHIgFgDQgPgIgGgFQgFgGAAgJQAAgNAJgIQAJgIAOAAIAGABIAGABIAFgCIADgBQAFAAAEAIQAFAIAAAIQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgDgBgDgFQgDgGgEgCQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAEAEADQADAEALAGIABAAQAbANAAAPQAAAOgKAJQgKAJgQAAg");
	this.shape_111.setTransform(55.2,25.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AARAtIgFgEIgEABQgLAJgMAAQgOgBgJgIQgJgIAAgNQAAgQAMgIQALgIAUAAQAEAAADABQACABAAAFQAAAEgGAAQgJAAgGAFQgGAFAAAHQAAAJAFAEQAFAFAIgBQAJAAAEgDQAEgFAAgKIAAgkQAAgIgEgFQgDgEgGgBQgFAAgEACIgIAHIgCACQgGAIgGAAQgEAAgCgCQgDgDAAgEQAAgJALgHQAMgFARAAQAKAAAIACQAHADAFAGQADADABAGQABAGAAAOIAAAeIABAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIADABQAGACAAADQAAAFgHAEQgGAEgJAAQgEAAgFgGg");
	this.shape_112.setTransform(46,25.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgjAkQgNgOAAgWQAAgUAOgPQAOgOAVAAQAVAAANANQAOAOAAAVQAAAVgPAPQgOAPgUAAQgVAAgOgOgAgSgcQgGAIABANQAAASAHANQAJANALAAQAJAAAFgIQAHgIgBgNQABgSgJgNQgIgNgKAAQgKAAgGAIg");
	this.shape_113.setTransform(35.4,25.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAVAwQgKgegGgHQgGgGgKAAQgHAAgBgFQAAgGAHAAQAPAAAIgHQAIgGgBgNQAAgNgIgGQgHgHgOAAIgKABQgDABgCADIgBAJIAAATIAAAqIAAAdQABAHACABIAEACQAGACABAEQAAAEgGACQgGACgOAAQgQAAgFgCQgFgCAAgEQgBgEAHgCIADgCQADgCAAgLIABgpIAAglQgBgOgCgCQAAgBgGgCQgEgCAAgEQAAgDACgCQADgCAGAAIAWAAIATAAIAOgBQAWAAALAJQALAJAAARQAAANgIAJQgHAKgNADIAAABQAKACAGAGQAGAHAEAPIADAKQAEAPAFAAIAEAAIADAAIADABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAEgGADQgGADgJAAQgSAAgHgXg");
	this.shape_114.setTransform(23.2,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]}).wait(131));

	// main-sides
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgJAmQgFgCgEgDQgEgDgCgEQgDgFAAgGQAAgEACgDIADgFIAEgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIgBgDIgCgDIgBgEIgBgFQAAgEACgEIAFgHQADgCAFgCQAEgBADAAIAJABIAHAEQADADACAEQADAEAAAEIgBAGIgCAEIgDADIgBACQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABIAEACIADAGQACADAAAEQAAAGgDAFQgCAEgEADQgEADgFACIgKABQgEAAgFgBgAgEAEIgFACIgDAEIgBAFIABAFIADAEIAFADIAEABIAFgBIAFgDIADgEQACgCAAgDQAAgDgCgCIgDgEIgFgCIgFgBIgEABgAgDgbIgDADIgCADIgBAEIABAEIACADIADADIADABIAEgBIADgDIADgDIAAgEIAAgEIgDgDIgDgDIgEgBIgDABg");
	this.shape_115.setTransform(123.5,55.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AATAnIgCgBIgCgBIAAgBIgNgUIgCgCIgDgBIgKAAIgCABQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIAAATIgBACIgCABIgDABIgDgBIgDAAIgBgEIAAhFIABgCIACgBIAfAAQAGAAAFACQAFACADAEQAEADACAFQACAFAAAGQAAAFgCAEIgGAGIgFAEQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAABIADAEIAEAGIAEAHIACADIgBACIgDACIgCABIgDABgAgPgXQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAAAIAAASQAAAAAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAPAAIAGAAQACAAACgDIADgDIABgFQAAgHgEgDIgEgCIgGgBIgPAAIgDABg");
	this.shape_116.setTransform(113.5,55.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgHAnIgIgDIgHgDIgGgFQgFgFgEgIIgCgHIgBgIIABgHIACgHQAEgHAFgGIAGgFIAHgDIAIgCIAHgBIAIABIAHACQAIADAGAFQAFAGADAHQADAHABAHIgBAIIgDAHQgDAIgFAFQgGAFgIADIgHADIgIAAIgHAAgAgJgXQgEACgEAEIgGAIQgCAFAAAEQAAAGACAEQADAFADAEQAEADAEACQAFACAEAAQAFAAAFgCQAFgCADgDQADgEACgFQACgEAAgGQAAgEgCgFQgCgFgDgDQgDgEgFgCQgFgCgFAAIgJACg");
	this.shape_117.setTransform(104.9,55.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgWAnIgDAAQgCAAgBgEIAAhFIAAgDIADgBIAzAAIACABIABACIAAADIAAACIgBADIgCADIglAAIgCABIgCACIAAAKQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIACABIAYAAIACACIABADIAAACIAAABIgBAEQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgYAAIgBAAIgBABIgCABIAAACIAAAaIgCADIgCABg");
	this.shape_118.setTransform(97.8,55.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgQAkQgIgDgGgFIgBgCIgBgBIACgDIACgDIACgBIADgBIAEACIAEACIAHAEQAEABAEAAIAGAAIAFgCIAFgEQABgCABgDQgBgDgBgCQgCgCgEgBIgIgCIgIgBIgJgCQgEgBgEgBQgDgCgCgEQgCgEAAgGQAAgFADgFQADgEAFgDIAKgEIAJgCIAIABIAHACIAHADIAGAFIABABIAAABIgBACIgCADIgDACIgDABIgCgBQgEgDgFgDQgEgBgFAAIgFAAIgFABIgEAEQgCACAAADQAAAEAFACIAJADIAKABQAGABAFACQAGACADADQAFAEAAAIQgBAGgDAGQgDAEgFADQgEADgHACIgKABQgIABgIgEg");
	this.shape_119.setTransform(86.9,55.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgZAlIgDAAIgBgCIAAhFIABgCIADAAIA0AAIACABIABACIAAACIAAADIgBADIgCABIgnAAIgBABIgCADIAAAKIABADIADAAIAZAAIABABIAAADIABADIAAABQAAADgDABIgYAAIgCACQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIAAALIABACIADACIAlAAQABAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAACIAAADIgBADIgCAAg");
	this.shape_120.setTransform(80,55.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgfAlIgDAAIgBgCIAAhEIABgDIACAAIAcAAIAHAAIAIACQAIADAFAFQAGAFADAGIACAIIABAHQAAAIgDAIIgEAGIgFAGIgGADIgHAEQgHACgIAAgAgUgXIgBAEIAAAoIABACIADACIANAAQAFgBAFgCQAEgBAFgDQADgDACgFQACgEAAgGQAAgEgCgFQgCgEgDgEIgJgFQgFgBgFgBIgNAAIgDABg");
	this.shape_121.setTransform(72,55.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgCAnQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAhJIACgBIACgBIACAAIADAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIAABHIgCACIgCABIgDAAg");
	this.shape_122.setTransform(65.7,55.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgQAkQgIgDgGgFIgBgCIgBgBIACgDIACgDIACgBIADgBIAEACIAEACIAHAEQAEABAEAAIAGAAIAFgCIAFgEQABgCAAgDQABgDgCgCQgCgCgEgBIgIgCIgIgBIgJgCQgEgBgEgBQgDgCgCgEQgCgEAAgGQAAgFADgFQADgEAFgDIAKgEIAJgCIAIABIAHACIAHADIAGAFIABABIAAABIgBACIgCADIgDACIgDABIgCgBQgEgDgFgDQgEgBgFAAIgFAAIgFABIgEAEQgCACAAADQAAAEAFACIAJADIAKABQAGABAFACQAGACADADQAFAEAAAIQgBAGgDAGQgDAEgFADQgEADgHACIgKABQgIABgIgEg");
	this.shape_123.setTransform(60.4,55.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgQAmQgEgCgEgDQgEgDgDgEQgCgEgBgGQABgGACgEQACgEAFgCIABgCIAAgBIgBgDIgBgCIgCgEIgBgGQAAgFACgEQACgEADgCQAEgDAEgBIAJgBQAFAAAEABQAFACADADQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgBACIgCADIgCABIgCABIgDgBIgDgCIgCgCIgEgBIgEABIgEACIgDADIgBAEQAAAFACACIAFADIAFABIAEABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAADIAAACQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgFABIgHACIgDAEQgCADAAADIABAGIAEAEIAFACIAFABQAFAAAEgCQAEgDACgEIACgIIABgKIAAgBIAAgCQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIALAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABADIgBACIgDABIgCAAIgCABIgBACIAAABQgBAIgCAGQgCAGgEAEQgEAFgFADQgGACgHAAIgLgBg");
	this.shape_124.setTransform(49.8,55.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAWAnIgDgCIgegqIgDgBIgCABIAAACIAAAmIgDADIgEAAIgEAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhGIAAgCIADgBIADgBIACAAQADAAACADIAeAoIACABIACgBIAAgBIAAgmIACgCIACgBIADAAIADAAQADAAABADIAABIIgCACIgDABg");
	this.shape_125.setTransform(38.6,55.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgCAnQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAhJIACgBIACgBIACAAIADAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIAABHIgCACIgCABIgDAAg");
	this.shape_126.setTransform(32.9,55.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAbAmIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIgFgKIgBgCIgCAAIgZAAIgBAAIgBABIgBAAIgBABIgEAKIgBACIgCAAIgCABIgCAAIgCAAIgDgBIgCAAIgBgCIAfhGIACgCIACAAIADAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAdBGIABAAIgBACIgDABIgCAAgAgBgKIgBACIgBADIgCAFIgCADIgBADIgBACIABACIABAAIAPAAIABAAIABgCIgBgDIgDgFIgCgHIgCgEIgCAAIAAAAg");
	this.shape_127.setTransform(27.6,55.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAZAmIgDgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgiIgBgBIgCgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgMATQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAAAIgCgBIgCgBIgKgTQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIgBABIAAAiQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgFABIgCAAIgCgBIgBgBIAAgBIAAhEQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAFAAIACAAIACACIASAeQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIADgBIABgCIASgdQACgDAEAAIADABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAABFIgBACIgCAAIgCABg");
	this.shape_128.setTransform(19.8,55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]}).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.9,49,321,102);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 320,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;