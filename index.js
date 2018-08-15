function vote() {
	let votes = document.getElementById('votes');
	let count = parseInt(votes.innerHTML);
	count++;
	votes.innerHTML = count;

}


function voteDown() {
	let votes = document.getElementById('votes');
	let count = parseInt(votes.innerHTML);
	count--;
	votes.innerHTML = count;
}