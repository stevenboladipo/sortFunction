var resultDiv = document.getElementById('result');
var startDiv = document.getElementById('start');
var button = document.getElementsByTagName('button');

var numbers =[1, 34, 87568, 9990, 564, 28634, 553, 222, 3456, 0, 0.1, 72, 34, 66, 660, 765, 145];

startDiv.innerHTML=numbers;

function sorter(nums){

for(var i=0; i< nums.length; i++){
	for(var j=0; j< nums.length; j++){
		if(nums[j-1] > nums[j]){
			var top = nums[j-1];
			nums[j-1] = nums [j];
			nums[j] = top;
		}
	}
}
	resultDiv.innerHTML = nums;
}

function clicked (){
	sorter(numbers);
}

button[0].addEventListener('click', clicked);