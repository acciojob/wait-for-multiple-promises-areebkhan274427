//your JS code here. If required.

const table = document.getElementById('output');
const loadingRow = document.querySelector('#loading');

var promises=[];

for(let i=1;i<=3;i++){
	const promise = new Promise((resolve,reject)=>{
		const randomTime = Math.floor(Math.random() * (3000)) + 1000;
		setTimeout(()=>{
			resolve(randomTime/1000);
		},randomTime)
	})
	promises.push(promise);
}

Promise.all(promises).then((result)=>{
	table.removeChild(loadingRow);
	for(let i=1;i<=3;i++){
		const row = document.createElement('tr');
		const proCol = document.createElement('td');
		const timeCol = document.createElement('td');
		
		proCol.textContent = `Promise ${i}`;
		timeCol.textContent = `${result[i-1]}`;

		row.appendChild(proCol);
		row.appendChild(timeCol);
		table.appendChild(row);
	}

	const totalRow = document.createElement('tr');
	const totalCol = document.createElement('td');
	const totalTimeCol = document.createElement('td');

	totalCol.textContent = 'Total';
	totalTimeCol.textContent = `${
		result.reduce((acc,val)=>{
			return acc+val;
		},0)
	}`

	totalRow.appendChild(totalCol);
	totalRow.appendChild(totalTimeCol);
	table.appendChild(totalRow);

})


