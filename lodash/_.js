let _ = {};


// clamp
_.clamp = (number, lower, upper) => {
    let clampResult;
    let higherClampValue;

    // verify all arguments are numbers
    if (typeof number === 'number' && typeof lower === 'number' && typeof upper === 'number') {
        // verify a proper range
        if (lower < upper) {
      
            higherClampValue = Math.max(number, lower);
            // clampResult
            clampResult = Math.min(higherClampValue, upper);

        } else {
            clampResult = "The lower argument should be lower than the upper argument."
        }

    } else {
        clampResult = "All arguments to this function should be numeric."
    }

    return clampResult;
};


// inRange
_.inRange = (number, start, end) => {
    let inRangeResult;
    let tempSwap;

    if (end === undefined) {
        end = start;
        start = 0;
    }

    // verify all arguments are numbers
    if (typeof number === 'number' && typeof start === 'number' && typeof end === 'number') {
        // verify a proper range
        if (start > end) {
            tempSwap = end;
            end = start;
            start = tempSwap;
        } 
        // inRangeResult
        inRangeResult =  (number >= start) && (number < end);


    } else {
        inRangeResult = "All arguments to this function should be numeric."
    }

    return inRangeResult;
};

// words
_.words = (string) => {

    // default string
    if (string === undefined) {
        string = '';
    }
    
    return string.split(' ');
};

// pad
_.pad = (string, padToLength) => {
    let padResult;
    let initialLength = string.length;
    let targetPadLength = 0;
    let padLength = 0;
    let remainderLength = 0;
    let padSpacer = ' ';

    if (initialLength >= padToLength) {
        // string too long: no padding
        padResult = string;
    } else {
        // pad when string is shorter
        targetPadLength =  padToLength - initialLength;
        padLength = Math.floor(targetPadLength / 2);
        remainderLength = targetPadLength % 2;
        //
        padResult = remainderLength ? `${padSpacer.repeat(padLength)}${string}${padSpacer.repeat(padLength)}${padSpacer.repeat(remainderLength)}` : `${padSpacer.repeat(padLength)}${string}${padSpacer.repeat(padLength)}`;
    }
    
    return padResult;
};

// has
_.has = (obj, key) => {
    return obj[key] !== undefined ? true : false;
};

// invert
_.invert = (obj) => {
    let invertedObj = {};
    let valueAsProp;

    for (let prop in obj) {
        valueAsProp = obj[prop];
        invertedObj[valueAsProp] = prop;
    }
  
    return invertedObj;
};

// findKey
_.findKey = (obj, fnc) => {
    let findKeyResult = undefined;
    let value;
    let fncReturn; 
   
    for (let prop in obj) {
        value = obj[prop];
        fncReturn = fnc(value);
        fncReturn ? findKeyResult = prop : false;
    }
 
    return findKeyResult;
};

// drop
_.drop = (arr, number) => {
    let arrAfterDrop = [];

    if (number === undefined) {
        number = 1;
    }
    
    if (arr.length && number > 0) {
        arrAfterDrop = arr.slice(number);
    }
  
    return arrAfterDrop;
};

// dropWhile
_.dropWhile = function(arr, fnc) { 
    let arrAfterDropWhile = [];
    let dropNumber; 

    dropNumber = arr.findIndex(function(element, index){
        return !fnc(element, index, arr);
    })

    arrAfterDropWhile = this.drop(arr, dropNumber);
    
    return arrAfterDropWhile;
}

// chunk
_.chunk = (arr, size) => {
    let arrChunkCollection = [];
    let arrChunk = [];

    if ((size === undefined || size < 1) || (size > 0 && arr.length < size) ) {
        size = 1;
    }
    
    for (let i = 0; i < arr.length; i++) {
        arrChunk.push(arr[i]);
        
        if ((1+i)%size == 0 || i == arr.length -1) {
            arrChunkCollection.push(arrChunk); // last item of chuck: push to collection
            arrChunk = []; // reset for new chunk 
        }
    }
     
    return arrChunkCollection;
};

// Do not write or modify code below this line.
module.exports = _;