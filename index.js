
let movie_names = []

if(JSON.parse(localStorage.getItem("movieNames"))!=null)
	movie_names = JSON.parse(localStorage.getItem("movieNames"));

var executed = false;

const input_val = document.getElementsByClassName("url_input")[0];
const output_val = document.getElementsByClassName("scroller")[0]
document.getElementById("call_add_btn").addEventListener("click", saveData);

if(!executed)
{
	pushing_div();
	setup()
	executed = true;
}


function saveData()
{
	if(input_val.value=='')
		return;
	

	movie_names.push(input_val.value);
	input_val.value = '';

		pushing_div();
	setup();

	localStorage.setItem("movieNames", JSON.stringify(movie_names));

}

function pushing_div()
{
	let helper_array = ''
	for(let i=movie_names.length-1;i>=0;i--)
		helper_array += `<div class="div${i}" style ="display: flex"> <p> ${movie_names[i]} </p> <button id="linker" class ="${i}"> Remove </button> <br/> </div>`;	
	
	output_val.innerHTML = helper_array;

}

function setup()
{
	$("button").click(function (event)
	{
		console.log("here");
		let temp = event.target.className;
		if(temp != 'add_btn')
		{
			document.getElementsByClassName("div"+temp)[0].remove();
			movie_names.splice(temp,1);
		}	

		
	localStorage.setItem("movieNames", JSON.stringify(movie_names));

	});
}