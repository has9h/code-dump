var toDoList = [
	{title: "Task 1", Description: "Hello", status: ""},
	{title: "Task 2", Description: "World", status: ""},
	{title: "Task 3", Description: "", status: ""},
];
// None of this works. Don't know what I'm doing or what's happening
var noteStorage = localStorage.getItem('noteStorage')
				? JSON.parse(localStorage.getItem('noteStorage')) : {items: []};

localStorage.setItem('noteStorage', JSON.stringify(noteStorage));


$(document).ready(function(){
	console.log("Ready");

	// Doesn't work
	$("#button").on("submit", function(event){
		console.log("Submitting");
		localStorage.setItem(noteStorage, $("#inputVal").val());
		var taskInput = $("#inputVal").val();
		taskInput ? console.log(taskInput) : alert("Please enter a Task");

		var cardSection = $("div").addClass('col-md-4');
		var cardDiv = $("div").addClass('card');
		var bodyDiv = $("div").addClass('card-body');

		var cardTitle = $("h5").addClass('card-title').text(taskInput);
		console.log(taskInput);

		bodyDiv.append(cardTitle);

		cardDiv.append(bodyDiv);
		cardSection.append(cardDiv);

		$('#notes').append(cardSection);
	});

	$("#showNote").click(function(){
		console.log("Test");
		$("#form").hide();
		$("#notes").hide();
		$("#detailedNote").show();
	})

	$("#hideNote").click(function(){
		console.log("Hide");
		$("#form").show();
		$("#notes").show();
		$("#detailedNote").hide();
	})
});
